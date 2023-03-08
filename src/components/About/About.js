import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import CvButton from '../Buttons/CvButton';

const About = () => {
    useEffect(() =>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='max-w-6xl mx-auto px-6' id='home' data-aos="fade-down">
            <h3 className="text-primary md:text-2xl text-lg font-normal details">Hello, Myself</h3>
            <h1 className="text-3xl my-3 lg:text-7xl md:text-6xl font-extrabold lg:my-8">Md. Bayazid Hossain</h1>
            <h1 className="text-accent text-4xl my-4 lg:text-7xl md:text-6xl sm:text-4xl font-extrabold lg:my-8">I build responsive & eye catching website.</h1>
            <p className='md:w-1/2 text-justify details'>I'm front-end developer specialized in <span className='text-primary'>React.js</span>. The main focus is front-end, but at the same time, I try to learn new technology also.</p>
            <div className='mt-10'>
                <CvButton></CvButton>
            </div>
        </div>
    );
};

export default About;