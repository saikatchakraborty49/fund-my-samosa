import dbConnect from "@/db/dbConnect"
import User from "@/models/User"
import { NextResponse } from "next/server"

export const GET=async(req,{params})=>{
    try {
        await dbConnect()
        const userName=await params.userName
        let currUser=await User.findOne({userName})
        if(!currUser){
            return NextResponse.json({
                success:true,
                message:"No user found"
            })
        }
        return NextResponse.json({
            success:true,
            currUser
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
        })
    }
}