import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from "framer-motion"
import BgImg from "../assets/frontpage.png";
import Resume from '../assets/Resume.pdf';
import { fadeIn } from './variants';
import {useInView} from 'react-intersection-observer';
function Home({isDark})
{
    const[ref]=useInView({
        threshold:0.5,
    });
    return(
        <div id="home" ref={ref}>
            <motion.div className={`footer_bg${isDark} relative flex flex-col space-y-10 lg:space-y-0 items-center lg:justify-between lg:flex-row mx-0 lg:mx-0 lg:mt-0 py-24 px-8 md:px-28 lg:px-44`}>
                <motion.div className="flex flex-col"
                    variants={fadeIn()}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.3}}              
                >
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-9 font-Poppinsb'>Hi,I'm <span className="gradient-text"> VANI </span></h1>
                    </div>
                    <div className="text-lg flex flex-col space-y-2 mb-9  md:ml-1 font-Poppins pl-10 lg:pl-24">
                        <div className="text-sm md:text-lg opacity-75">-- A Web Developer who writes clean , clear and efficient code</div>
                        <div className="text-sm md:text-lg opacity-75">-- Turning ideas to real-life products is my calling!</div>
                        <div className="text-sm md:text-lg opacity-75">-- Seemlessly syncing creativity and code!</div>
                    </div>
                    <div className="flex flex-col space-y-1 opacity-90 font-Poppins">
                        <div className="text-sm md:text-lg">Looking for a developer to craft your dreams to reality?</div>
                        <div className="text-sm md:text-lg">Let's bring your searching to an end!</div>
                        <a href={Resume} target="_blank">
                            <button className="mt-4 flex space-x-2 justify-center items-center p-3 px-5 font-Poppins rounded-full text-black red-btn">
                                <div className="text-lg">Resume</div>
                                <AiOutlineArrowRight className="text-lg animate-pulse font-bold"/>
                            </button>
                        </a>
                    </div>
                </motion.div>
                <motion.img src={BgImg} className="w-[20rem] md:w-[30rem]" 
                variants={fadeIn()}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}></motion.img>
            </motion.div>
        </div>
    )
}
export default Home;