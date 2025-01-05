import React from 'react'
import Button from './Button';
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='max-w-screen-xl xs:px-4 px-2 py-2 lg:py-5 lg:px-3 mx-auto  flex items-center justify-between border-b-[1px] border-zinc-500'>
      <div className=' flex items-center'>
        <img className='order-2 ml-10 xs:ml-0 xs:order-1 w-20 xs:w-20 md:w-24 mr-4 md:mr-8 xs:mr-8   ' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Refokus logo" />
      <span className='order-1 xs:hidden'><IoIosMenu size={27} /></span>  
        <div className='hidden xs:order-2 xs:flex  xl:ml-24 gap-1 xs:gap-3 sm:gap-8 md:gap-12 xl:gap-16'>
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            elem.length === 0 ? <span key={index} className='w-[1px] h-7 bg-zinc-300'></span> : (<a key={index} className=' xs:text-sm md:text-md xl:text-md flex gap-1 items-center ' href='#'>{index === 1 && (<span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-1 h-1  xl:w-2 xl:h-2 rounded-full bg-green-400 '></span>)}{elem}</a>)
          ))}
        </div>
      </div>
      <Button />
    </div>
  )
}

export default Navbar