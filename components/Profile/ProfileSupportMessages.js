import React from 'react'

const ProfileSupportMessages = ({topPayments}) => {
  return (
    <div className='h-auto md:h-[350px] bg-blue-500/25 p-3 rounded-md w-[95%] md:w-[45%]'>
      <h3 className='text-2xl font-bold'>Top Supporters</h3>
      {/* <div className='w-full h-full flex flex-col justify-center'> */}
      {topPayments.map((payment)=>(
        <div className='flex gap-1 items-center'>
          <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
          <p className='truncate w-full '>{payment.senderName} donated ₹{payment.amount} with a message "{payment.message}"</p>
        </div>
      ))}
      {/* <div className='flex gap-1 items-center'>
        <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
        <p>Shubham donated $30 with a message "Lots of love Saiiiii"</p>
      </div>
      <div className='flex gap-1 items-center'>
        <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
        <p>Shubham donated $30 with a message "Lots of love Saiiiii"</p>
      </div>
      <div className='flex gap-1 items-center'>
        <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
        <p>Shubham donated $30 with a message "Lots of love Saiiiii"</p>
      </div>
      <div className='flex gap-1 items-center'>
        <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
        <p>Shubham donated $30 with a message "Lots of love Saiiiii"</p>
      </div>
      <div className='flex gap-1 items-center'>
        <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
        <p>Shubham donated $30 with a message "Lots of love Saiiiii"</p>
      </div>
      <div className='flex gap-1 items-center'>
        <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
        <p>Shubham donated $30 with a message "Lots of love Saiiiii"</p>
      </div>
      <div className='flex gap-1 items-center'>
        <img className='w-[40px] h-[40px] rounded-full' src={"/avatar.gif"}/>
        <p>Shubham donated $30 with a message "Lots of love Saiiiii"</p>
      </div>       */}
      {/* </div> */}
    </div>
  )
}

export default ProfileSupportMessages