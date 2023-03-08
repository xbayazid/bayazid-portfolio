import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Portfolio = () => {
    return (
        <div>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;