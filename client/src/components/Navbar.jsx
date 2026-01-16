import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md pt-2 pb-4' : 'bg-transparent pt-2 pb-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            {/* Logo Icon */}
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${scrolled || !isHome ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                                <span className="font-bold text-xl">B</span>
                            </div>
                            <span className={`font-bold text-2xl tracking-tight ${scrolled || !isHome ? 'text-primary' : 'text-white'}`}>
                                BrightLearn<span className="text-secondary">.in</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
                        <NavLink to="/" scrolled={scrolled} isHome={isHome}>Home</NavLink>
                        <NavLink to="/about" scrolled={scrolled} isHome={isHome}>About Us</NavLink>
                        <NavLink to="/services" scrolled={scrolled} isHome={isHome}>Services</NavLink>
                        <NavLink to="/contact" scrolled={scrolled} isHome={isHome}>Contact</NavLink>

                        <Link to="/contact" className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-md ${scrolled || !isHome ? 'bg-primary text-white hover:bg-blue-700' : 'bg-white text-primary hover:bg-gray-100'}`}>
                            Get Started
                        </Link>
                    </div>

                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled || !isHome ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'} focus:outline-none`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white shadow-xl`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
                    <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
                    <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, children, scrolled, isHome }) => (
    <Link
        to={to}
        className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${scrolled || !isHome
            ? 'text-gray-700 hover:text-primary'
            : 'text-gray-200 hover:text-white'
            }`}
    >
        {children}
    </Link>
);

const MobileNavLink = ({ to, onClick, children }) => (
    <Link
        to={to}
        className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
        onClick={onClick}
    >
        {children}
    </Link>
);

export default Navbar;
