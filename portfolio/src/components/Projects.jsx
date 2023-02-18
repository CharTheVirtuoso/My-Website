import React from 'react'
import ProjectItems from './ProjectItems'
import project1 from '../assets/project1.png'
import project2 from '../assets/scu.png'
import project3 from '../assets/pro3.jpg'
import project4 from '../assets/pro4.jfif'


function Projects() {
  return (
    <div id='projects' className='max-2-[-1040px] m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-black  to-gray-900'>
    <h1 className='text-4xl font-bold text-center text-red-700 '>Projects</h1>
    <p className='text-center py-8 font-bold text-lg text-stone-400'>
      Here are a few projects I've worked on recently . Want to see more? Check out my <a href='https://github.com/ghostfacegangsta ' className='text-stone-200'>Github</a>  
    </p>
    <div className='grid sm:grid-cols-2 gap-12'>
      <ProjectItems img={project1} title='LMC' />
      <ProjectItems img={project2} title='Sculptr'/>
      <ProjectItems img={project3} title='La Catalogue'/>
      <ProjectItems img={project4} title='Eventz'/>
    </div>
    </div>
    )
}

export default Projects