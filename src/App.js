import React from "react";
import { gsap } from "gsap";
import './App.css';
import Profile from './portfolio-container/home/Profile';
import Header from './portfolio-container/header/Header';
import About from "./portfolio-container/about/About";







function App() {
  return (
    <div className="App">
      <Header></Header>
      <Profile/>
      <About></About>

    </div>
  );
}

export default App;
