import { useState } from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FiLinkedin,FiSend,FiGithub} from 'react-icons/fi';
import {GrInstagram} from 'react-icons/gr';
function Contact({isDark}){
    const [formData,setFormData] = useState({name:"",email:"",subject:"",message:""});
    function changeHandler(e){
        // console.log(e.target.value);
        setFormData((prevData)=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
        
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(formData);
        resetformData();
    }
    function resetformData(){
        setFormData({name:"",email:"",subject:"",message:""});
    }
    return(
        <div className='pt-24 pb-32' id='contact'>
            <div className=' w-full mx-auto text-center'>
                <div className='text-3xl font-bold font-Poppins'>Get In Touch</div>
                <div className={`contact_text${isDark} w-32 h-1 mx-auto mt-2`}></div>
                {/* <div className='opacity-75 pt-1'>Let's work together!</div> */}
            </div>
            <div className='w-10/12 mx-auto flex gap-x-20 pt-16 relative'>
                <div className='max-w-[40%] flex flex-col h-full my-auto justify-center relative top-[0px]'>
                    <div className='text-4xl font-bold'>Let's connect.</div>
                    <div>Let's create something beautiful together...</div>
                    <a href='mailto: vaniguptaa2003@gmail.com' target={"_blank"}>
                        <div className='shadow-purple shadow-md flex items-center space-x-2 p-4 mt-6 '>
                            <div className='flex justify-center items-center w-9 h-8 bg-[#6c6b6b32] rounded-md '>
                                <AiOutlineMail className='text-[30px]'/>
                            </div>
                            <div className='flex flex-col space-y-[-7px] gap-y-0'>
                                <div className='font-bold'>Mail me at</div>
                                <div className='text-purple font-bold'>vaniguptaa2003@gmail.com</div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* form */}
                <div className='shadow-sm shadow-purple p-7 rounded-lg flex flex-col w-[30vw]'>
                    <div className='text-xl pb-8 font-bold'>Send me a message</div>
                    <form className='flex flex-col space-y-5' onSubmit={submitHandler}>
                        <input type='text' required placeholder='Full Name' className='px-2 py-1 border border-purple rounded-lg bg-[#6c6b6b32]' name='name' onChange={changeHandler} value={formData.name}></input>
                        <input type='email' required placeholder='Email address' className='px-2 py-1 border border-purple rounded-lg bg-[#6c6b6b32]' name='email' onChange={changeHandler} value={formData.email}></input>
                        <input type='text' required placeholder='Subject' className='px-2 py-1 border border-purple rounded-lg bg-[#6c6b6b32]' name='subject' onChange={changeHandler} value={formData.subject}></input>
                        <input type='textbox' required className='px-2 py-1 border border-purple rounded-lg bg-[#6c6b6b32]' placeholder='Your Message' name='message' onChange={changeHandler} value={formData.message}></input>
                    </form>
                    <button onClick={submitHandler} className='flex space-x-2 items-center w-fit submitButton text-black mt-8'>
                        <div>Submit</div> 
                        <span><FiSend/></span>
                    </button>
                </div>
                {/* links */}
                <div className='flex flex-col space-y-6 relative top-10  font-Poppins'>
                    <div className='shadow-md shadow-purple p-4 w-72'>
                        <a href='https://www.linkedin.com/in/vani03/' target={"_blank"} className='flex flex-row items-center space-x-5 '>
                            <div><FiLinkedin className='text-[30px] text-purple contact_icons'/></div>
                            <div className='flex flex-col -space-y-1'>
                                <div className='text-lg'>LinkedIn</div>
                                <div className='text-sm opacity-50'>vani03</div>
                            </div>
                        </a>
                    </div>
                    <div className='shadow-md shadow-purple p-4'>
                        <a href='https://www.instagram.com/__vanigupta__/' target={"_blank"} className='flex flex-row items-center space-x-5 '>
                            <GrInstagram className='text-[30px] text-purple contact_icons'/>
                            <div className='flex flex-col -space-y-1'>
                                <div className='text-lg'>Instagram</div>
                                <div className='text-sm opacity-50'>__vanigupta__</div>   
                            </div>
                        </a>
                    </div>
                    <div className='shadow-md shadow-purple p-4'>
                        <a href='https://github.com/Vani-1107' target={"_blank"} className='flex flex-row items-center space-x-5 '>
                            <FiGithub className='text-[30px] text-purple contact_icons'/>
                            <div className='flex flex-col -space-y-1'>
                                <div className='text-lg'>GitHub</div>
                                <div className='text-sm opacity-50'>Vani-1107</div>
                            </div>
                        </a>
                    </div>
                    {/* <div>
                        <a href='https://www.linkedin.com/in/vani03/'><FiLinkedin className='text-[30px] text-purple contact_icons'/></a>
                    </div> */}
                </div>
            </div>
            <div>
                {/* <Footer/> */}
            </div>
        </div>
    )
}
export default Contact;

{/* <div>
                    <div>
                        <div><AiOutlineMail/></div>
                        <div>
                            <div>Email</div>
                            <div>vaniguptaa2003@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/vani03/'>
                            <div><FiLinkedin/></div>
                            <div>
                                <div>LinkedIn</div>
                                <div>vani03</div>
                            </div>
                        </a>
                    </div> 
                    <div>
                        <div><SlLocationPin/></div>
                        <div>
                            <div>Location</div>
                            <div>Kolkata,India</div>
                        </div>
                    </div>
                </div> */}