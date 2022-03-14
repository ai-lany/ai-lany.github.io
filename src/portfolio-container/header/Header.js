import { render } from '@testing-library/react';
import React, { Component } from 'react';
import App from '../../App';
import './Header.css';
import { useState } from "react";

export default function Header(){
    return(
      <div>
      <div className='nav noselect'>
        <nav className='fixed-top navbar-expand-md navbar  navbar-dark bg-transparent'>
          <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbar-ailany" aria-controls="navbar-ailany" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-ailany">
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

