
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextChanger from './TextChanger';
// import About from './About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {
  const[mode, setMode] = useState('light');
  const[toggleText,setToggleText] = useState('Light Mode');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#616266'
      setToggleText('Dark Mode');
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      setToggleText('Light Mode');
    }
  }
  return (
    <>
      <Navbar mode ={mode} toggleMode={toggleMode} toggleText={toggleText}/>
      {/* <Router>
        
        <Routes>
          <Route exact path='/textchange' element={}></Route>
          <Route exact path='/about' element={<About/>}></Route>
      
            
        </Routes>
     </Router> */}
     <TextChanger mode ={mode}/>
    </>
  );
}

export default App;
