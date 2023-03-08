import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const AboutMe = () => {
    useEffect(() =>{
    AOS.init({duration: 2000});
},[])
    return (
        <div className="max-w-6xl mx-auto my-20 px-2" id='aboutME'>
            <h1 className="text-3xl section-title">About Me</h1>
            <div>
                <div className='mt-10'  data-aos="fade-left">
                <h3 className="text-primary md:text-2xl text-lg font-normal details">I'm</h3>
            <h1 className="text-3xl my-3 lg:text-7xl md:text-6xl font-extrabold lg:my-8">Md. Bayazid Hossain</h1>
                    <p className='md:w-1/2 text-justify details'>Currently I'm doing Bsc in Computer Science & Engineering. I am a self-motivated and self-taught professional who likes to solve problems. I merge a passion for usability and user experience with technical knowledge to create cool digital experiences. Looking for a position to take create and diversify challenges in the Web Development arena across the globe.</p>
                    <div>
            </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;