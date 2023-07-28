import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillGithub,AiOutlineCopyright} from 'react-icons/ai';
import {BsInstagram,BsTwitter} from 'react-icons/bs';


function Footer({isDark}){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d= new Date();
    let day = days[d.getDay()];
    return(
        <div className={`footer_bg${isDark} w-full mx-auto py-12 text-center flex flex-col justify-center space-y-1`}>
            <div className='uppercase text-xl font-bold'>Vani Gupta</div>
            <div>A full stack web developer</div>
            <div>Designing for the future, one website at a time</div>
            <div className='mx-auto flex flex-row space-x-2 py-2'>
                <a href='https://www.linkedin.com/in/vani03/'>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border${isDark} footerHover`}>
                        <FaLinkedinIn />
                    </div>
                </a>
                <a href='https://github.com/Vani-1107' >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border${isDark} footerHover`}>
                        <AiFillGithub/>
                    </div>
                </a>
                <a href='https://www.instagram.com/__vanigupta__/'>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border${isDark} footerHover`}>
                        <BsInstagram/>
                    </div>
                </a>
                <a href='https://twitter.com/Vani20262421301'>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border${isDark} footerHover`}>
                        <BsTwitter/>
                    </div>
                </a>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <span>Handcrafted by me  </span>
                <span><AiOutlineCopyright/></span>
                <span>  2023</span>
            </div>
            <div>Hope you have a great<span className='uppercase'> {day} !!!</span></div>
        </div>
    )
}
export default Footer;