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
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [isDark,setIsDark] = useState('dark');
  return (
    <div className={`bg${isDark} relative`}>
      <NavBar isDark={isDark} setIsDark={setIsDark}/>
      <Home isDark={isDark}/>
      <About/>
      <Skills isDark={isDark}/>
      <Projects isDark={isDark}/>
      <Contact isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  );
}

export default App;

