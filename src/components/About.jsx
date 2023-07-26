import image1 from './image.jpeg';
import design from '../assets/feature-section1-dottedrows.png';
import { FaChevronRight } from 'react-icons/fa';
import {FaChevronLeft} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function About(){
    return(
        <div className='relative pt-20 pb-32' id='about'>
            <div className="w-[70%] flex flex-col items-center justify-center lg:flex-row gap-y-10 lg:gap-x-40 mx-auto mt-16 ">
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
            </div>
            {/* <NavLink to='/'>
            <div className='opacity-0 sm:opacity-100 absolute flex items-center justify-center top-[50%] left-10'>
                <div className='shift flex justify-center items-center'>
                    <FaChevronLeft className='text-[20px] text-white'/>
                </div>
            </div>
            </NavLink>
            <NavLink to='/skills'>
            <div className='opacity-0 sm:opacity-100 absolute flex items-center justify-center top-[50%] right-button'>
                <div className='shift flex justify-center items-center'>
                    <FaChevronRight className='text-[20px] text-white'/>
                </div>
            </div>
            </NavLink> */}
        </div>
    )
}
export default About;