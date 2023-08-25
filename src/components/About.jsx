import image1 from './image.jpeg';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import {useInView} from 'react-intersection-observer';
function About(){
    const[ref]=useInView({
        threshold:0.5,
      });
    return(
        <div className='relative pt-20 pb-32' id='about' ref={ref}>
            <motion.div className="w-[70%] flex flex-col items-center justify-center lg:flex-row gap-y-10 lg:gap-x-40 mx-auto mt-16"
                variants={fadeIn()}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}
            >
                <div className='flex flex-col w-full lg:max-w-[45%]'>
                    {/* heading */}
                    <div>
                        <h1 className="text-7xl font-Poppinsb font-extrabold">About</h1>
                        <div className="text-lg gradient-text">A full-stack software developer</div>
                    </div>
                    
                    {/* text para */}
                    <div className="mt-14">
                        <div className="text-lg mb-3">Hey there,</div>
                        <div>
                            <p>I'm a Software Developer who is passionate about creating exceptional digital experience for end user.</p>
                            <p>With every line of code I write , I strive to make web a beautiful place. My journey so far has included working with both front-end and back-end development , where I've gained knowledge about different technologies, databases and frameworks. I'm looking forward to making a real difference in people's lives and world at large through my work. </p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 relative'>
                {/* image */}
                    <img src={image1} alt='image' className='h-[400px] p-[2rem] image -mt-4'></img>
                    {/* <img src={design} className='absolute top-0 z-10'></img> */}
                </div>
            </motion.div>
        </div>
    )
}
export default About;