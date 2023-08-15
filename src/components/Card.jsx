import React from 'react'
import {ImCross} from 'react-icons/im';
function Card(props) {
    function viewDetails()
    {
        document.getElementById('details').classList.add('details_project');
        document.getElementById('image').classList.add('xyz1');
        document.getElementById('text-title').classList.add('text-display');
    }
    function closeDetails(){
        document.getElementById('details').classList.remove('details_project');
        document.getElementById('image').classList.remove('xyz1');
        document.getElementById('text-title').classList.remove('text-display');
    } 
    // top-[0%]  md:top-[10%] lg:top-[20%]
  return (
        <div className='relative' id='eachProject'>
            <div className={`relative cursor-pointer mx-auto project_card${props.data1.id} group`}  id='projectImage'>
                <img src={props.data1.image} className='w-full rounded-lg' id='image'></img>
                <div id='text-title' onClick={viewDetails} className='absolute left-[3%] bottom-[4%] text-[#ffffff] text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold opacity-0 group-hover:opacity-100 z-[100]'>{props.data1.title}</div>
                <div className={`absolute left-0 top-0 md:left-[7%] lg:left-[15%] md:top-[7%] lg:top-[15%] hidden z-[100] h-[100%] w-[100%]  md:h-[86%] md:w-[86%] lg:h-[70%] lg:w-[70%] rounded-xl p-3 border border-[#ffffff]`} id='details'>
                    <div className='flex w-full justify-between items-center'>
                        <div className='text-xl md:text-2xl text-[#ffffff]'>{props.data1.title}</div>
                        <div className='text-lg md:text-xl pr-2 cursor-pointer text-[#ffffff]' onClick={closeDetails}><ImCross/></div>
                    </div>
                    <div className='w-full h-1 bg-[#ffffff] my-2'></div>
                    <div className='italic text-[#ffffff] text-sm md:text-lg'>{props.data1.text}</div>
                    <div className='italic text-[#ffffff] text-sm md:text-lg'>{props.data1.skills}</div>
                    <a href={props.data1.link} target='_blank'><div className='border border-[#ffffff] px-3 py-1 rounded-lg my-1 md:my-2 w-fit project-button text-sm md:text-lg text-[#ffffff]'>Check it out</div></a>
                </div>
            </div>
    </div>
  )}
export default Card;