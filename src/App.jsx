import React from 'react';
import Background from './Components/Background'; 
import Header from './Components/Header';
import './index.css'; 
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Background />
      <div className="content">
        <Header/>
        <Home/>
        <About/>
        <Projects />
        <Contact/>
        <footer>
          <div className="footer-links">
            <a href='https://www.linkedin.com/in/reiad-sakoor-28432222a/' target='_blank'> <img src='/media/linkedini.png'/></a>
            <a href='https://github.com/Rs134' target='_blank'> <img src='/media/githubi.png'/></a>
            <a href='mailto:reiadwc@gmail.com'> <img src='/media/gmaili.png'/></a>
          </div>
        </footer>


      </div>
    </div>
  );
}

export default App;
