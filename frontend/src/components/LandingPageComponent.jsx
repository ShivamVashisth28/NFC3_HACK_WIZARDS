import React from 'react'

function LandingPageComponent(
    {
        imgSrc = "landing/pic2.png" ,
        tagLine
    }
) {
  return (
    <div className='flex bg-color border-b-2 border-black'>
       
        <div className='text-[4rem] p-10 pb-0  text-left items-center flex '>
            The Best Place For All Your Pet Needs
        </div>
        <div className='m-2 mb-0 pr-[6rem]'>
            <img src={imgSrc} alt="" className='h-[25rem] min-w-[25rem] m-12 mb-0 rounded-lg' />
        </div>
    </div>
  )
}

export default LandingPageComponent


{/* <div className='text-2xl border-2 border-black rounded-2xl p-2 hover:scale-105 cursor-pointer bg-yellow-100'>PetWorld</div> */}
