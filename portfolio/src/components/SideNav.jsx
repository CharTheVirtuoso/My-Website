import React,{useState} from 'react'
import { AiOutlineHome, AiOutlineMenu,AiOutlineFundProjectionScreen, AiOutlineMail } from 'react-icons/ai'
import {HiAcademicCap} from 'react-icons/hi'
import {BsPerson} from 'react-icons/bs'
import {FcMenu} from 'react-icons/fc'


const SideNav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    return (
    <div>
        <FcMenu size={25} onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
    {
        nav? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor hover:scale-110 ease-in duration-200 '>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>Home</span>

                </a>
                <a href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor hover:scale-110 ease-in duration-200 '>
                    <HiAcademicCap size={20}/>
                    <span className='pl-4'>About</span>

                </a>
                <a href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor hover:scale-110 ease-in duration-200 '>
                    <AiOutlineFundProjectionScreen size={20}/>
                    <span className='pl-4'>Projects</span>

                </a>
                <a href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor hover:scale-110 ease-in duration-200 '>
                    <BsPerson size={20}/>
                    <span className='pl-4'>Resume</span>

                </a>
                <a href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor hover:scale-110 ease-in duration-200 '>
                    <AiOutlineMail size={20}/>
                    <span className='pl-4'>Contact</span>

                </a>
            </div>
        )
        :(
            ""
        )
    }

    <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
            <a href='#main' className='rounded-full shadow-lg bg-gray-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineHome size={20}/>

            </a>
            <a href='#about' className='rounded-full shadow-lg bg-gray-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiAcademicCap size={20}/>

            </a>
            <a href='#projects' className='rounded-full shadow-lg bg-gray-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineFundProjectionScreen size={20}/>

            </a>
            <a href='#main' className='rounded-full shadow-lg bg-gray-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPerson size={20}/>

            </a>
            <a href='#main' className='rounded-full shadow-lg bg-gray-500 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={20}/>

            </a>
        </div>

    </div>
















    </div>
  );
};

export default SideNav