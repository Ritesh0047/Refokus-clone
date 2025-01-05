import React from 'react';
import Button from './Button';
const Product = ({ val,mover,index }) => {
  return (
    <div className='w-full     xl:h-[21rem]    text-white'>
      <div onMouseEnter={()=>{mover(index)}} className='max-w-screen-xl flex items-center justify-between px-2 xs:px-4 md:px-10'>   <h1 className='text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-5xl capitalize font-medium '>{val.title}</h1>
        <div className='w-1/2 sm:w-1/3 xl:w-1/3'>
          <p className='mb-5 xs:mb-7 md:mb-8 xl:mb-10 mt-5 xs:mt-7 md:mt-10 xl:mt-16 text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg'> {val.description}</p>
          <div className="flex items-center gap-1 sm:gap-3 xl:gap-6">{val.live && <Button />}
            {val.case && <Button title="Case Study" />}</div>
        </div>
      </div>
    </div>
  )
}

export default Product