import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Logo & Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            {/* Logo Icon */}
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-transparent border-2 border-secondary text-secondary">
                                <span className="font-bold text-xl">B</span>
                            </div>
                            <span className="font-bold text-3xl tracking-tight text-secondary">
                                BrightLearn<span className="text-secondary">.in</span>
                            </span>
                        </Link>
                        <div className="text-secondary font-semibold">
                            Open Hours:
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Mon – Fri: 10 am – 6 pm,<br />
                            Saturday – Sunday: CLOSED
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white relative">
                            Links
                            <span className="absolute bottom-[-10px] left-0 w-12 h-0.5 bg-gray-700"></span>
                            <span className="absolute bottom-[-10px] left-12 w-2 h-0.5 bg-red-600 rounded-full ml-1"></span>
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="text-white hover:text-secondary transition-colors block">› Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors block">› About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors block">› Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors block">› Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-secondary transition-colors block">› Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: More Links (Split for visual balance logic if needed, or just combine) - matching screenshot structure roughly */}
                    <div>
                        <div className="h-8 md:h-12 lg:h-14"></div> {/* Spacer to align with Links header if needed, or just standard list */}
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/careers" className="text-gray-400 hover:text-secondary transition-colors block">› Careers</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-secondary transition-colors block">› Terms & Conditions</Link></li>
                            <li><Link to="/refund" className="text-gray-400 hover:text-secondary transition-colors block">› Return & Refund</Link></li>
                            <li><Link to="/shipping" className="text-gray-400 hover:text-secondary transition-colors block">› Shipping Policy</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-secondary transition-colors block">› Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white relative">
                            Newsletter
                            <span className="absolute bottom-[-10px] left-0 w-12 h-0.5 bg-gray-700"></span>
                        </h4>
                        <p className="text-gray-300 text-sm mb-6">Send us a newsletter to get update</p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:bg-secondary hover:text-white transition-all"><i className="fab fa-facebook-f font-bold">f</i></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:bg-secondary hover:text-white transition-all"><i className="fab fa-twitter font-bold">t</i></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:bg-secondary hover:text-white transition-all"><i className="fab fa-instagram font-bold">i</i></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white text-dark flex items-center justify-center hover:bg-secondary hover:text-white transition-all"><i className="fab fa-linkedin-in font-bold">l</i></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
                    <p>2026 © All rights reserved by <span className="text-red-500">Uptricks Services Private Limited</span></p>
                    {/* Back to top button placeholder could go here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
