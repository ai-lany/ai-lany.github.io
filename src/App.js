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
        outerScale={3}
        color='255, 192, 203'/>
        <Header/>
        <Profile/>
        <Projects/>
        <button className = 'btn lightbulb'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-lightbulb" viewBox="0 0 16 16">
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
          </svg>
        </button>
        
      </div>
    );
  }
