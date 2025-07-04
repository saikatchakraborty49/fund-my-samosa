import dbConnect from "@/db/dbConnect";
import Payment from "@/models/Payment";
import User from "@/models/User";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export const POST=async(req)=>{
    try {
        await dbConnect();
        const formData=await req.json();
        // console.log(formData);
        const user=await User.findOne({userName:formData.userName})
        // var instance = new Razorpay({ key_id: user.razorpayId, key_secret: user.razorpaySecret })
        var instance = new Razorpay({ key_id: formData.razorpayId, key_secret: formData.razorpaySecret })
        const createOrder=await instance.orders.create({
        amount: formData.amount*100,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
        })
        await Payment.create({ oid: createOrder.id, senderName:formData.name,receiverName:user._id, amount: formData.amount, message:formData.message})
        // await Payment.create()
        return NextResponse.json({
            success:true,
            createOrder
        })        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message:error
        })
    }
    
}