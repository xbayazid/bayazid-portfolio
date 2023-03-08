import React, { useEffect } from "react";
import doctor from "../../assets/projects/doctor.png";
import coder from '../../assets/coder.png';
import denti from '../../assets/projects/denti.png';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";


const Projects = () => {
  useEffect(() =>{
      AOS.init({duration: 2000});
  },[])
  return (
    <div className="max-w-6xl mx-auto my-20 px-2" id="projects">
      <h1 className="text-3xl section-title">PROJECTS</h1>
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
        {/* CodersStackBox Start */}
        <div className="card w-96 bg-base-100 shadow-xl my-10" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <figure>
          <img src={coder} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title details">
            CodersStackBox
          </h2>
          <div className="card-actions">
            <div className="badge badge-outline">React.js</div>
            <div className="badge badge-outline">Tailwind CSS</div>
            <div className="badge badge-outline">Redux.js</div>
            <div className="badge badge-outline">Firebase</div>
            <div className="badge badge-outline">Node.js</div>
            <div className="badge badge-outline">MongoDB</div>
          </div>
          <div className="card-actions justify-around mt-2">
      <a target="_blank" href="https://codersstackbox-c9449.web.app/" className="projectBtn">Live Site</a>
      <Link to='/codersStackBox' className="projectBtn">Learn More</Link>
    </div>
        </div>
      </div>
        </div>
        {/* CodersStackBox end  */}
        {/* Doctors portal start  */}
        <div>
        <div className="card w-96 bg-base-100 shadow-xl my-10"  data-aos="zoom-in">
        <figure>
          <img src={doctor} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title details">
            Doctors Portal
          </h2>
          <div className="card-actions">
            <div className="badge badge-outline">React.js</div>
            <div className="badge badge-outline">Tailwind CSS</div>
            <div className="badge badge-outline">DaisyUI</div>
            <div className="badge badge-outline">Firebase</div>
            <div className="badge badge-outline">Node.js</div>
            <div className="badge badge-outline">MongoDB</div>
          </div>
          <div className="card-actions justify-around mt-2">
          <a target="_blank" href="https://doctors-portal-5e83a.web.app/" className="projectBtn">Live Site</a>
      <Link to='/doctorsportal' className="projectBtn">Learn More</Link>
    </div>
        </div>
      </div>
        </div>
        {/* Doctor portal end */}
        {/* Denticare starts  */}
        <div>
        <div className="card w-96 bg-base-100 shadow-xl my-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <figure>
          <img src={denti} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title details">
            Denti Care
          </h2>
          <div className="card-actions">
            <div className="badge badge-outline">React.js</div>
            <div className="badge badge-outline">React-Bootstrap</div>
            <div className="badge badge-outline">Firebase</div>
            <div className="badge badge-outline">Node.js</div>
            <div className="badge badge-outline">MongoDB</div>
          </div>
          <div className="card-actions justify-around mt-2">
      <a target="_blank" href="https://denti-care-f9f95.web.app/" className="projectBtn">Live Site</a>
      <Link to="/denticare" className="projectBtn">Learn More</Link>
    </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
