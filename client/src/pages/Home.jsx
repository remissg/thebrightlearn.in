import React from 'react';
import { ArrowRight, Code, Globe, Search, Smartphone, CheckCircle, BarChart, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in font-sans">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-blue-600 text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-800 bg-opacity-50 text-blue-100 text-sm font-semibold mb-6 backdrop-blur-sm border border-blue-700">
                            Transforming Business Through Technology
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
                            Innovate, <span className="text-secondary">Accelerate</span>, <br className="hidden md:block" /> & Dominate Your Market
                        </h1>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We deliver enterprise-grade IT solutions and data-driven digital marketing strategies to propel your business forward.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link to="/contact" className="bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center justify-center">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Features/Services Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Why Choose Us</h2>
                        <p className="text-3xl md:text-5xl font-bold text-dark mb-6">
                            Empowering Your Digital Journey
                        </p>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                            We combine technical expertise with creative innovation to deliver solutions that drive real business results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Globe className="h-10 w-10 text-white" />}
                            title="Web Development"
                            description="Responsive, scalable, and secure web applications built with modern frameworks like React and Node.js."
                            color="bg-blue-500"
                        />
                        <FeatureCard
                            icon={<BarChart className="h-10 w-10 text-white" />}
                            title="Digital Marketing"
                            description="Data-driven SEO, PPC, and social media campaigns to maximize your ROI and online visibility."
                            color="bg-green-500"
                        />
                        <FeatureCard
                            icon={<Smartphone className="h-10 w-10 text-white" />}
                            title="App Development"
                            description="Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android."
                            color="bg-purple-500"
                        />
                        <FeatureCard
                            icon={<Server className="h-10 w-10 text-white" />}
                            title="Cloud Solutions"
                            description="Secure cloud infrastructure setup and management to ensure high availability and scalability."
                            color="bg-orange-500"
                        />
                        <FeatureCard
                            icon={<Code className="h-10 w-10 text-white" />}
                            title="Custom Software"
                            description="Tailored software solutions designed to streamline your specific business processes."
                            color="bg-red-500"
                        />
                        <FeatureCard
                            icon={<Search className="h-10 w-10 text-white" />}
                            title="SEO Optimization"
                            description="Advanced SEO strategies to dominate search engine rankings and attract organic traffic."
                            color="bg-teal-500"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-10 pattern-dots"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <StatItem number="500+" label="Projects Completed" />
                        <StatItem number="50+" label="Team Members" />
                        <StatItem number="98%" label="Client Retention" />
                        <StatItem number="24/7" label="Support Available" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl shadow-2xl overflow-hidden p-10 md:p-16 text-center text-white relative">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl"></div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to scale your business?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
                            Join hundreds of successful companies who trust BrightLearn for their IT and marketing needs.
                        </p>
                        <Link to="/contact" className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg relative z-10">
                            Request a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description, color }) => (
    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const StatItem = ({ number, label }) => (
    <div>
        <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{number}</div>
        <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{label}</div>
    </div>
);

export default Home;
