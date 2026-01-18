import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Briefcase, Mail, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { isAuthenticated, user, logout } = useAuth();

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

    // Helper to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md pt-2 pb-4' : 'bg-transparent pt-1 pb-4'}`}>
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
                        <NavLink to="/" icon={<Home className="w-4 h-4" />} active={isActive('/')} scrolled={scrolled} isHome={isHome}>Home</NavLink>
                        <NavLink to="/about" icon={<Info className="w-4 h-4" />} active={isActive('/about')} scrolled={scrolled} isHome={isHome}>About Us</NavLink>
                        <NavLink to="/internship" icon={<Briefcase className="w-4 h-4" />} active={isActive('/internship')} scrolled={scrolled} isHome={isHome}>Internship</NavLink>
                        <NavLink to="/contact" icon={<Mail className="w-4 h-4" />} active={isActive('/contact')} scrolled={scrolled} isHome={isHome}>Contact Us</NavLink>

                        <div className="ml-4 pl-4 border-l border-gray-200 h-10 flex items-center">
                            {isAuthenticated ? (
                                <Link to="/profile" className="flex items-center gap-3 group relative cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-primary">
                                        {user?.avatar ? (
                                            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-primary text-white">
                                                <User className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-left hidden sm:block">
                                        <p className={`text-sm font-bold ${scrolled || !isHome ? 'text-primary' : 'text-white'}`}>
                                            {user?.name || 'User'}
                                        </p>
                                        <p className={`text-xs ${scrolled || !isHome ? 'text-gray-500' : 'text-gray-200'}`}>
                                            {user?.email || 'user@example.com'}
                                        </p>
                                    </div>
                                </Link>



                            ) : (
                                <div className="flex items-center gap-3">
                                    <Link to="/login" className={`px-6 py-2 rounded-lg text-sm font-bold border transition-all ${scrolled || !isHome ? 'border-primary text-primary hover:bg-primary/5' : 'border-white text-white hover:bg-white/10'}`}>
                                        Login
                                    </Link>
                                    <Link to="/signup" className={`px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-md ${scrolled || !isHome ? 'bg-primary text-white hover:bg-blue-700' : 'bg-white text-primary hover:bg-gray-100'}`}>
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
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
                    <MobileNavLink to="/" icon={<Home className="w-4 h-4" />} onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink to="/about" icon={<Info className="w-4 h-4" />} onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
                    <MobileNavLink to="/internship" icon={<Briefcase className="w-4 h-4" />} onClick={() => setIsOpen(false)}>Internship</MobileNavLink>
                    <MobileNavLink to="/contact" icon={<Mail className="w-4 h-4" />} onClick={() => setIsOpen(false)}>Contact Us</MobileNavLink>

                    <div className="border-t border-gray-100 mt-4 pt-4 pb-2">
                        {isAuthenticated ? (
                            <>
                                <Link to="/profile" onClick={() => setIsOpen(false)} className="px-3 py-2 flex items-center gap-3 hover:bg-gray-50 rounded-md">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-base font-medium text-gray-800">{user?.name}</div>
                                        <div className="text-sm text-gray-500">{user?.email}</div>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left text-red-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium mt-2"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <div className="grid grid-cols-2 gap-3 px-2">
                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="text-center px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setIsOpen(false)}
                                    className="text-center px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav >
    );
};

const NavLink = ({ to, children, icon, active, scrolled, isHome }) => {
    // Style for active link (matches screenshot's purple background style)
    const activeStyle = active
        ? (scrolled || !isHome ? "bg-primary/10 text-primary" : "bg-white/20 text-white")
        : "";

    return (
        <Link
            to={to}
            className={`px-4 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeStyle} ${!active && (scrolled || !isHome ? 'text-gray-700 hover:text-primary hover:bg-gray-50' : 'text-gray-200 hover:text-white hover:bg-white/10')
                }`}
        >
            {icon}
            {children}
        </Link>
    );
};

const MobileNavLink = ({ to, onClick, children, icon }) => (
    <Link
        to={to}
        className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
        onClick={onClick}
    >
        {icon}
        {children}
    </Link>
);

export default Navbar;
