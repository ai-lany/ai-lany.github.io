import { render } from '@testing-library/react';
import React, { Component } from 'react';
import App from '../../App';
import './Header.css';
import Contact from '../contact/Contact';
import { useState } from "react";

export default function Header(){
    return(
      <div>
      <div className='nav noselect'>
        <nav className='fixed-top navbar-expand-md navbar  navbar-dark bg-transparent'>
          <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="">
            <a className="navbar-brand" href="#"></a>
            <ul className="navbar-nav center ">
            <li className="nav-item active">
                <a className="nav-link" href="#"><span>01. </span>Home</a>
              </li>
            <li className="nav-item active">
                <a className="nav-link" href="#about"><span>02. </span>About</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#projects"><span>03. </span>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#"><span>04. </span>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        
      </div>
      
    </div>

    );
  }

