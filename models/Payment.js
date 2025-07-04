import mongoose from "mongoose";
const {Schema,model,models}=mongoose;

const paymentSchema = new Schema({
    oid:{
        type:String,
        required:true,
    },
    senderName: {
        type: String,
        required: true
    },
    receiverName: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    message:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    done:{
        type:Boolean,
        default:false
    }
});

export default models.Payment || model("Payment", paymentSchema);
