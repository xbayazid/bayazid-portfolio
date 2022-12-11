import React from 'react';
import { HiArrowDownTray } from "react-icons/hi2";
import './About.css';

const About = () => {
    return (
        <div className='max-w-6xl mx-auto px-6'>
            <h3 className="text-primary md:text-2xl text-lg font-normal details">Hello, Myself</h3>
            <h1 className="text-3xl my-3 lg:text-7xl md:text-6xl font-extrabold lg:my-8">Md. Bayazid Hossain</h1>
            <h1 className="text-accent text-4xl my-4 lg:text-7xl md:text-6xl sm:text-4xl font-extrabold lg:my-8">I build responsive & eye catching website.</h1>
            <p className='md:w-1/2 text-justify details'>I'm front-end developer specialized in <span className='text-primary'>React.js</span>. The main focus is front-end, but at the same time, I try to learn new technology also.</p>
            <div className='mt-10'>
                <a className='resumeBtn' href="/src/assets/Bayazid-Resume.pdf" download>Resume</a>
            </div>
        </div>
    );
};

export default About;