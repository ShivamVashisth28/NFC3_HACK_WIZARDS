import React from 'react'
import Navbar from '../components/Navbar'
import LandingPageComponent from '../components/LandingPageComponent'
import ImageCard from '../components/ImageCard'

function Home() {
  return (
    <>
      <Navbar/>
      <LandingPageComponent />
      <div className='flex justify-center items-center h-[6.8rem] '>
        Something here
      </div>

      <div className='h-[100vh] bg-color flex flex-wrap gap-5 justify-center p-12'>
          <ImageCard imgSrc={'/pets/1.png'} imageText={'Cute Pets Waiting for you'} />
          <ImageCard imgSrc={'/pets/2.png'} imageText={'Cute Pets Waiting for you'} />
          <ImageCard imgSrc={'/pets/3.png'} imageText={'Cute Pets Waiting for you'} />
          <ImageCard imgSrc={'/pets/4.png'} imageText={'Cute Pets Waiting for you'} />
          <ImageCard imgSrc={'/pets/5.png'} imageText={'Cute Pets Waiting for you'} />
          <ImageCard imgSrc={'/pets/6.png'} imageText={'Cute Pets Waiting for you'} />
      </div>  
  
    </>
  )
}

export default Home