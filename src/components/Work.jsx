import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from "motion/react"
const Work = () => {
  const [images, setImages] = useState([{ url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', left: "50%", top: "50%", isActive: false }, { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', left: "44%", top: "54%", isActive: false }, { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', left: "56%", top: "59%", isActive: false }, { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', left: "48%", top: "58%", isActive: false }, { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', left: "45%", top: "44%", isActive: false }, { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', left: "53%", top: "62%", isActive: false }]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    // console.log(Math.floor(data*100));
    function imageShow(arr){
      setImages(prev=>prev.map((item,index)=> (arr.indexOf(index)=== -1 ? {...item,isActive: false} : {...item, isActive: true})))
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:  
        imageShow([0]);
        break;
      case 2:
        imageShow([0,1]);
        break;
       case 3:
        imageShow([0,1,2])
        break; 
      case 4:
        imageShow([0,1,2,3]);
        break;
        case 6:
        imageShow([0,1,2,3,4]);
        break;
        case 7:
        imageShow([0,1,2,3,4,5]);
        break;

    }
  })
  return (
    <div className='w-full'>
      <div className="relative max-w-screen-xl  mx-auto">
        <h1 className='text-[30vw] text-center leading-tight font-extrabold tracking-wider select-none'>work</h1>
        <div className='absolute w-full h-full  top-0'>
          {images.map((elem, index) =>
          (elem.isActive && <img key={index} className='absolute w-24 sm:36 md:44 xl:w-56 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{
            top: elem.top, left: elem.left
          }} src={elem.url} alt="" />)
          )}
        </div>
      </div>

    </div>
  )
}

export default Work;