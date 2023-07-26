import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import BgImg from "../hero-devices.svg";
function Home({isDark})
{
    return(
        <div id="home">
        <div  className={`footer_bg${isDark} relative flex flex-col justify-center  mx-6 mt-6 xs:mx-20 xs:mt-24 lg:mx-36 lg:mt-28 py-10`}>
            <div>
                <h1 className='text-5xl md:text-7xl lg:text-6xl font-extrabold mb-9 font-Poppinsb'>Hi,I'm <span className="gradient-text"> VANI </span></h1>
            </div>
            <div className="text-lg flex flex-col space-y-2 mb-9  md:ml-1 lg:ml-1 font-Poppins pl-24">
                <div className="text-sm md:text-lg opacity-75">-- A Web Developer who writes clean , clear and efficient code</div>
                <div className="text-sm md:text-lg opacity-75">-- Turning ideas to real-life products is my calling!</div>
                <div className="text-sm md:text-lg opacity-75">-- Seemlessly syncing creativity and code!</div>
            </div>
            <div className="flex flex-col space-y-1 opacity-90 font-Poppins">
                <div className="text-sm md:text-lg">Looking for a developer to craft your dreams to reality?</div>
                <div className="text-sm md:text-lg">Let's bring your searching to an end!</div>
                <a href="#about">
                    <button className="mt-2 flex space-x-2 justify-center items-center p-3 px-5 font-Poppins rounded-full text-black red-btn">
                        <div className="text-lg">Resume</div>
                        <AiOutlineArrowRight className="text-lg animate-pulse font-bold"/>
                    </button>
                </a>
            </div>
            {/* <img src={BgImg} className="w-[60%] bottom-0  xl:w-[70%] absolute -right-28 xl:-bottom-28 hidden lg:block"></img> */}
        </div>
        </div>
    )
}
export default Home;