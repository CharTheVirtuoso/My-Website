import React from 'react'
import main from "../assets/back.png";
import {  FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

import { TypeAnimation } from 'react-type-animation'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={main} />
            <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
                <div className=' max-w-[1000px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
                    <h1 className='sm-text-6xl text-5xl font-bold text-gray-500'>I'm Chanukya Serasinghe</h1>
                    <h2 className='flex sm:text-2xl text-2xl pt-4 text-gray-500 '>I'm a
                    <TypeAnimation
                            sequence={[
                                'Tech enthusiast', // Types 'One'
                                3000, // Waits 1s
                                'Software Engineering undergrad', // Deletes 'One' and types 'Two'
                                3000, // Waits 2s
                                'Tutor', // Types 'Three' without deleting 'Two'
                                3000, // Waits 2s
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full' >
                        <AiOutlineLinkedin color='white' className='cursor-pointer' size={20} />
                        <FaGithub color='white' className=' cursor-pointer' size={20}/>
                        <FiMail color='white' className=' cursor-pointer' size={20}/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main