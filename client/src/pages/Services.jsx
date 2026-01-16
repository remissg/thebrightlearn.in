import React from 'react';
import { CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'We build responsive, SEO-friendly, and high-performance websites using the latest technologies like React, Node.js, and more.',
            features: ['Custom Design', 'E-commerce Solutions', 'CMS Development', 'Responsive Layouts']
        },
        {
            title: 'Digital Marketing',
            description: 'Accelerate your business growth with our data-driven digital marketing strategies tailored to your target audience.',
            features: ['SEO Service', 'Social Media Marketing', 'PPC Advertising', 'Content Marketing']
        },
        {
            title: 'Mobile App Development',
            description: 'Create seamless mobile experiences with our native and cross-platform mobile application development services.',
            features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Maintenance']
        },
        {
            title: 'IT Consulting',
            description: 'Get expert advice on how to align your information technology strategy with your business goals.',
            features: ['Tech Roadmap', 'System Architecture', 'Security Audits', 'Cloud Migration']
        }
    ];

    return (
        <div className="font-sans pt-16">
            <PageHeader
                title="Our Services"
                subtitle="Comprehensive IT solutions designed to help your business grow and succeed in the digital era."
            />

            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary">
                                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                                    <h4 className="font-semibold text-primary mb-4 flex items-center">Key Features</h4>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700">
                                                <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
