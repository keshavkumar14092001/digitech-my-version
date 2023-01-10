import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaPhone } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { GoMail } from 'react-icons/go';

const Footer = () => {
    return (

        <div className='bg-[#010718]'>
            <div className='w-full p-[20px] lg:p-[40px] text-white flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-[30%] flex flex-col items-center justify-between'>
                    <p className='text-center text-base lg:text-xl tracking-wide font-semibold underline decoration-orange-500 underline-offset-8'>
                        Follow Us On Our's Social Media Platform
                    </p>
                    <div className='w-full flex justify-evenly items-center pt-8'>
                        <button
                            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#c4302b] transition">
                            <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
                                <FaYoutube size={28} />
                            </a>
                        </button>
                        <button
                            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-blue-900 transition">
                            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                                <FaLinkedin size={28} />
                            </a>
                        </button>
                        <button
                            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#feda75] transition">
                            <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                                <FaInstagram size={28} />
                            </a>
                        </button>
                        <button
                            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#4267B2] transition">
                            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                                <FaFacebookF size={28} />
                            </a>
                        </button>
                        <button
                            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#00acee] transition">
                            <a href="https://www.twitter.com/" rel="noreferrer" target="_blank">
                                <FaTwitter size={28} />
                            </a>
                        </button>
                    </div>
                </div>
                <div className='w-full py-4 lg:py-0 lg:w-[30%] flex flex-col items-center justify-between'>
                    <p className='w-full text-center text-xl tracking-wide font-semibold underline decoration-orange-500 underline-offset-8'>
                        Our Services
                    </p>
                    <div className='w-full flex justify-evenly items-center pt-6'>
                        <ul>
                            <li className='pb-4'>Web Development</li>
                            <li className='pb-4'>App Development</li>
                            <li className='pb-4'>Digital Marketing</li>
                            <li className='pb-4'>Content Writing</li>
                            <li className='pb-4'>Brand Management</li>
                        </ul>
                        <ul>
                            <li className='pb-4'>Website Maintenance</li>
                            <li className='pb-4'>UI/UX Designing</li>
                            <li className='pb-4'>Logo Designing</li>
                            <li className='pb-4'>Social Media Handling</li>
                            <li className='pb-4'>Responsive Designing</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:w-[30%] flex flex-col items-center justify-between'>
                    <p className='w-full text-center text-xl tracking-wide font-semibold underline decoration-orange-500 underline-offset-8'>
                        Contact Us
                    </p>
                    <div className='w-full pt-8 flex flex-col items-start md:items-center lg:items-start justify-between md:justify-center lg:justify-between'>
                        <div className='w-full flex lg:justify-evenly items-center'>
                            <button
                                className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#c4302b] transition">
                                <GrLocation size={20} />
                            </button>
                            <p className='pl-3'>
                                Hinjewadi Rajiv Gandhi Infotech Park, pune, Maharashtra, 411057, India
                            </p>
                        </div>
                        <div className='w-full flex items-center pt-4'>
                            <button
                                className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#c4302b] transition">
                                <FaPhone size={20} />
                            </button>
                            <p className='pl-2'>+91 84596 07770</p>
                        </div>
                        <div className='w-full flex items-center py-4'>
                            <button
                                className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-[#c4302b] transition">
                                <GoMail size={20} />
                            </button>
                            <p className='pl-3'>info@digitechinfoservices.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;