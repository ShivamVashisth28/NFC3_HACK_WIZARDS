import React from 'react'

function ImageCard({
    imgSrc,
    imageText
}) {
  return (
    <>
        <div className='w-[22rem] flex flex-col justify-center shadow-2xl hover:scale-105 transiton-all duration-150 items-center border-5 border-black rounded-3xl'>
            <div className='p-2 '>
                <img src={imgSrc} alt="" />
            </div>
            <div >
                <div className='text-2xl '>{imageText}</div>
            </div>
        </div>
    </>
    
  )
}

export default ImageCard