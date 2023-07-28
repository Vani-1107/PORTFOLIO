import HomeP1 from '../assets/project1/home.png';
import AboutP1 from '../assets/project1/about.png';
import SkillsP1 from '../assets/project1/skills.png';
import ContactP1 from '../assets/project1/contact.png';
import HomeP2 from '../assets/project2/mainImg.png';
import HomeP3 from '../assets/project3/home.png';
// import Project1 from './projects/Project1';
function Projects({isDark}){
    function project1(){

    }
    // let slideIndex = 0;
    // let timeoutId = null;
    // const slides = document.getElementsByClassName("mySlides");
    // const dots = document.getElementsByClassName("dot");
    // function currentSlide(index) {
    //     slideIndex = index;
    //     showSlides();
    // }
    // function showSlides() {
    //     for(let i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";
    //       dots[i].classList.remove('active');
    //     }
    //     slideIndex++;
    //     if(slideIndex > slides.length) {
    //       slideIndex = 1
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].classList.add('active');
    //      if(timeoutId) {
    //         clearTimeout(timeoutId);
    //      }
    //     timeoutId = setTimeout(showSlides, 3000); // Change image every 5 seconds
    //   }
    return(
        <div id="project" className={`footer_bg${isDark} w-full relative pt-14 pb-20 font-Poppins`}>
            <div className={`contact_text${isDark} w-4/12 mx-auto h-[0.1rem] opacity-50 bg-[#ffffff] mb-32 mt-10`}></div>
            <div className='w-full mt-7 mx-auto flex flex-col items-center mb-20 '>
                <div className=' text-5xl font-extralight pb-2'>Projects</div>
                <div className='opacity-75'>Designs that tranforms, responsive that performs...</div>
            </div>
            <div className='flex flex-col space-y-20 relative'>
                {/* project 1 */}
                <div className='relative ' >
                    <div className='relative left-36 project_card1 group' onClick={project1}>
                        <img src={HomeP1} className=' h-[400px] rounded-lg '></img>
                        <div className='absolute left-8 bottom-5 text-[#ffffff] text-3xl font-bold opacity-0 group-hover:opacity-100 z-[100]'>My Portfolio</div>
                    </div>
                    <div className=''>
                        {/* <Project1/> */}
                        {/* <div className='slideshow-container'>
                            <div className='mySlides fade'>
                                <img src={HomeP1} className='w-5/12 mx-auto'></img>
                            </div>
                            <div className='mySlides fade'>
                                <img src={AboutP1}></img>
                            </div>
                            <div className='mySlides fade'>
                                <img src={SkillsP1}></img>
                            </div>
                            <div className='mySlides fade'>
                                <img src={ContactP1}></img>
                            </div>
                        </div>
                        <div style="text-align:center">
                            <span class="dot" onclick="currentSlide(0)"></span>
                            <span class="dot" onclick="currentSlide(1)"></span>
                            <span class="dot" onclick="currentSlide(2)"></span>
                        </div> */}

                    </div>
                    
                </div>
                {/* project2 */}
                <div className='relative '>
                    <div className='relative left-[30rem] project_card2 group'>
                        <img src={HomeP2} className=' h-[400px] rounded-lg '></img>
                        <div className='absolute left-8 bottom-5 text-3xl text-[#ffffff] font-bold opacity-0 group-hover:opacity-100 z-[100]'>WeatherSphere</div>
                    </div>
                    {/* <div className='absolute left-96 bottom-5 text-2xl font-bold opacity-0 group-hover:opacity-100 z-[100]'>WeatherSphere</div> */}
                </div>
                {/* project 3 */}
                <div className='relative '>
                    <div className='relative left-36 project_card3 group'>
                        <img src={HomeP3} className=' h-[400px] rounded-lg'></img>
                        <div className='absolute left-8 bottom-5 text-3xl font-bold text-[#ffffff] opacity-0 group-hover:opacity-100 z-[100]'>RazorPay Clone</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;