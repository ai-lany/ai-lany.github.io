import React, {useState} from "react";
import { gsap } from "gsap";
import './App.css';
import Profile from './portfolio-container/home/Profile';
import Header from './portfolio-container/header/Header';
import About from "./portfolio-container/about/About";
import Projects from "./portfolio-container/projects/Projects";
import Contact from "./portfolio-container/contact/Contact";
import AnimatedCursor from "react-animated-cursor"

export default function App(){


  return(
    
      <div className="App">
        <AnimatedCursor 
        innerSize={8}
        outerSize={24}
        
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}/>
        <Header></Header>
        <Profile></Profile>
        <About></About>
        <Projects></Projects>
      </div>
    );
  }

