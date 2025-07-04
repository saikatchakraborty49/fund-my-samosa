import dbConnect from "@/db/dbConnect"
import Payment from "@/models/Payment"
import { NextResponse } from "next/server"

export const GET=async(req,{params})=>{
    try {
        await dbConnect()
        const id=await params.id
        console.log(id);
        let payments=await Payment.find({receiverName:id,done:true});
        let totalAmount=0;
        for (let index = 0; index < payments.length; index++) {
            totalAmount+=(payments[index].amount)          
        }
        const topPayments=[...payments].sort(function(a,b){return b-a}).slice(0,6)
        return NextResponse.json({
            success:true,
            totalAmount,
            totalPayments:payments.length,
            topPayments
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
        })
    }
}