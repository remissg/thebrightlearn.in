import React from 'react';
import PageHeader from '../components/PageHeader';

const About = () => {
    return (
        <div className="font-sans pt-16">
            <PageHeader
                title="About Us"
                subtitle="We are a team of passionate developers, designers, and strategists dedicated to your success."
            />

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-dark mb-6 relative inline-block">
                                Who We Are
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-full"></span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                BrightLearn.in is a premier IT solutions provider based in Pune, India. We specialize in delivering high-quality, cost-effective services that help businesses transform their digital presence.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our mission is to provide innovative solutions that empower our clients to achieve their business goals. With a focus on excellence and customer satisfaction, we strive to be your trusted technology partner.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-4xl text-primary mb-1">5+</h4>
                                    <p className="text-gray-600 font-medium">Years Experience</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-4xl text-secondary mb-1">100+</h4>
                                    <p className="text-gray-600 font-medium">Projects Delivered</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 relative">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-dots-pattern opacity-20"></div>
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                    alt="Team collaboration"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20"></div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-xs hidden lg:block">
                                <p className="text-sm font-semibold text-gray-800">"Great things in business are never done by one person."</p>
                                <p className="text-xs text-primary mt-2 font-bold">- Steve Jobs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
