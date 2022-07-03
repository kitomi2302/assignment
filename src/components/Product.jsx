import React from 'react'
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs,SiTailwindcss} from 'react-icons/si'
import HTML from '../assets/hieu.jpg';
import Next from '../assets/next.png';
import JavaScript from '../assets/trang.jpg';
import ReactImg from '../assets/linh2.jpg';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/linh1.jpg';
import Tailwind from '../assets/hung.jpg';
import Redux from '../assets/redux.png';


function Skill() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 px-4'>
    {/* Container */}
    <div className='max-w-[1024px] mx-auto p-4 flex flex-col justify-center h-screen w-full'>
        <div className='mt-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Team Members</p>
            <p className='py-4 font-Quicksand'>There're our team members</p>
        </div>
        {/* Libraries and FrameWork */}
        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-6 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-28 mx-auto h-28' src={HTML} alt="HTML icon"  />
                <p className='my-4'>Le Trung Hieu</p>
                <p className='my-2'>20080140</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                <p className='my-4'>Phan Thi Thanh Trang</p>
                <p className='my-2'>20080193</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>Nguyen Hoai Linh</p>
                <p className='my-2'>20080157</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="Git icon" />
                <p className='my-4'>Tran Dieu Linh</p>
                <p className='my-2'>20080160</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="TW icon" />
                <p className='my-4'>Nguyen Khanh Hung</p>
                <p className='my-2'>20080144</p>
            </div>
           
        </div>
    </div>
  </div>
  )
}

export default Skill