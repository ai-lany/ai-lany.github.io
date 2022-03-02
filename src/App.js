import React, {useState} from "react";
import { gsap } from "gsap";
import './App.css';
import Profile from './portfolio-container/home/Profile';
import Header from './portfolio-container/header/Header';
import Projects from "./portfolio-container/projects/Projects";
import AnimatedCursor from "react-animated-cursor"

export default function App(){


  return(
    
      <div className="App">
        <div className='links'>
           
        </div>
        <AnimatedCursor 
        innerSize={8}
        outerSize={24}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}/>
        <Header/>
        <Profile/>
        <Projects/>
        
      </div>
    );
  }

