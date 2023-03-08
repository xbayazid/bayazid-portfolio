import React from 'react';
import { HiOutlineCheckCircle, HiOutlineViewGrid } from "react-icons/hi";
import './ProjectDetails.css';
import { Link } from 'react-router-dom';

const DoctorsPortal = () => {
    return (
<div className='max-w-7xl mx-auto my-20 px-2'>
      <div className="mb-6 text-center">
        <h2 className="text-3xl project-title">Doctors Portal - Doctor appointment system</h2>
      </div>
      <hr className='mb-3 lg:w-2/3' />
      <div className='leading-9 projects-details'>
        <p className='flex items-center'><HiOutlineViewGrid className='mr-2 hidden lg:block' />This project has a different dashboard layout for users and admin.</p>
        <p className='flex items-center'><HiOutlineViewGrid className='mr-2 hidden lg:block' />It has an Authentication system during sign-up, sign-in, and accessing private routes.</p>
        <p className='flex items-center'><HiOutlineViewGrid className='mr-2 hidden lg:block' />User can book appointment, check his appointment list in the dashboard. </p>
        <p className='flex items-center'><HiOutlineViewGrid className='mr-2 hidden lg:block' />Admin can check his booked appointment.</p>
      </div>
      <hr className='mt-3 lg:w-2/3' />
      <div className='lg:flex gap-8'>
        <div className='leading-9 projects-details my-7'>
          <h2 className="text-2xl font-semibold mb-3">Front-End Technologies</h2>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />ReactJS</p>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />Tailwind CSS</p>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />Daisy UI </p>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />Firebase</p>
        </div>
        <div className='leading-9 projects-details my-7'>
          <h2 className="text-2xl font-semibold mb-3">Back-End Technologies</h2>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />MongDB</p>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />NodeJS</p>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />ExpressJS</p>
        </div>
      </div>

      <div className='lg:flex justify-center mb-2'>
        <div className='p-3'>
          <a target="_blank" href="https://github.com/xbayazid/doctor-portals-client" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Client Code</span>
          </a>
        </div>
        <div className='p-3'>
        <a target="_blank" href="https://github.com/xbayazid/doctors-portal-server" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Server Code</span>
          </a>
        </div>
        <div className='p-3'>
        <a target="_blank" href="https://doctors-portal-5e83a.web.app/" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Live Site</span>
          </a>
        </div>
      </div>
      {/* <Link to="/" className='projectsDetailsBtn hidden'>Back To Home</Link> */}
    </div>
    );
};

export default DoctorsPortal;