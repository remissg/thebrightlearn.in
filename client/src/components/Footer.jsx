import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-white">
                                <span className="font-bold text-xl">B</span>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-white">
                                BrightLearn<span className="text-secondary">.in</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses with top-tier IT solutions and digital marketing strategies. We turn your vision into reality.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary inline-block pb-1">Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Web Development</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Digital Marketing</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">SEO Optimization</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">App Development</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b-2 border-primary inline-block pb-1">Contact Info</h4>
                        <p className="text-gray-400 text-sm mb-3 flex items-center"><span className="w-20 font-semibold text-gray-300">Address:</span> Pune, Maharashtra, India</p>
                        <p className="text-gray-400 text-sm mb-3 flex items-center"><span className="w-20 font-semibold text-gray-300">Email:</span> info@brightlearn.in</p>
                        <p className="text-gray-400 text-sm flex items-center"><span className="w-20 font-semibold text-gray-300">Phone:</span> +91 12345 67890</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} BrightLearn.in. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
