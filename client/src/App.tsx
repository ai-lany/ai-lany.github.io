import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'

import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

const App: React.FC<{}> = ({}) => {

  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <Projects/>
    </div>
  )
}

export default App;
