import LineBreak from '@/components/Common/LineBreak'
import Banner from '@/components/HomePage/Banner'
import Description from '@/components/HomePage/Description/Description'
import React from 'react'

const page = () => {
  // console.log(process.env.NEXT_PUBLIC_URL);
  return (
    <div>
      <Banner/>
      <LineBreak/>
      <Description/>

      {/* <div className='h-[30vh] w-screen bg-white text-black'>
        Hi saikat here
      </div> */}
      {/* <div className="relative inset-0 h-[50vh] w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        <div>Hello saikat here</div>
      </div> */}
      {/* <div class="h-[50vh] w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
    </div>
  )
}

export default page