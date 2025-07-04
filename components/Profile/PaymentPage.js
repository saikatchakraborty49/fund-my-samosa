// logo

"use client"
import React, { useState } from 'react'
import Script from 'next/script'
// import Razorpay from 'razorpay'
import { apiConnector } from '@/services/apiConnector'

const PaymentPage = ({data}) => {
    // console.log("data");
    // console.log(data);
    const {razorpayId,razorpaySecret}=data
    const [name,setName]=useState()
    const [amount,setAmount]=useState()
    const [message,setMessage]=useState()
    function handleChange(event){
        const {name,value}=event.target;
        
        if(name=="name"){
            setName(value)
        }
        if(name=="message"){
            setMessage(value)
        }
        if(name=="amount"){
            setAmount(value)
        }
    
    }
    const handlePayment=async(event)=>{
        try{
            event.preventDefault();
            const userName=data.userName
            const formData={
                amount,
                userName,
                name,
                message,
                razorpayId,
                razorpaySecret
            }
            const response=await apiConnector("POST","api/razorpay/createOrder",formData)
            // console.log(response);
            const {createOrder}=response.data
            // console.log(createOrder);
            var options = {
            "key": data.razorpayId, // Enter the Key ID generated from the Dashboard
            "amount": createOrder.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Fund My Samosa", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": createOrder.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay/verifyPayment`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": name, //your customer's name
                // "email": email,
                // "contact": "" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
            };
            // console.log(options);
            var rzp1 = new Razorpay(options);
            rzp1.open();
        }catch(error){
            console.log(error);
        }
        
    }
  return (
      <div className='h-[350px] bg-blue-500/25 px-9 p-3 rounded-md w-[95%] md:w-[45%] flex flex-col'>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <h3 className='font-bold text-2xl mb-2'>Make a Payment</h3>
      <div className='w-full h-full flex flex-col justify-center'>
      <form className='flex flex-col'>
      <input required name='name' onChange={handleChange} value={name} className='p-2 mt-1 bg-black/35 rounded-md' placeholder='Enter Name'></input>
      <input name='message' onChange={handleChange} value={message} className='p-2 mt-1 bg-black/35 rounded-md' placeholder='Enter Message'></input>
      <input required type='number' min="1" name='amount' onChange={handleChange} value={amount} className='p-2 mt-1 bg-black/35 rounded-md' placeholder='Enter Amount (In Rupees)'></input>
      <button onClick={handlePayment} type="submit" className="w-full mt-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
      </form>
      <div className='w-full flex justify-between'>
        <button onClick={()=>{setAmount(25)}} type="button" className="text-white bg-blue-700/25 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Pay &#8377;25
        </button>
        <button onClick={()=>{setAmount(50)}} type="button" className="text-white bg-blue-700/25 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Pay &#8377;50
        </button>
        <button onClick={()=>{setAmount(75)}} type="button" className="text-white bg-blue-700/25 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Pay &#8377;75
        </button>
        <button onClick={()=>{setAmount(100)}} type="button" className="text-white bg-blue-700/25 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Pay &#8377;100
        </button>
        <button onClick={()=>{setAmount(150)}} type="button" className="text-white bg-blue-700/25 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Pay &#8377;150
        </button>
      </div>
      </div>
    </div>
  )
}

export default PaymentPage