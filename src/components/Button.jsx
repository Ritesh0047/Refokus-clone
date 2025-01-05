import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title="Get Started"}) => {
  return (
    <div className='px-1 py-1 lg:px-2 lg:py-2 xl:w-32   xl:px-2 xl:py-2 bg-zinc-100 rounded-full text-black flex items-center justify-center '><span className='text-xs md:text-md  xl:text-md leading-none  xl:font-medium'>{title} </span>
    <IoIosReturnRight /></div>
  )
}

export default Button