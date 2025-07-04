"use client"
import React, { useEffect, useState } from 'react'
import ProfileBanner from './ProfileBanner';
import ProfileSupportMessages from './ProfileSupportMessages';
import PaymentPage from './PaymentPage';
import { apiConnector } from '@/services/apiConnector';

const ProfilePage = ({userName}) => {
    const [data,setData]=useState()
    const [paymentData,setPaymentData]=useState(false)
    const [topPayments,setTopPayments]=useState()
    const [totalAmount,setTotalAmount]=useState()
    const [totalPayments,setTotalPayments]=useState()

    async function fetchData() {
      try {
        const response=await apiConnector("GET",`api/user/getData/${userName}`);
        // console.log(response);
        if(response.data.message==="No user found"){
            setData({notFound:true})
        //   return(
        //     <div className='w-screen h-screen flex justify-center items-center'>
        //       <div>No User Found</div>
        //     </div>
        //   )
        }
        else{
          setData({notFound:false,
            currUser:response.data.currUser})
        }
      } catch (error) {
        console.log(error);
        // toast 
      }

    }

    async function fetchSupportData() {
        // console.log("hello");
        try {
            // console.log(data.currUser._id);
          const response=await apiConnector("GET",`api/user/support/${data.currUser._id}`)
        //   const {totalAmount,totalPayments,topPayments}=response.data;
          setTopPayments(response.data.topPayments)
          setTotalPayments(response.data.totalPayments)
          setTotalAmount(response.data.totalAmount)
          setPaymentData(true)
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
      fetchData()
    }, [])
    useEffect(() => {  
        if(data){  
            fetchSupportData()
        }
    }, [data])
    
  return (
    <div>
        {(!data || !paymentData)?
            <div className='w-screen h-[80vh] flex justify-center items-center'>Loading</div>:
            <>
            {data.notFound==false?
            <div>
                {/* {console.log(data.currUser)} */}
                <ProfileBanner 
                    data={data.currUser} 
                    totalAmount={totalAmount} 
                    totalPayments={totalPayments}
                />
                <div className='mt-2 flex flex-col md:flex-row items-center md:justify-center md:items-center gap-4'>
                  <ProfileSupportMessages
                    data={data.currUser}
                    topPayments={topPayments}
                  />
                  <PaymentPage 
                    data={data.currUser}
                    // userName="saikatchakraborty"
                  />
                </div>
            </div>
            :
            <div className='w-screen h-[80vh] flex justify-center items-center'>
                <div>No User Found</div>
            </div>
            }
            </>
        }
        
    </div>
  )
}

export default ProfilePage