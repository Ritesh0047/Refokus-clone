import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex flex-col xl:flex-row  gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        <div className=" w-full xl:basis-1/2">
        <h1 className='text-center text-3xl xs:text-5xl sm:text-7xl 
        md:text-8xl lg:text-9xl xl:text-[11.5rem] font-extrabold leading-none'>refokus.</h1></div>
        <div className="w-full xl:basis-1/2 flex gap-5 px-2 lg:px-4">
        <div className='basis-1/3'>
          <h4 className='mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-zinc-500 capitalize'>Socials</h4>
         {["instagram", "Twitter","LinkedIn"].map((item,index)=> <a className='block mt-1 md:mt-2 xl:mt-3 text-zinc-600 capitalize text-sm md:text-md' key={index}>{item}</a>)}
        </div>
        <div className='basis-1/2'>
          <h4 className='mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-zinc-500 capitalize'>Sitemaps</h4>
         {["Home", "Work","Careers","Contact"].map((item,index)=> <a className='block mt-1 md:mt-2 xl:mt-3 text-zinc-300 capitalize text-sm xl:text-md' key={index}>{item}</a>)}
        </div>
        <div className='w-1/3 flex flex-col items-end'>
          <p className='text-xs xs:text-xs sm:text-sm md:text-md  text-right'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" className='w-20 md:w-24 bg-blue-600 p-1 mt-6  ' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;