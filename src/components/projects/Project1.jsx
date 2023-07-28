import React from 'react'
// import homeImg from '.../assets/project1/home.png';
function Project1() {
  return (
    <div>
        <div className='slideshow-container'>
            <div className='mySlides fade'>
                <img src='.../assets/project1/home.png'></img>
            </div>
            <div className='mySlides fade'>
                <img src='.../assets/project1/about.png'></img>
            </div>
            <div className='mySlides fade'>
                <img src='.../assets/project1/skills.png'></img>
            </div>
            <div className='mySlides fade'>
                <img src='.../assets/project1/contact.png'></img>
            </div>
        </div>
    </div>
  )
}

export default Project1;