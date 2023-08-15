import Typewriter from "typewriter-effect";
import {MdOutlineDarkMode} from "react-icons/md";
import {BsSun} from "react-icons/bs";
function NavBar(props){
    function themeHandler(){
        // props.modeHandler();
        if(props.isDark == 'dark'){
            props.setIsDark('light');
          }
          else{
            props.setIsDark('dark');
          }
    };
    
    window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('nav');
        var nav1 = document.getElementById('nav1');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav1.classList.remove("displayNone");
            nav1.classList.add("displayBlock");
            nav.classList.remove("displayBlock");
            nav.classList.add("displayNone");
        } 
        else {
            nav.classList.remove("displayNone");
            nav.classList.add("displayBlock");
            nav1.classList.remove("displayBlock");
            nav1.classList.add("displayNone");
        }
    })
    return(
        <div className="sticky top-0  z-[120]">
            <div className={`navBar_bg${props.isDark} navbar`} id="nav">
            <div className={` z-[100] w-[90%] sticky top-0 p-3 mx-auto flex flex-col lg:flex-row flex-wrap justify-center items-center md:justify-between text-white text-lg lg:space-y-0 space-y-3`}>
                <a href='#' className="navElement">
                <div className="font-bold logo">
                    VANI  GUPTA
                    <div className="w-18 h-1 bg-gradient-to-r from-purple to-pink"></div>    
                </div>
                </a>
                <div className="font-Poppins"> 
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
                            <a href="#" className="navElement hidden xs:flex">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="navElement hidden xs:flex">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="navElement hidden xs:flex">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="navElement hidden xs:flex">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="navElement hidden xs:flex">Contact</a>
                        </li>
                        <li>
                        {
                            props.isDark == 'dark' ? <BsSun size={28} className="cursor-pointer navElement -mt-14 xs:mt-0 " onClick={themeHandler} /> : <MdOutlineDarkMode size={28} className="cursor-pointer navElement -mt-14 xs:mt-0 " onClick={themeHandler}/>
                        }
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className={`navBarScroll${props.isDark} displayNone sticky top-0 z-[120]`} id="nav1">
            <div className={` z-[100] w-[90%] sticky top-0 p-3 mx-auto flex flex-col lg:flex-row flex-wrap justify-center items-center md:justify-between text-white text-lg lg:space-y-0 space-y-3`}>
                <a href='#' className="navElement">
                <div className="font-bold logo">
                    VANI  GUPTA
                    <div className="w-18 h-1 bg-gradient-to-r from-purple to-pink"></div>    
                </div>
                </a>
                <div className="font-Poppins"> 
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
                            <a href="#" className="navElement hidden xs:flex">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="navElement hidden xs:flex">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="navElement hidden xs:flex">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="navElement hidden xs:flex">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="navElement hidden xs:flex">Contact</a>
                        </li>
                        <li className="-mt-24">
                        {
                            props.isDark == 'dark' ? <BsSun size={28} className="cursor-pointer navElement -mt-14 xs:mt-0 " onClick={themeHandler} /> : <MdOutlineDarkMode size={28} className="-mt-14 xs:mt-0 cursor-pointer navElement" onClick={themeHandler}/>
                        }
                        </li>
                    </ul>
                </div>
            </div>
            </div> 
        </div>
    )
}
export default NavBar;
