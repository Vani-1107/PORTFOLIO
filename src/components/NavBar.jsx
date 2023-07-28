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
          window.addEventListener('scroll', function (e) {
            var nav = document.getElementById('nav');
            if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                    // if(props.isDark === 'dark'){
                    //     nav.classList.add("navBarScrolldark");
                    //     nav.classList.remove("navBar_bgdark");
                    // }
                    // else
                    // {
                    //     nav.classList.add("navBarScrolllight");
                    //     nav.classList.remove("navBar_bglight");
                    // }
                    nav.classList.add(`navBarScroll${props.isDark}`);
                    nav.classList.remove(`navBar_bg${props.isDark}`);
                } 
                else {
                    // if(props.isDark === 'dark'){
                    //     nav.classList.remove("navBarScrolldark");
                    //     nav.classList.add("navBar_bgdark");
                    // }
                    // else
                    // {
                    //     nav.classList.remove("navBarScrolllight");
                    //     nav.classList.add("navBar_bglight");
                    // }
                    nav.classList.add(`navBar_bg${props.isDark}`);
                    nav.classList.remove(`navBarScroll${props.isDark}`);
                }
        })
    };
    // const myNav = document.getElementById('nav');
    // console.log(myNav);
    // window.onscroll = function () { 
    //     if (document.body.scrollTop >= 200 ) {
    //         myNav.classList.add("nav-colored");
    //         myNav.classList.remove("nav-transparent");
    //     } 
    //     else {
    //         myNav.classList.add("nav-transparent");
    //         myNav.classList.remove("nav-colored");
    //     }
    // };
    window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('nav');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                nav.classList.add(`navBarScroll${props.isDark}`);
                nav.classList.remove(`navBar_bg${props.isDark}`);
            } else {
                nav.classList.add(`navBar_bg${props.isDark}`);
                nav.classList.remove(`navBarScroll${props.isDark}`);
            }
    })
    return(
        <div className={`navBar_bg${props.isDark} sticky top-0 z-[120]`} id="nav">
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
                        <a href="#" className="navElement">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="navElement">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="navElement">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="navElement">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="navElement">Contact</a>
                    </li>
                    <li>
                      {
                        props.isDark == 'dark' ? <BsSun size={28} className="cursor-pointer navElement" onClick={themeHandler} /> : <MdOutlineDarkMode size={28} className="cursor-pointer navElement" onClick={themeHandler}/>
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