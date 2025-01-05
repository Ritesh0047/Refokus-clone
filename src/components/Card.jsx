import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'motion/react';

const Card = ({ width, para, start,hover="false" ,title,header }) => {
  return (
    <motion.div whileHover={{backgroundColor:  hover === "true" ? "#7443ff" : undefined, padding: "25px"}} className={`${width} bg-zinc-800 h-60  sm:h-72 md:h-80 lg:h-96 xl:min-h-[30rem] p-5 rounded-xl flex flex-col justify-between hover:${hover}`}>
      <div><div className="w-full flex justify-between items-center">
        <h3 className='leading-none text-sm lg:text-md'>{header}</h3>
        <IoIosArrowRoundForward />
      </div>
        <div><h1 className='tracking-tighter leading-none xs:leading-normal text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mt-2 lg:mt-4 xl:mt-5'>
         {title}</h1></div></div>
      <div className="down  w-full">
        {start && (<><h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold  leading-none '>Start a Project</h1>
          <button className="rounded-full py-1 px-2 sm:py-2 sm:px-5 border-[1px] border-zinc-500 mt-5 text-xs xs:text-sm  sm:text-lg">Contact Us</button></>)}
        {para && <p className='tracking-tighter leading-none xs:leading-normal text-sm xs:text-md sm:text-lg xl:text-lg text-zinc-500 font-medium'>Explore what drives our team.</p>}
      </div>
    </motion.div>
  )
}

export default Card