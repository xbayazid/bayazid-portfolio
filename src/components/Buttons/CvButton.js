import React from 'react';
import arrowImg from '../../assets/arrow.png'

const CvButton = () => {
    return (
        <div>
            <a target="_blank" href="https://drive.google.com/file/d/1GO0ded2PFHvlFkRPVop9MgQQAfzTgJUw/view?usp=share_link" class="relative inline-flex items-center justify-center  px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-emerald-300 rounded-full shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-emerald-300 group-hover:translate-x-0 ease">
                    <img className='w-7' src={arrowImg} alt="" />
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Download Resume</span>
                <span class="relative invisible">Download Resume</span>
            </a>
        </div>
    );
};

export default CvButton;