import Image from 'next/image';
import React from 'react';
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import logo from '@/assets/logo.png'



const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className=" mx-auto px-4">
                <div className="grid lg:grid-cols-4 grid-col-2 gap-8">
                    {/* Left Section */}
                    <div className="">
                        <div className='text-xl lg:text-2xl  flex'>
                            <p className="font-semibold text-purple-500 mb-2">Web</p>
                            <p>Sphere</p>
                        </div>
                        <p className="text-sm">
                            Stay informed and inspired by joining our newsletter! Sign up
                            today to receive the latest updates.
                        </p>
                    </div>

                    {/* Company Section */}
                    <div className="lg:pl-20">
                        <p className="text-lg font-semibold mb-4">Company</p>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:underline">About</a></li>
                            <li><a href="#" className="text-sm hover:underline">Services</a></li>
                            <li><a href="#" className="text-sm hover:underline">Work</a></li>
                            <li><a href="#" className="text-sm hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="lg:pl-10">
                        <p className="text-lg font-semibold mb-4">Services</p>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:underline">UI/UX Design</a></li>
                            <li><a href="#" className="text-sm hover:underline">Web Design</a></li>
                            <li><a href="#" className="text-sm hover:underline">Developer</a></li>
                            <li><a href="#" className="text-sm hover:underline">SEO Content</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="">
                        <p className="text-lg font-semibold mb-4">Contact Us</p>
                        <p className="text-sm mb-2">📧 <a href="mailto:support@websphere.com" className="hover:underline">support@websphere.com</a></p>
                        <p className="text-sm">📞 +007732-234759</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6 flex flex-wrap justify-between items-center">
                    {/* Copyright */}
                    <p className="text-sm">
                        ©2024 WebSphere All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex lg:mt-0 mt-4 space-x-4">
                        <FaDribbble className='size-10 border p-2 rounded-full' />
                        <FaBehance className='size-10 border p-2 rounded-full'/>
                        
                        <FaInstagram className='size-10 border p-2 rounded-full' />
                        <FaLinkedinIn className='size-10 border p-2 rounded-full' />
                        <FaFacebookF className='size-10 border p-2 rounded-full' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
