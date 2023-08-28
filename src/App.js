import { useState } from 'react';
import './App.css';
import './Navbar.css';
import './Header.css';
import './AboutMe.css';
import './ProjectList.css';
import './ProjectInfo.css';
import './Credits.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
import ProjectList from './ProjectList';
import ProjectInfo from './ProjectInfo';
import Credits from './Credits.js';
import ProjectState from './ProjectState';

function App() {
  let curState = new ProjectState();
  let [ curInfo, setCurInfo ] = useState(curState.state.info);
  curState.setInfoSubscriber(() => {setCurInfo(curState.state.info)});

  let [verticalMode, updateVerticalMode] = useState(window.innerHeight > window.innerWidth);
  window.addEventListener("resize", () => {
    updateVerticalMode(window.innerHeight > window.innerWidth);
  });

  return (
    <>
      <Header />
      <Navbar curState={curState} verticalMode={verticalMode} />
      <AboutMe verticalMode={verticalMode} />
      <ProjectList curState={curState} verticalMode={verticalMode} />
      <ProjectInfo curInfo={curInfo} verticalMode={verticalMode} />
      <Credits verticalMode={verticalMode} />
    </>
  );
}

export default App;
