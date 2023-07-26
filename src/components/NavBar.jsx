import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import {MdOutlineDarkMode} from "react-icons/md";
import {BsSun} from "react-icons/bs";
function NavBar(props){
    function themeHandler(){
        props.modeHandler();
    }
    return(
        <div className={`navBar_bg${props.isDark} sticky top-0 z-[120]`}>
        <div className={` z-[100] w-[90%] sticky top-0 p-3 mx-auto flex flex-col lg:flex-row flex-wrap justify-center items-center md:justify-between text-white text-lg lg:space-y-0 space-y-3`}>
            <NavLink to='/'>
            <div className="font-bold logo">
                VANI  GUPTA
                <div className="w-18 h-1 bg-gradient-to-r from-purple to-pink"></div>    
            </div>
            </NavLink>
            <div>
                <Typewriter
                    options={{
                        strings: ['Coder', 'Front-end Web Developer','Back-end Web Developer','Full-stack Web Developer'],
                        autoStart: true,
                        loop: true,
                      }}
                />
            </div>
            <div>
                <ul className=" flex flex-col xs:flex-row sm:items-center space-y-3 xs:space-y-0 xs:space-x-4 sm:space-x-8">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                      {
                        props.isDark == 'dark' ? <BsSun size={28} className="cursor-pointer" onClick={themeHandler}/> : <MdOutlineDarkMode size={28} className="cursor-pointer" onClick={themeHandler}/>
                      }
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default NavBar;


// flex flex-col flex-wrap sm:flex-row items-center space-x-0 space-y-3 sm:space-y-0 space-x-4 sm:space-x-8
                //  onInit={(typewriter) => {
                //     typewriter
                //         .typeString("coder") 
                //         .pauseFor(1000)
                //         .deleteAll()
                //         .typeString("front-end")
                //         .pauseFor(1000)
                //         .deleteAll()
                //         .typeString("back-end")
                //         .pauseFor(1000)
                //         .deleteAll()
                //         .typeString("full-stack web developer")
                //         .pauseFor(2000)
                //         .start()
                        
                //  }}