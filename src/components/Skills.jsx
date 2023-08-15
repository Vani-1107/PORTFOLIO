import {react, useEffect} from 'react';
import css from '../assets/CSS.png';
import express from '../assets/Express.png';
import html from '../assets/HTML.png';
import tw from '../assets/Tailwind.png';
import js from '../assets/Javascript.svg';
import mdb from '../assets/MongoDB.svg';
import nodejs from '../assets/NodeJs.svg';
import reactlogo from '../assets/React.png';
import redux from '../assets/Redux.svg';
import {BiCode,BiLogoCPlusPlus,BiLogoHtml5,BiLogoCss3,BiLogoJavascript,BiCodeCurly,BiLogoReact,BiLogoMongodb,BiLogoNodejs,BiLogoTailwindCss} from 'react-icons/bi';
import {BsChevronDown,BsChevronUp} from 'react-icons/bs';
import {FaCopyright} from 'react-icons/fa';
import { useState } from 'react';

function Skills({isDark}){
    const [langChevron,setLangChevron] = useState("down");
    const [libChevron,setLibChevron] = useState("down");
    function langHandler()
    {
        const lang = document.body.querySelector(".language1");
        console.log(lang);
        if(langChevron === "down")
        {
            setLangChevron("up");
            lang.classList.remove('language');
            lang.classList.add('languageDisplay');
        }
        else
        {
            setLangChevron("down");
            lang.classList.remove('languageDisplay');
            lang.classList.add('language');
        }
    }
    function libHandler()
    {
        const lib = document.body.querySelector(".library1");
        console.log(lib);
        if(libChevron === "down")
        {
            setLibChevron("up");
            lib.classList.remove('language');
            lib.classList.add('languageDisplay');
        }
        else{
            setLibChevron("down");
            lib.classList.remove('languageDisplay');
            lib.classList.add('language');
        }
    }
    useEffect(()=>{
        langHandler();
        libHandler();
    },[]);
    return(
        <div className={`footer_bg${isDark} w-full relative pt-14 pb-20 font-Poppins`} id='skills'>
                <div className='w-full mt-7 mx-auto flex flex-col items-center'>
                    <p className=' text-5xl font-extralight'>Skills</p>
                    <div className='opacity-75'>Skills and competences...</div>
                </div>
                <div className='flex flex-col-reverse items-center lg:flex-row w-full lg:w-10/12 space-y-10 lg:space-x-28 mt-20 mx-auto'>
                    <div className='flex flex-col md:flex-row w-10/12 justify-between'>
                        {/* languages */}
                        <div className='flex flex-col w-[60%] pb-20 md:pb-0 md:w-[40%] relative mx-auto'>
                            <div className='flex items-center justify-between' onClick={langHandler}>
                                <div className='flex space-x-5 items-center'>  
                                    <BiCode size={35} className='text-purple'></BiCode>
                                    <div className='flex flex-col'>
                                        <p className='text-xl'>Languages</p>
                                        <p className='text-sm opacity-75'>languages that I speak</p>
                                    </div>
                                </div>
                                {
                                langChevron === "down" ? (<BsChevronDown size={20}></BsChevronDown>) : (<BsChevronUp size={20}></BsChevronUp>)
                                }
                            </div>
                            <div className='mt-12 pl-6 flex flex-col space-y-6 w-full language language1'> 
                                <div>
                                    <div className='text-lg'> C</div>
                                    <div className='relative w-full'>
                                        <div className='w-[70%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-6 -top-3'><FaCopyright size={30} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-lg'> C++</div>
                                    <div className=''>
                                        <div className='w-[75%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-7 -top-3'><BiLogoCPlusPlus size={35} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-lg'>HTML</div>
                                    <div className=''>
                                        <div className='w-[100%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-6 -top-3'><BiLogoHtml5 size={35} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-lg'> CSS</div>
                                    <div className=''>
                                        <div className='w-[100%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-6 -top-3'><BiLogoCss3 size={35} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-lg'> Javascript</div>
                                    <div className=''>
                                        <div className='w-[90%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-6 -top-3'><BiLogoJavascript size={35} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* libraries */}
                        <div className='flex flex-col w-[60%] pb-7 md:pb-0 md:w-[45%] relative mx-auto'>
                            <div className='flex items-center justify-between' onClick={libHandler}>
                                <div className='flex space-x-5 items-center max-w-[80%]'>  
                                    <BiCodeCurly size={35} className='text-purple'></BiCodeCurly>
                                    <div className='flex flex-col'>
                                        <p className='text-xl'>Libraries & Frameworks</p>
                                        <p className='text-sm opacity-75'>libraries and framework that I prefer working with</p>
                                    </div>
                                </div>
                                {
                                libChevron === "down" ? (<BsChevronDown size={20}></BsChevronDown>) : (<BsChevronUp size={20}></BsChevronUp>)
                                }
                            </div>
                            <div className='mt-12 pl-6 flex flex-col space-y-6 w-full language library1'> 
                                <div>
                                    <div className='text-lg'> React</div>
                                    <div className='relative w-full'>
                                        <div className='w-[95%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-6 -top-3'><BiLogoReact size={30} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-lg'>MongoDB</div>
                                    <div className=''>
                                        <div className='w-[90%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-5 -top-3'><BiLogoMongodb size={35} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-lg'>Node.js</div>
                                    <div className=''>
                                        <div className='w-[90%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-7 -top-3'><BiLogoNodejs size={35} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-lg'> TailwindCSS</div>
                                    <div className=''>
                                        <div className='w-[100%] h-2 bg-gradient-to-r rounded-lg from-purple to-pink relative'>
                                            <div className='absolute -right-5 -top-3'><BiLogoTailwindCss size={35} className='text-purple'/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* animation */}
                        <div className='pb-20 lg:pb-0 mt-0 lg:-mt-8'>
                            <div className="circle-animation1 relative w-96 h-96 rounded-full border border-purple grid place-content-center">
                                <div className="icon-rotate absolute w-14 h-14 top-14 right-1">
                                    <span className='icon-decor'><img src={reactlogo}></img></span>
                                </div>
                                <div className="icon-rotate absolute w-14 h-14 bottom-12 right-2 ">
                                    <span className='icon-decor'><img src={redux}></img></span>
                                </div>
                                <div className="icon-rotate absolute w-14 h-14 bottom-1 left-14 bg-none">
                                    <span className='icon-decor'><img src={express}></img></span>
                                </div>
                                <div className="icon-rotate absolute w-14 h-14 -top-2 left-24">
                                    <span className='icon-decor'><img src={nodejs}></img></span>
                                </div>
                                <div className="icon-rotate absolute w-8 h-8 top-32 -left-2">
                                    <span className='icon-decor '><img src={mdb}></img></span>
                                </div>
                                {/* <div className="absolute w-14 h-14">
                                    <span className='icon-decor'><img src={next}></img></span>
                                </div> */}
                                <div className='circle-animation grid place-content-center w-72 h-72 border-[4rem] border-purple rounded-full'>
                                    <div className='relative rounded-full  w-40 h-40 grid place-content-center'>
                                        <div className="icon-rotate absolute w-10 h-10 right-14 -bottom-5">
                                            <span className='icon-decor'><img src={html}></img></span>
                                        </div>
                                        <div className="icon-rotate absolute w-10 h-10 top-14 -left-6">
                                            <span className='icon-decor'><img src={css}></img></span>
                                        </div>
                                        <div className="icon-rotate absolute w-8 h-8 top-14 -right-3">
                                            <span className='icon-decor'><img src={js}></img></span>
                                        </div>
                                        <div className="icon-rotate absolute w-14 h-14 -top-6 right-14">
                                            <span className='icon-decor'><img src={tw}></img></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Skills;