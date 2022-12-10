import React from 'react';
import reactLogo from '../../assets/skills/react.png'
import './Skills.css';

const Skills = () => {
    return (
        <div className='max-w-6xl mx-auto my-20 px-6'>
            <h2 className="text-3xl section-title">SKILLS</h2>
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>JavaScript</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>React js</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>Node.js</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>Vanila CSS</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>Tailwind CSS</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>MongoDB</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>HTML5</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>Bootstrap</h1>
                    </div>
                    </div>
                <div className='skills-card'>
                    <div className='text-center'>
                    <h1>Figma</h1>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Skills;