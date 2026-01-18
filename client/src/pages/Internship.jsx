import React, { useEffect, useState } from 'react';
import { CheckCircle, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Internship = () => {
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        document.title = "Internship Domains | BrightLearn";
    }, []);

    const services = [
        {
            title: "Web Development",
            subtitle: "Full Stack Developer Intern",
            description: "Master frontend & backend with hands-on projects.",
            features: [
                "Learn HTML, CSS, JavaScript fundamentals",
                "Build dynamic UIs with React.js",
                "Work with Node.js & Express backend",
                "Integrate REST APIs and databases",
                "Hands-on real-world projects",
                "Version control with Git/GitHub",
                "Duration: 1 month"
            ],
            imageGradient: "from-blue-600 to-purple-600"
        },
        {
            title: "CyberSecurity",
            subtitle: "Cybersecurity Intern",
            description: "Understand ethical hacking & network security.",
            features: [
                "Basics of cybersecurity & threat modeling",
                "Hands-on with Kali Linux tools",
                "Penetration testing & vulnerability scanning",
                "Network security protocols",
                " Real-world security audits"
            ],
            imageGradient: "from-slate-800 to-blue-900"
        },
        {
            title: "Frontend Development",
            subtitle: "Frontend Developer Intern",
            description: "Design and build interactive user interfaces.",
            features: [
                "HTML, CSS, JavaScript deep dive",
                "Responsive web design with TailwindCSS",
                "Advanced React concepts (hooks, context)",
                "State management with Redux",
                "UI/UX best practices"
            ],
            imageGradient: "from-indigo-900 to-blue-800"
        },
        {
            title: "Python Programming",
            subtitle: "Python Developer Intern",
            description: "Master Python fundamentals and automation.",
            features: [
                'Python Syntax & Data Structures',
                'Object-Oriented Programming (OOP)',
                'Web Scraping & Automation',
                'Backend Logic Implementation',
                'Data Processing with Pandas'
            ],
            imageGradient: "from-yellow-500 to-blue-600"
        },
        {
            title: "Java Programming",
            subtitle: "Java Developer Intern",
            description: "Deep dive into enterprise application development.",
            features: [
                'Core Java & OOP Concepts',
                'Spring Boot Framework',
                'Database Connectivity (JDBC/Hibernate)',
                'Building Scalable Systems',
                'RESTful API Development'
            ],
            imageGradient: "from-red-500 to-orange-600"
        },
        {
            title: "UI/UX Design",
            subtitle: "UI/UX Designer Intern",
            description: "Learn to design intuitive user experiences.",
            features: [
                'Wireframing & Prototyping',
                'User Research & Personas',
                'Figma & Adobe XD Mastery',
                'Design Systems & Style Guides',
                'Usability Testing'
            ],
            imageGradient: "from-pink-500 to-rose-500"
        },
        {
            title: "Artificial Intelligence",
            subtitle: "AI Research Intern",
            description: "Explore neural networks and natural language processing.",
            features: [
                'Intro to Neural Networks',
                'Natural Language Processing (NLP)',
                'TensorFlow & PyTorch Basics',
                'Model Training & Evaluation',
                'AI Ethics & Future Trends'
            ],
            imageGradient: "from-emerald-500 to-teal-600"
        },
        {
            title: "Android App Development",
            subtitle: "Android Developer Intern",
            description: "Build mobile apps for global audiences.",
            features: [
                'Kotlin Programming Language',
                'Android Studio Mastery',
                'Material Design Principles',
                'API Integration in Mobile',
                'Play Store Publishing'
            ],
            imageGradient: "from-green-500 to-emerald-600"
        },
        {
            title: "Data Science",
            subtitle: "Data Science Intern",
            description: "Unlock insights from complex data sets.",
            features: [
                'Data Cleaning & Preprocessing',
                'Exploratory Data Analysis',
                'Visualization with Matplotlib/Seaborn',
                'Statistical Modeling',
                'Intro to Machine Learning'
            ],
            imageGradient: "from-purple-600 to-pink-600"
        },
        {
            title: "Machine Learning",
            subtitle: "ML Engineer Intern",
            description: "Teach computers to learn from data.",
            features: [
                'Supervised & Unsupervised Learning',
                'Scikit-learn Library',
                'Feature Engineering',
                'Model Deployment',
                'Real-world ML Projects'
            ],
            imageGradient: "from-cyan-600 to-blue-700"
        }
    ];

    const openModal = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="font-sans pt-16">
            <PageHeader
                title="Internship Domains"
                subtitle="Explore our diverse range of virtual internship programs designed to kickstart your career."
            />

            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                                {/* Banner Image Placeholder */}
                                <div className={`h-40 w-full bg-gradient-to-r ${service.imageGradient} flex items-center justify-center p-6 relative overflow-hidden group`}>
                                    {/* Abstract decorative circles */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 blur-xl group-hover:bg-black/20 transition-all duration-500"></div>

                                    <h3 className="text-2xl font-bold text-white relative z-10 text-center drop-shadow-md">{service.title}</h3>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>

                                    <p className="text-gray-600 mb-6 text-sm flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2 mb-8">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-start text-gray-700 text-sm">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <button
                                            onClick={() => openModal(service)}
                                            className="flex-1 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
                                        >
                                            Learn More
                                        </button>
                                        <Link
                                            to="/apply"
                                            state={{ domain: service.title }}
                                            className="flex-1 py-2.5 rounded-full bg-[#8b5cf6] text-white font-medium hover:bg-[#7c3aed] transition-colors text-center text-sm shadow-md hover:shadow-lg"
                                        >
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden transform transition-all animate-fadeInUp">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <p className="text-gray-500 mb-6 text-lg">{selectedService.subtitle}</p>

                            <div className="space-y-4 mb-8">
                                {selectedService.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start text-gray-700">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                        </div>
                                        <span className="text-base leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end gap-4">
                                <Link
                                    to="/apply"
                                    state={{ domain: selectedService.title }}
                                    className="bg-[#8b5cf6] text-white px-8 py-3 rounded-full font-bold hover:bg-[#7c3aed] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Apply now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Internship;
