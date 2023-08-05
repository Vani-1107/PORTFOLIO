// import HomeP1 from '../assets/project1/home.png';
// import AboutP1 from '../assets/project1/about.png';
// import SkillsP1 from '../assets/project1/skills.png';
// import ContactP1 from '../assets/project1/contact.png';
// import HomeP2 from '../assets/project2/mainImg.png';
// import HomeP3 from '../assets/project3/home.png';
import data from '../assets/data';
import Card from './Card';
import { useEffect, useState } from 'react';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

function Projects({isDark}){
    const [shift,setShift] = useState(0);
    // function removeOverlay(){
    //     closePopUp();
    // }
    // function addOverlay1(){
    //     addOverlay();
    // }
    function removeOverlay()
  {
      document.getElementsById('overlay').classList.remove('overlayactive');
  }
  function addOverlay()
  {
    // document.getElementById('projects').style.backgroundColor = ;
    document.getElementsById('overlay').classList.add('overlayactive');
  }

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
            <div id='overlay' className='overlay' onclick={removeOverlay}></div>
            {/* <div className={`contact_text${isDark} w-4/12 mx-auto h-[0.1rem] opacity-50 bg-[#ffffff] mb-32 mt-10`}></div> */}
            <div className={`contact_text${isDark} w-4/12 mx-auto h-[0.1rem] opacity-50 bg-[#ffffff] mb-32 mt-10 absolute -top-16 left-[33%] text-center`}></div>
            <div className='w-full pt-16 mx-auto flex flex-col items-center mb-20 '>
                <div className=' text-5xl font-extralight pb-2'>Projects</div>
                <div className='opacity-75'>Designs that tranforms, responsive that performs...</div>
            </div>
            {/* <div className='flex flex-col space-y-20 relative'>
                project 1
                <div className='relative ' >
                    <div className='relative left-36 project_card1 group' onClick={project1}>
                        <img src={HomeP1} className=' h-[400px] rounded-lg '></img>
                        <div className='absolute left-8 bottom-5 text-[#ffffff] text-3xl font-bold opacity-0 group-hover:opacity-100 z-[100]'>My Portfolio</div>
                    </div>
                </div>
                project2
                <div className='relative '>
                    <div className='relative left-[30rem] project_card2 group'>
                        <img src={HomeP2} className=' h-[400px] rounded-lg '></img>
                        <div className='absolute left-8 bottom-5 text-3xl text-[#ffffff] font-bold opacity-0 group-hover:opacity-100 z-[100]'>WeatherSphere</div>
                    </div>
                </div>
                project 3
                <div className='relative '>
                    <div className='relative left-36 project_card3 group'>
                        <img src={HomeP3} className=' h-[400px] rounded-lg'></img>
                        <div className='absolute left-8 bottom-5 text-3xl font-bold text-[#ffffff] opacity-0 group-hover:opacity-100 z-[100]'>RazorPay Clone</div>
                    </div>
                </div>
            </div>  bg-[#cacaca] */}
            <div className='mx-auto'>
                <Card data1={data[shift]} rightShiftHandler={rightShiftHandler} removeOverlay={removeOverlay} addOverlay={addOverlay}></Card>
            </div>
            <div className='absolute left-48 top-[55%]'>
                {/* <div className='w-12 h-12 rounded-full flex items-center justify-center border border-2 opacity-50'> */}
                    <button className='cursor-pointer hover:scale-110 text-4xl font-extrabold' onClick={leftShiftHandler}><FiChevronLeft></FiChevronLeft></button>
                {/* </div> */}
            </div>
            <div className='absolute right-48 top-[55%]'>
                <button className='cursor-pointer hover:scale-110 text-4xl' onClick={rightShiftHandler}><FiChevronRight/></button>
            </div>
            {/* dots */}
            <div className='flex space-x-3 justify-center mt-6'>
                <div id='dot0'><div className='w-3 h-3 rounded-full bg-[#ffffff] opacity-50 cursor-pointer' onClick={dotHandler1}></div></div>
                <div id='dot1'><div className='w-3 h-3 rounded-full bg-[#ffffff] opacity-50 cursor-pointer' onClick={dotHandler2}></div></div>
                <div id='dot2'><div className='w-3 h-3 rounded-full bg-[#ffffff] opacity-50 cursor-pointer' onClick={dotHandler3}></div></div>
            </div>
            {/* <div className='overlay' onclick={closePopUp}></div> */}
            <div id='overlay' className='overlay' onclick={removeOverlay}></div>
        </div>
    )
}
export default Projects;