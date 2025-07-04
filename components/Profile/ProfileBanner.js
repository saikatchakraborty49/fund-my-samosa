"use client"
import { apiConnector } from '@/services/apiConnector';
import React, { useEffect } from 'react'

const ProfileBanner = ({data,totalAmount,totalPayments}) => {
  console.log(data);
  
    const BannerLink=data.profileBanner || "emptyBanner.png"
    const ProfilePic=data.profilePicture
  return (
    <>
        <div className='w-screen h-[80vh] relative'>
          <div className='relative w-screen'>

            <img className='object-fill w-screen' src={BannerLink}/> 
            <div className='z-10 border-4 border-blue-800 rounded-full w-[125px] h-[125px] absolute bottom-0 translate-y-[50%] left-[50%] -translate-x-[50%]'>
                <img className='w-full h-full rounded-full' src={ProfilePic}/>
            </div>
            <div className='absolute -bottom-[135px] left-[50%] -translate-x-[50%] flex flex-col items-center justify-center'>    
                  <p>@{data.userName}</p>
                  <p>{data.bio?data.bio:"-"}</p>
                  <div className='flex gap-2'>
                    <p>{totalPayments} contributions</p>
                    <p>₹{totalAmount} raised</p>
                  </div>
            </div>
        </div>
        <div className='border-2 border-blue-800 opacity-25'></div>
          </div>
    </>
  )
}

export default ProfileBanner