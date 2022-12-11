import React from "react";
import doctor from "../../assets/projects/doctor.png";
import './Project.css';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto my-20 px-2" id="projects">
      <h1 className="text-3xl section-title">PROJECTS</h1>
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
        <div className="card w-96 bg-base-100 shadow-xl my-10">
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
          <div className="card-actions justify-center mt-2">
      <a href="" className="projectBtn">Live Site</a>
    </div>
        </div>
      </div>
        </div>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl my-10">
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
          <div className="card-actions justify-center mt-2">
          <a href="" className="projectBtn">Live Site</a>
    </div>
        </div>
      </div>
        </div>
        <div>
        <div className="card w-96 bg-base-100 shadow-xl my-10">
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
          <div className="card-actions justify-center mt-2">
          <a href="" className="projectBtn">Live Site</a>
    </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
