import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'motion/react';import arqitel from "/videos/arqitel.webm"
import ttr from "/videos/ttr.webm"
import yir from "/videos/yir.webm"
import yahoo from "/videos/yahoo.webm"
const Products = () => {
    const products = [
        {
            title: "Arqitel",
            description:
                "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            description:
                "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            description:
                "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: true,
        },
        {
            title: "Yahoo!",
            description:
                "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
        },
    ]
    const [position, setPosition] = useState(0);
    const mover = (value) => {
        setPosition(value * 21)
    }
    return (
        <div className='mt-32 mb-32 max-w-screen-xl mx-auto relative'>
            {products.map((val, index) => (<Product mover={mover} key={index} index={index} val={val} />))}
            <div className="absolute w-full h-full top-0 pointer-events-none">
                <motion.div initial={{ y: position }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }}
                    animate={{ y: position + `rem` }}
                    className='hidden xl:block window absolute  w-[29rem] h-[21rem]  left-1/4 rounded overflow-hidden '>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -position + `rem` }} className="h-full w-full  ">
                    {position === 0 && (
                            <video autoPlay muted loop>
                                <source src={arqitel} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -position + `rem` }} className="h-full w-full  ">
                    <video autoPlay muted loop>
                            <source src={ttr} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -position + `rem` }} className="h-full w-full  ">
                    <video autoPlay muted loop>
                            <source src={yir} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} animate={{ y: -position + `rem` }} className="h-full w-full  ">
                    <video autoPlay muted loop>
                            <source src={yahoo} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

export default Products;

