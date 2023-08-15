import data from '../assets/data';
import Card from './Card';
import { useEffect, useState } from 'react';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

function Projects({isDark}){
    const [shift,setShift] = useState(0);

    function leftShiftHandler(){
        if(shift == 0){
            setShift(data.length - 1);
        }
        else{
            setShift(shift-1);
        }
        document.getElementById('eachProject').classList.add('fade');
    }
    function rightShiftHandler(){
        if(shift == data.length-1){
            setShift(0);
        }
        else{
            setShift(shift+1);
        }
        document.getElementById('eachProject').classList.add('fade');
    }
    function dotHandler1(){
        setShift(0);
    }
    function dotHandler2(){
        setShift(1);
    }
    function dotHandler3(){
        setShift(2);
    }
    useEffect(()=>{
        if(shift == 0)
        {
            document.getElementById('dot0').classList.add("currentdot");
            document.getElementById('dot1').classList.remove("currentdot");
            document.getElementById('dot2').classList.remove("currentdot");
            document.getElementById('eachProject').classList.add('fade');
        }
        else if(shift == 1)
        {
            document.getElementById('dot1').classList.add("currentdot");
            document.getElementById('dot2').classList.remove("currentdot");
            document.getElementById('dot0').classList.remove("currentdot");
            document.getElementById('eachProject').classList.add('fade');
        }
        else{
            document.getElementById('dot2').classList.add("currentdot");
            document.getElementById('dot1').classList.remove("currentdot");
            document.getElementById('dot0').classList.remove("currentdot");
            document.getElementById('eachProject').classList.add('fade');
        }
    },[shift]);
    return(
        <div id="projects" className={`footer_bg${isDark} w-full relative mt-14 pb-20 font-Poppins xyz`}>
            {/* <div className={`contact_text${isDark} w-4/12 mx-auto h-[0.1rem] opacity-50 bg-[#ffffff] mb-32 mt-10`}></div> */}
            <div className={`contact_text${isDark} w-4/12 mx-auto h-[0.1rem] opacity-50 bg-[#ffffff] mb-32 mt-10 absolute -top-16 left-[33%] text-center`}></div>
            <div className='w-full pt-16 mx-auto flex flex-col items-center mb-20 '>
                <div className=' text-5xl font-extralight pb-2'>Projects</div>
                <div className='opacity-75'>Designs that tranforms, responsive that performs...</div>
            </div>
            <div className='mx-auto'>
                <Card data1={data[shift]} rightShiftHandler={rightShiftHandler}></Card>
            </div>
            <div className='absolute left-10 sm:left-[4.5rem] md:left-28 lg:left-48 top-[55%]'>
                {/* <div className='w-12 h-12 rounded-full flex items-center justify-center border border-2 opacity-50'> */}
                    <button className='cursor-pointer hover:scale-110 text-4xl font-extrabold' onClick={leftShiftHandler}><FiChevronLeft></FiChevronLeft></button>
                {/* </div> */}
            </div>
            <div className='absolute right-10 sm:right-[4.5rem] md:right-28 lg:right-48 top-[55%]'>
                <button className='cursor-pointer hover:scale-110 text-4xl' onClick={rightShiftHandler}><FiChevronRight/></button>
            </div>
            {/* dots */}
            <div className='flex space-x-3 justify-center mt-6'>
                <div id='dot0'><div className='w-3 h-3 rounded-full bg-[#ffffff] opacity-50 cursor-pointer' onClick={dotHandler1}></div></div>
                <div id='dot1'><div className='w-3 h-3 rounded-full bg-[#ffffff] opacity-50 cursor-pointer' onClick={dotHandler2}></div></div>
                <div id='dot2'><div className='w-3 h-3 rounded-full bg-[#ffffff] opacity-50 cursor-pointer' onClick={dotHandler3}></div></div>
            </div>
        </div>
    )
}
export default Projects;