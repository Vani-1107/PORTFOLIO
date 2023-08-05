import React from 'react'
import {ImCross} from 'react-icons/im';
function Card(props) {
    function viewDetails()
    {
        document.getElementById('details').classList.add('details_project');
        // document.getElementById('image').style.filter='blur(20px)';
        document.getElementById('image').classList.add('xyz1');
        props.addOverlay();
    }
    function closeDetails(){
        document.getElementById('details').classList.remove('details_project');
        document.getElementById('image').classList.remove('xyz1');
        props.removeOverlay();
        document.getElementById('image').style.filter='none';
    }
    // document.getElementById('image').addEventListener("click",viewDetails);
  return (
        <div className='relative' id='eachProject'>
            <div className={`relative cursor-pointer mx-auto project_card${props.data1.id} group`} onClick={viewDetails} id='projectImage'>
                <img src={props.data1.image}  className='h-[400px] rounded-lg' id='image'></img>
                <div className='absolute left-8 bottom-5 text-[#ffffff] text-3xl font-bold opacity-0 group-hover:opacity-100 z-[100]'>{props.data1.title}</div>
            </div>
            <div className={`absolute top-[21%] left-[32%] hidden z-[100] w-[35%] rounded-xl p-3 border border-[#ffffff]`} id='details'>
                    <div className='flex w-full justify-between items-center'>
                    <div className='text-2xl '>{props.data1.title}</div>
                    <div className='text-xl pr-2 cursor-pointer' onClick={closeDetails}><ImCross/></div>
                    </div>
                    <div className='w-full h-1 bg-[#ffffff] my-2'></div>
                    <div className='italic'>{props.data1.text}</div>
                    <div className='italic'>{props.data1.skills}</div>
                    <a href='${props.data1.link}'><div className='border border-[#ffffff] px-3 py-1 rounded-lg my-2 w-fit project-button'>Check it out</div></a>
                </div>
            {/* <div className='w-[100vw] h-[100vh] absolute top-0 left-0 right-0 bottom-0 opacity-0 z-[100]' id='details'> */}
            {/* </div> */}
            {/* </div> */}
        </div>
  )
}

export default Card;