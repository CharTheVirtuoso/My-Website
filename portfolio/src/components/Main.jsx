import React from 'react'
import main from "../assets/back.png";
import {  FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
// import { Link } from 'react-router-dom';


import { TypeAnimation } from 'react-type-animation'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={main} />
            <div className='w-full h-screen absolute top-0 left-0 bg-black/30'>
                <div className=' max-w-[1000px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
                    <h1 className='sm-text-6xl text-5xl font-bold text-gray-400'>I'm Chanukya Serasinghe</h1>
                    <h2 className='flex sm:text-2xl text-2xl pt-4 text-gray-400 '>I'm a
                    <TypeAnimation
                            sequence={[
                                'Tech enthusiast', // Types 'One'
                                2000, // Waits 1s
                                'Software Engineering undergrad', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Tutor', // Types 'Three' without deleting 'Two'
                                2000, // Waits 2s
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[150px] w-full' >
                        {/* <Link to="https://www.linkedin.com/in/chanukya-Serasinghe"> */}
                        <FaLinkedinIn  color='white' className='cursor-pointer' size={20} />
                        {/* </Link >
                        <Link to="https://github.com/ghostfacegangsta"> */}
                        <FiGithub color='white' className=' cursor-pointer' size={20}/>
                        {/* </Link>
                        <Link to="https://www.gmail.com"> */}
                        <SiGmail color='white' className=' cursor-pointer' size={20}/>
                        {/* </Link> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main