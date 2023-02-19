import { useState } from 'react'
import { Contact } from './components/Contact';
import Education from './components/Education';
import Main from './components/Main';
import Projects from './components/Projects';
import SideNav from './components/SideNav';


function App() {
  

  return (
    <div >
      <SideNav/>
      <Main/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
