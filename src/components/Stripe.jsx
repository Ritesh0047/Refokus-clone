import React from 'react'

const Stripe = ({val}) => {

  return (
    <div className='w-[16.66%] py-1 xs:py-2    xl:py-4 px-[2px] xs:px-2 sm:px-3 md:px-4  xl:px-5 border-t-[1.4px] border-b-[1.4px] border-zinc-600 border-r-[1.4px] flex itmes-center justify-between '>
      <img className='h-[5px] xs:h-[7px] sm:h-2 md:h-3  xl:h-7' src={val.url} alt="" />
      <span className='text-[6px] xs:text[7px] sm:text-[8px] md:text-sm font-semibold'>{val.number}</span>
    </div>
  )
}
 
export default Stripe