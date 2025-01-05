// import React from 'react';
// import { motion } from 'motion/react';
// const Marquee = ({imageurls,direction}) => {
//   return (
//     <div className='flex w-full 
//     overflow-hidden '>
//     <motion.div initial={{x:direction === 'left'? "0": "-100%"}} animate={{x:direction === 'left'? "-100%": "0"}} transition={{ease: "linear",duration: 16,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-12 pr-40">
//     {imageurls.map((imageurl,index) => <img key={index} className='' src={imageurl}/>)}
//     </motion.div>
//     <motion.div initial={{x:direction === 'left'? "0": "-100%"}} animate={{x:direction === 'left'? "-100%": "0"}} transition={{ease: "linear",duration: 16,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-12  pr-40">
//     {imageurls.map((imageurl,index) => <img key={index} className='' src={imageurl}/>)}
//     </motion.div>
//     </div>
//   )
// }

// export default Marquee
import React from 'react';
import { motion } from 'motion/react';

const Marquee = ({ imageurls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{
          ease: 'linear',
          duration: 16, // Adjust for responsiveness if needed
          repeat: Infinity,
        }}
        className="flex flex-shrink-0 gap-8 sm:gap-12 md:gap-20 lg:gap-40 py-6 md:py-8 lg:py-12 pr-8 md:pr-20 lg:pr-40"
      >
        {imageurls.map((imageurl, index) => (
          <img
            key={index}
            className="w-24 sm:w-32 md:w-40 lg:w-56 object-contain"
            src={imageurl}
            alt={`Marquee Image ${index}`}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{
          ease: 'linear',
          duration: 16,
          repeat: Infinity,
        }}
        className="flex flex-shrink-0 gap-8 sm:gap-12 md:gap-20 lg:gap-40 py-6 md:py-8 lg:py-12 pr-8 md:pr-20 lg:pr-40"
      >
        {imageurls.map((imageurl, index) => (
          <img
            key={index}
            className="w-24 sm:w-32 md:w-40 lg:w-56 object-contain"
            src={imageurl}
            alt={`Marquee Image ${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
