import { Routes,Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
function App() {
  const [isDark,setIsDark] = useState('dark');
  // function modeHandler()
  // {
  //   if(isDark == 'dark'){
  //     setIsDark('light');
  //   }
  //   else{
  //     setIsDark('dark');
  //   }
  // }
  function closePopUp()
  {
      document.getElementById('overlay').classList.remove('overlayactive');
  }
  return (
    <div className={`bg${isDark}`}>
      <NavBar isDark={isDark} setIsDark={setIsDark}/>
      <Home isDark={isDark}/>
      <About/>
      <Skills isDark={isDark}/>
      <Projects isDark={isDark}/>
      <Contact isDark={isDark}/>
      <Footer isDark={isDark}/>
      <div className='overlay' onclick={closePopUp}></div>
    </div>
  );
}

export default App;
