import React from 'react'

const Banner = () => {
  return (
    <div className='flex justify-center items-center md:h-[44vh] flex-col gap-4'>
        <div className='flex justify-center items-center flex-col gap-2'>
          <p className='text-5xl font-bold flex items-center gap-1'>
            Fund My Samosa
            <span><img width={55} src='/samosa.gif'/></span>
          </p>
          <p className='text-xl'>
            A crowdfunding platform for creators.
          </p>

        </div>
        <div className="mt-5 flex gap-4">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Start Here
              </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Read More
              </span>
            </button>
        </div>
      </div>
  )
}

export default Banner