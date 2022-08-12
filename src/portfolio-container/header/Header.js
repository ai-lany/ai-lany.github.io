import { render } from '@testing-library/react';
import React, { Component } from 'react';
import App from '../../App';
import './Header.css';
import { useState } from "react";
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Header(){


  const {height, width} = useWindowDimensions();
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if(width >= 576){
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  }
  
}
    return(
      <div>
      <div id='nav' className='noselect' >
        <nav id = 'navbar' className='fixed-top navbar-expand-sm navbar  navbar-dark bg-transparent' >
          <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbar-ailany" aria-controls="navbar-ailany" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-ailany" style={{backgroundColor:"#131214"}}>
            <a className="navbar-brand" href="#"></a>
            <ul className="navbar-nav center ">
            <li className="nav-item active">
                <a className="nav-link" aria-current="true"  href="#"><span>01. </span>Home</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#projects"><span>02. </span>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#"><span>03. </span>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>
      
    </div>

    );
  }

