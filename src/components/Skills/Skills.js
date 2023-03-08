import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(() =>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='max-w-6xl mx-auto my-20 px-6' id='skills'>
            <h2 className="text-3xl section-title">SKILLS</h2>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div className='skills-card' data-aos="fade-right">
                    <div className='text-center'>
                    <h1>JavaScript</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="fade-down">
                    <div className='text-center'>
                    <h1>React js</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="fade-left">
                    <div className='text-center'>
                    <h1>Node.js</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="fade-right">
                    <div className='text-center'>
                    <h1>Vanila CSS</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="flip-up">
                    <div className='text-center'>
                    <h1>Tailwind CSS</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="fade-left">
                    <div className='text-center'>
                    <h1>MongoDB</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="fade-right">
                    <div className='text-center'>
                    <h1>HTML5</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="fade-up">
                    <div className='text-center'>
                    <h1>Bootstrap</h1>
                    </div>
                    </div>
                <div className='skills-card' data-aos="fade-left">
                    <div className='text-center'>
                    <h1>Figma</h1>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Skills;