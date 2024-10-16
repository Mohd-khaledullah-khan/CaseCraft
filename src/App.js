import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");  //weather dark mode is enable or not
  const [alert, setAlert] = useState('showAlert');

  const showAlert =(message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
           setAlert(null);
    }, 1500);

  }
  

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#091057';
      showAlert("dark mode has been enable" ,"success");
      document.title = "CaseCraft -DarkMode"

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable" ,"success");
      document.title = "CaseCraft-Home";
    }
  }
  setInterval (()=>{
    document.title = "CaseCraft is Amazing";
  },2000);
  setInterval (()=>{
    document.title = "Install the CaseCraft";
  },2000);

  return (
    <>
    <Router>
    <Navbar title = " CaseCraft " mode={mode} toggleMode={toggleMode}  abouttext ="About" />
    <Alert alert={alert} />
    <div className="container my-3">
       {/* /users--> compunent-1
          /users/home --> compunent-2 */}
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading = "Enter The Text To Analyze Below" showAlert={showAlert} mode={mode} /> } />
      </Routes>

    </div>
    </Router>  
    </>
  );
}

export default App;
