import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Portfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Portfolio;