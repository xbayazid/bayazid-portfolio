import React, { useEffect } from 'react';
import { HiMail, HiOutlinePhone } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() =>{
        AOS.init({duration: 2000});
    },[])
    return (
        <div className='max-w-6xl mx-auto my-20 px-2' id='contact'>
            <h1 className="text-3xl section-title">GET IN TOUCH</h1>
            <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-2 my-10'>
                <div  data-aos="fade-up-right">
                    <form>
                    <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full mt-5" />
                    <textarea className="textarea textarea-bordered w-full my-5 lg:h-32" placeholder="Message"></textarea>
                    </form>
                    <div>
                        <button className='contactBtn' type='submit'>Submit</button>
                    </div>
                </div>
                
                <div className='social-contact'  data-aos="fade-up-left">
                    <p className='mb-5 flex items-center'><HiMail className='mr-2'></HiMail> bayazid.developer@gmail.com</p>
                    <p className='mb-5 flex items-center'><HiOutlinePhone className='mr-2'></HiOutlinePhone> +8801924-069187</p>
                    <p className='mb-5 flex items-center contact-link'><FaGithubAlt className='mr-2'></FaGithubAlt> <a target="_blank" href="https://github.com/xbayazid?tab=repositories"> xbayazid</a> </p>
                    <p className='mb-5 contact-link flex items-center'><FaLinkedinIn className='mr-2'></FaLinkedinIn> <a target="_blank" href="https://www.linkedin.com/in/md-bayazid-hossain/"> md-bayazid-hossain</a></p>
                    <p className='mb-5 contact-link flex items-center'><FaFacebookF className='mr-2'></FaFacebookF> <a target="_blank" href="https://www.facebook.com/xbayazid"> Bayazid Hossain</a></p>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Contact;