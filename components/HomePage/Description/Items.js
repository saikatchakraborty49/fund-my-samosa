import React from 'react'

const Items = (props) => {
    const {image,text1,text2}=props
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-[90px] h-[90px] rounded-full bg-purple-300/45 flex justify-center items-center'>
           <img className='h-[75px] object-cover' src={image}/> 
        </div>
       <p className='mt-3 text-center'>{text1}</p>
       <p className='mt-2 text-center'>{text2}</p>
    </div>

  )
}

export default Items