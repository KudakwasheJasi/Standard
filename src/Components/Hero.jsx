import React from 'react'
import image1 from '../assets/images/pricing.png'


const Hero = () => {
  return (
    
    <>
   <section id="hero">
    
    
    {/* Flex Container */}
    <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">

        {/* Left item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
         <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring Everyone together to build better products
         </h1>
         <p className="max-w-sm text-center text-gray-600 md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
         </p>
         <div className="flex justify-center md:justify-start">
         <a href='#' className="  p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-gray-900 ">Get Started</a>
         </div>
        </div>
         {/* Image */}
        <div className="md-w-1/2">
         <img src={image1} alt="" />
        </div>
    </div>
   </section>
    
    </>
  )
}

export default Hero