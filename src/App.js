import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React, { useState } from "react";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Notestate from './context/notes/notestate';
import Alert from './component/Alert';
import Signup from './component/Signup';
import Login from './component/Login';


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert(" Light mode enabled", "success")
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#13013a';
      document.body.style.color = 'white';
      showalert(" Dark mode enabled", "success")
    }
  }


  return (
    <Notestate>
    <Router>
      <>
        <Navbar mode={mode} togglemode={togglemode}/>
        <Alert alert={alert} />
       <div className="container">
        <Routes>
          <Route path='/' element={<Home showalert={showalert} togglemode={togglemode}/> } />
          <Route path="/about" element={<About togglemode={togglemode} />} />
          <Route path="/login" element={<Login showalert={showalert} togglemode={togglemode}/>} />
          <Route path="/signup" element={<Signup showalert={showalert} togglemode={togglemode}/>} />
        </Routes>
        </div>
      </>
    </Router>
    </Notestate>
  );
}

export default App;
