import React from 'react';
import { HiOutlineCheckCircle, HiOutlineViewGrid } from "react-icons/hi";
import './ProjectDetails.css';
import { Link } from 'react-router-dom';

const DentiCare = () => {
    return (
//         <div className='max-w-6xl mx-auto my-20 px-2'>
//             <h2 className="text-3xl text-center mb-6 project-title">Denti-Care</h2>
// <div className='flex justify-center'>
// <div className='p-3'>
//      <a target="_blank" href='https://github.com/xbayazid/denti-care-client-side'>
//      <button className="btn btn-sm">Client Code</button>
//      </a>
//     </div>
//     <div className='p-3'>
//     <a target="_blank" href='https://github.com/xbayazid/denti-care-server-side'>
//      <button className="btn btn-sm">Server Code</button>
//      </a>
//     </div>
//     <div className='p-3'>
//     <a target="_blank" href="https://denti-care-f9f95.web.app/">
//      <button className="btn btn-sm">Live Site</button>
//      </a>
//     </div>
// </div>
//             <div className="carousel w-full">
//   <div id="item1" className="carousel-item w-full">
//     <img src={dentiOne} alt="" className="w-full" />
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     <img src={dentiTwo} alt='' className="w-full" />
//   </div> 
//   <div id="item3" className="carousel-item w-full">
//     <img src={dentiThree} alt="" className="w-full" />
//   </div> 
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">
//   <a href="#item1" className="btn btn-xs">1</a> 
//   <a href="#item2" className="btn btn-xs">2</a> 
//   <a href="#item3" className="btn btn-xs">3</a> 
// </div>
// <Link to="/projects" className='projectsDetailsBtn'>Back To Projects</Link>
//         </div>
<div className='max-w-7xl mx-auto my-20 px-2'>
      <div className="mb-6 text-center">
        <h2 className="text-3xl project-title">Denti Care - Doctor services system</h2>
      </div>
      <hr className='mb-3 lg:w-2/3' />
      <div className='leading-9 projects-details'>
        <p className='flex items-center'><HiOutlineViewGrid className='mr-2 hidden lg:block' />This project user can add services & reviews</p>
        <p className='flex items-center'><HiOutlineViewGrid className='mr-2 hidden lg:block' />It has an Authentication system during sign-up, sign-in, and accessing private routes.</p>
      </div>
      <hr className='mt-3 lg:w-2/3' />
      <div className='lg:flex gap-8'>
        <div className='leading-9 projects-details my-7'>
          <h2 className="text-2xl font-semibold mb-3">Front-End Technologies</h2>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />ReactJS</p>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />React-Bootstrap</p>
          <p className='flex items-center'><HiOutlineCheckCircle className='mr-2' />React-Router </p>
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
          <a target="_blank" href="https://github.com/xbayazid/denti-care-client-side" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
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
        <a target="_blank" href="https://denti-care-f9f95.web.app/" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Live Site</span>
          </a>
        </div>
      </div>
      {/* <Link to="/" className='projectsDetailsBtn hidden'>Back To Home</Link> */}
    </div>
    );
};

export default DentiCare;