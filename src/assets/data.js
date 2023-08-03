import Home1 from '../assets/project1/home.png';
import Home2 from '../assets/project2/mainImg.png';
import Home3 from '../assets/project3/home.png';

const data = [
    {
        id:1,
        image: `${Home1}`,
        title:"My Portfolio",
        text: "A meticulously designed and curated showcase of my work, skills, and personality!",
        skills:`The frontend is built using React.
        A contact facility is provided using Express.js and MongoDB.\n(MERN stack)`,
        link: "#",
        // border: 
    },
    {
        id:2,
        image: `${Home2}`,
        title:"weatherSphere",
        text: "A weather application that provides users with real-time weather updates for their current location and allows them to search for weather status in any area, offering convenient access to accurate weather information whenever needed.",
        skills:"Built using HTML ,CSS and Javascript.",
        link: "#",
    },
    {
        id:3,
        image: `${Home3}`,
        title:"RazorPay clone",
        text: "A cloned version of RazorPay I created to challenge myself by recreating the user interface and features of the original site while practicing my web development skills.",
        skills:"Built using HTML and TailwindCSS.",
        link: "#",
    },
];
export default data;