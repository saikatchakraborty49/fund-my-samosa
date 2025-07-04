import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import {
  validatePaymentVerification,
  validateWebhookSignature,
} from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import dbConnect from "@/db/dbConnect";
import User from "@/models/User";

export const POST = async (req) => {
    console.log("verify payment");
  try {
    await dbConnect();
    // Razorpay callback ke liye ye use karo
    const rawBody = await req.text();
    console.log("rawbody");
    console.log(rawBody);
    const params = new URLSearchParams(rawBody);

    const razorpay_order_id = params.get("razorpay_order_id");
    const razorpay_payment_id = params.get("razorpay_payment_id");
    const razorpay_signature = params.get("razorpay_signature");

    const payment=await Payment.findOne({oid:razorpay_order_id}).populate("receiverName")
    if(!payment){
      return NextResponse.json({
        success:false,
        message:"Order ID not found"
      })
    }

    // const user=await User.findById(payment.receiverName, projection, options)

    //         console.log(razorpay_order_id+"    "+razorpay_payment_id+"      "+razorpay_signature)
    // var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })
    var instance = new Razorpay({
      key_id: payment.receiverName.razorpayId,
      key_secret: payment.receiverName.razorpaySecret,
    });

    let xx = validatePaymentVerification(
      { order_id: razorpay_order_id, payment_id: razorpay_payment_id },
      razorpay_signature,
      payment.receiverName.razorpaySecret
    );
    if (xx) {
      const updatedPayment = await Payment.findOneAndUpdate(
        { oid: razorpay_order_id },
        { done: true },
        { new: true }
      ).populate("receiverName");

      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.receiverName.userName}`
      );
    } else {
      // IMPORTANT: If validation fails, you must return a response as well
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed.",
        },
        { status: 400 }
      ); // Consider a 400 Bad Request status for failed validation
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "error",
    });
  }
};
