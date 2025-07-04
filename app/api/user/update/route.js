import dbConnect from "@/db/dbConnect"
import User from "@/models/User";
import { NextResponse } from "next/server";

export const PUT=async (req) => {
    try {
        await dbConnect();
        const formData=await req.json();
        // console.log("**********formdata**************");
        console.log(formData);
        const email=formData.email
        const field=formData.field;
        const value=formData.value;
        const currUser=await User.findOneAndUpdate({email}, {[field]:value}, {new:true})
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