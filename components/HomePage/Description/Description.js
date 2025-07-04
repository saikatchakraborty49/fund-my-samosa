import React from 'react'
import Items from './Items'
// import coin from '/coin.gif'

const Description = () => {
  return (
    <div>
      <p className='text-2xl mt-5 text-center'>Your fans can fund you a Samosa!</p>
      <div className='md:h-[45vh] flex flex-col md:flex-row gap-10 justify-center items-center'>
        <Items
          image={"/man.gif"}
          text1={"Fans want to help"}
          text2={"Your fans are available to support you"}
          />
        <Items
          image={"/coin.gif"}
          text1={"Fans want to contribute"}
          text2={"Your fans want to contribute financially"}
          />
        <Items
          image={"/group.gif"}
          text1={"Fans want to collaborate"}
          text2={"Your fans are ready to collaborate with you"}
          />
      </div>
    </div>
  )
}

export default Description