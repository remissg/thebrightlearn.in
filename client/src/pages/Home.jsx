import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Globe, Search, Smartphone, CheckCircle, BarChart, Server, ChevronLeft, ChevronRight, Shield, Layout, Terminal, Cpu, Database, PenTool, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// ... (keep Arrows code same)
// Service Arrows (Outside)
const ServiceNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:!content-none !right-[-10px] md:!right-[-20px] z-10 !w-12 !h-12 !flex !items-center !justify-center !bg-white !rounded-full !shadow-lg !text-gray-600 hover:!text-primary transition-all`}
            style={{ ...style, display: "flex", opacity: 1 }}
            onClick={onClick}
        >
            <ChevronRight className="w-6 h-6 text-gray-800" />
        </div>
    );
}

const ServicePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:!content-none !left-[-10px] md:!left-[-20px] z-10 !w-12 !h-12 !flex !items-center !justify-center !bg-white !rounded-full !shadow-lg !text-gray-600 hover:!text-primary transition-all`}
            style={{ ...style, display: "flex", opacity: 1 }}
            onClick={onClick}
        >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
        </div>
    );
}

// Hero Arrows (Inside)
const HeroNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:!content-none !right-5 z-10 !w-12 !h-12 !flex !items-center !justify-center !bg-white/20 hover:!bg-white/40 !backdrop-blur-md !rounded-full !text-white transition-all`}
            style={{ ...style, display: "flex", opacity: 1 }}
            onClick={onClick}
        >
            <ChevronRight className="w-6 h-6" />
        </div>
    );
}

const HeroPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:!content-none !left-5 z-10 !w-12 !h-12 !flex !items-center !justify-center !bg-white/20 hover:!bg-white/40 !backdrop-blur-md !rounded-full !text-white transition-all`}
            style={{ ...style, display: "flex", opacity: 1 }}
            onClick={onClick}
        >
            <ChevronLeft className="w-6 h-6" />
        </div>
    );
}

const Home = () => {
    const [selectedDomain, setSelectedDomain] = useState(null);

    const openModal = (domain) => {
        setSelectedDomain(domain);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedDomain(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        document.title = "Home | BrightLearn";
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        nextArrow: <HeroNextArrow />,
        prevArrow: <HeroPrevArrow />,

        // Customizing dots/pagination if desired
        appendDots: dots => (
            <div
                style={{
                    bottom: "30px"
                }}
            >
                <ul className="slick-dots-custom"> {dots} </ul>
            </div>
        )
    };

    const serviceSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Auto scroll
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        nextArrow: <ServiceNextArrow />,
        prevArrow: <ServicePrevArrow />,
        className: "service-slider px-4", // Add padding for shadow/arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const domains = [
        {
            title: "Web Development",
            subtitle: "Full Stack Developer Intern",
            description: "Master frontend & backend with hands-on projects.",
            features: [
                "Learn HTML, CSS, JavaScript fundamentals",
                "Build dynamic UIs with React.js",
                "Work with Node.js & Express backend"
            ],
            icon: <Globe strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            title: "CyberSecurity",
            subtitle: "Cybersecurity Intern",
            description: "Understand ethical hacking & network security.",
            features: [
                "Basics of cybersecurity & threat modeling",
                "Hands-on with Kali Linux tools",
                "Penetration testing & vulnerability scanning"
            ],
            icon: <Shield strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        },
        {
            title: "Frontend Development",
            subtitle: "Frontend Developer Intern",
            description: "Design and build interactive user interfaces.",
            features: [
                "HTML, CSS, JavaScript deep dive",
                "Responsive web design with TailwindCSS",
                "Advanced React concepts (hooks)"
            ],
            icon: <Layout strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
        },
        {
            title: "Python Programming",
            subtitle: "Python Developer Intern",
            description: "Master Python fundamentals and automation.",
            features: [
                "Python Syntax & Data Structures",
                "Object-Oriented Programming (OOP)",
                "Web Scraping & Automation"
            ],
            icon: <Terminal strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1526379095030-4637dd785328"
        },
        {
            title: "Java Programming",
            subtitle: "Java Developer Intern",
            description: "Deep dive into enterprise application development.",
            features: [
                "Core Java & OOP Concepts",
                "Spring Boot Framework",
                "Database Connectivity (JDBC)"
            ],
            icon: <Code strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
        },
        {
            title: "UI/UX Design",
            subtitle: "UI/UX Designer Intern",
            description: "Learn to design intuitive user experiences.",
            features: [
                "Wireframing & Prototyping",
                "User Research & Personas",
                "Figma & Adobe XD Mastery"
            ],
            icon: <PenTool strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48"
        },
        {
            title: "Artificial Intelligence",
            subtitle: "AI Research Intern",
            description: "Explore neural networks and natural language processing.",
            features: [
                "Intro to Neural Networks",
                "Natural Language Processing (NLP)",
                "TensorFlow & PyTorch Basics"
            ],
            icon: <Cpu strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b"
        },
        {
            title: "Android App Development",
            subtitle: "Android Developer Intern",
            description: "Build mobile apps for global audiences.",
            features: [
                "Kotlin Programming Language",
                "Android Studio Mastery",
                "Material Design Principles"
            ],
            icon: <Smartphone strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
        },
        {
            title: "Data Science",
            subtitle: "Data Science Intern",
            description: "Unlock insights from complex data sets.",
            features: [
                "Data Cleaning & Preprocessing",
                "Exploratory Data Analysis",
                "Visualization with Matplotlib"
            ],
            icon: <BarChart strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        },
        {
            title: "Machine Learning",
            subtitle: "ML Engineer Intern",
            description: "Teach computers to learn from data.",
            features: [
                "Supervised & Unsupervised Learning",
                "Scikit-learn Library",
                "Feature Engineering"
            ],
            icon: <Cpu strokeWidth={1} className="h-12 w-12 text-primary" />,
            image: "https://images.unsplash.com/photo-1527474305487-20709d816f28"
        }
    ];

    return (
        <div className="animate-fade-in font-sans">
            {/* Hero Section with Slider */}
            <div className="relative overflow-hidden mb-0">
                <Slider {...settings}>
                    {/* Slide 1: Business Focus */}
                    <div className="outline-none focus:outline-none">
                        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 lg:py-48 overflow-hidden outline-none">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-up">
                                    Launch Your Career with <br />
                                    <span className="text-yellow-400">Virtual Internships</span>
                                </h1>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Gain real-world experience tailored to your academic background and career goals.
                                </p>
                                <Link to="/internship" className="bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                                    Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Slide 2: Innovation Focus ("Don't Be The Same") */}
                    <div className="outline-none focus:outline-none">
                        <section className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-32 lg:py-48 overflow-hidden outline-none">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-up">
                                    Don't Just Learn, <br />
                                    <span className="text-green-300">Experience It.</span>
                                </h1>
                                <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                                    Work on live projects and bridge the gap between classroom theory and industry demands.
                                </p>
                                <Link to="/internship" className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                                    View Domains <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Slide 3: Customer/Product Focus */}
                    <div className="outline-none focus:outline-none">
                        <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-32 lg:py-48 overflow-hidden outline-none">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-up">
                                    Prepare for <br />
                                    <span className="text-pink-300">Your Future Role</span>
                                </h1>
                                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                    Get certified and job-ready with our comprehensive virtual internship programs.
                                </p>
                                <Link to="/internship" className="bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                                    Start Journey <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </section>
                    </div>
                </Slider>
            </div>

            {/* Services Carousel Section */}
            <section className="py-12 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-block relative">
                            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 z-10 relative">
                                Internship <span className="text-primary">Domains</span>
                            </h2>
                            <div className="h-3 w-full bg-yellow-200 absolute bottom-1 left-0 -z-0 opacity-60"></div>
                        </div>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-4">
                            Explore our diverse range of virtual internship programs designed to kickstart your career.
                        </p>
                    </div>

                    <div className="px-4 md:px-8">
                        <Slider {...serviceSettings}>
                            {domains.map((domain, index) => (
                                <div key={index} className="px-3 py-4 h-full">
                                    <FeatureCard
                                        icon={domain.icon}
                                        title={domain.title}
                                        subtitle={domain.subtitle}
                                        description={domain.description}
                                        features={domain.features}
                                        image={domain.image}
                                        onOpen={() => openModal(domain)}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* About / Welcome Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block relative mb-6">
                                <h2 className="text-3xl md:text-5xl font-bold text-dark z-10 relative">
                                    Welcome to <span className="text-dark">BrightLearn</span>
                                </h2>
                                <div className="h-3 w-1/2 bg-orange-200 absolute bottom-1 left-0 -z-0 opacity-80"></div>
                            </div>

                            <p className="text-gray-600 mb-6 italic font-medium">
                                Bridging the gap between academic learning and industry requirements.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                BrightLearn offers a unique platform for students to gain hands-on experience through virtual internships. We believe that practical application is key to mastering new skills. Our programs are designed to simulate real-world work environments, preparing you for your future career.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="flex items-center text-xl font-bold text-dark mb-3">
                                        <span className="text-orange-500 mr-2">»</span> Our Mission
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        "To empower students with the practical skills and industry exposure needed to succeed in the competitive modern workforce."
                                    </p>
                                </div>
                                <div>
                                    <h4 className="flex items-center text-xl font-bold text-dark mb-3">
                                        <span className="text-orange-500 mr-2">»</span> Our Vision
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        "To become the leading platform for virtual experiential learning, making quality internships accessible to students everywhere."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-dots-pattern opacity-20"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <BarChart size={24} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-dark">10+</p>
                                        <p className="text-sm text-gray-500">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Pattern (Matches reference roughly but with our styles) */}
            <section className="bg-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                {/* Optional: Add the text overlay "To review means to look back..." if strictly needed, skipping for cleaner look closely matching the counters part first */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Empowering the next generation of tech talent.
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-400 italic">
                            "We take pride in watching our interns grow into confident professionals who are ready to take on the world."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-700 pt-12">
                        <StatItem number="2500+" label="Students Trained" />
                        <StatItem number="50+" label="Partner Colleges" />
                        <StatItem number="12+" label="Domains Offered" />
                        <StatItem number="1500+" label="Internships Completed" />
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Testimonials (Simplified to match 'Why Working with Uptricks' + Testimonials style) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <div className="inline-block relative mb-6">
                                <h2 className="text-3xl md:text-5xl font-bold text-dark z-10 relative">
                                    Why Intern with <br /><span className="text-dark">BrightLearn?</span>
                                </h2>
                                <div className="h-3 w-1/3 bg-red-200 absolute bottom-1 left-0 -z-0 opacity-80"></div>
                            </div>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-lg text-gray-700 font-medium">Live Project Exposure & Hands-on Learning.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-lg text-gray-700 font-medium">Mentorship from Industry Experts & Professionals.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-lg text-gray-700 font-medium">Verifiable Completion Certificate & Job Support.</span>
                                </li>
                            </ul>
                        </div>
                        {/* Testimonial/Client Box Placeholder */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg relative">
                            <div className="text-6xl text-primary opacity-20 absolute top-4 left-6">"</div>
                            <p className="text-gray-600 italic text-lg mb-6 relative z-10 pt-6">
                                "The internship at BrightLearn gave me the confidence to face technical interviews. Working on a real project with a team changed my perspective on software development."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-bold text-dark">Sarah Jenkins</h4>
                                    <p className="text-sm text-gray-500">Former Intern, Web Dev</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Careers CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0">
                            <div className="flex items-center mb-2">
                                <div className="h-1 w-8 bg-orange-500 mr-3"></div>
                                <span className="text-gray-500 font-medium uppercase tracking-wider">Career</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-dark max-w-2xl">
                                From startups to Fortune 500s, WayUp offers the best internships and jobs.
                            </h2>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-gray-600 mb-6">Easily apply to multiple jobs with one click!</p>
                            <Link to="/careers" className="inline-block bg-black text-white px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-colors shadow-lg">
                                Check Available Vacancies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Random/Motivating Facts - Dark Section */}
            <section className="relative bg-dark text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="h-1 w-8 bg-orange-500 mr-3"></div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                                Empowering Future with <span className="text-primary">BrightLearn</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our platform connects students with real-world internship opportunities, bridging the gap between academic learning and industry requirements. We believe in learning by doing.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/internship" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg">
                                    Explore Internships
                                </Link>
                                <button onClick={() => alert("Certificate Verification System Coming Soon!")} className="bg-white border-2 border-primary text-primary hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-all shadow-md">
                                    My Certificate
                                </button>
                            </div>
                        </div>
                        {/* Circular Stats (Simplified visual representation) */}
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="w-40 h-40 rounded-full border-4 border-gray-700 flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm">
                                <span className="text-3xl font-bold text-white">2500+</span>
                                <span className="text-xs text-gray-300 uppercase mt-1">Learners</span>
                            </div>
                            <div className="w-48 h-48 rounded-full border-4 border-gray-600 flex flex-col items-center justify-center bg-gray-700/50 backdrop-blur-sm -mt-8">
                                <span className="text-4xl font-bold text-white">50+</span>
                                <span className="text-xs text-gray-300 uppercase mt-1">Partners</span>
                            </div>
                            <div className="w-32 h-32 rounded-full border-4 border-gray-700 flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm">
                                <span className="text-2xl font-bold text-white">100%</span>
                                <span className="text-xs text-gray-300 uppercase mt-1">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Callout Strip (Black) */}
            <section className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="h-1 w-8 bg-orange-500 mr-3"></div>
                            </div>
                            <h2 className="text-3xl font-bold mb-2">Get in touch for any kind of help and information</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gray-900 p-6 rounded-lg flex items-start space-x-4 border border-gray-800 hover:border-gray-700 transition-colors">
                                <div className="bg-gray-800 p-3 rounded-md text-white">i</div>
                                <div>
                                    <h4 className="font-bold mb-1">If need any info please contact us!</h4>
                                </div>
                            </div>
                            <div className="bg-gray-900 p-6 rounded-lg flex items-start space-x-4 border border-gray-800 hover:border-gray-700 transition-colors">
                                <div className="bg-gray-800 p-3 rounded-md text-white">@</div>
                                <div>
                                    <h4 className="font-bold mb-1">Mail us for information</h4>
                                    <p className="text-xs text-gray-400">info@brightlearn.in</p>
                                    <p className="text-xs text-gray-400">careers@brightlearn.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Logos */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - using text/icons for simplicity if no assets */}
                        <div className="text-2xl font-bold text-gray-400 m-4 flex items-center"><span className="text-4xl mr-2">jQuery</span></div>
                        <div className="text-2xl font-bold text-gray-400 m-4 flex items-center"><Smartphone className="mr-2" />Android</div>
                        <div className="text-2xl font-bold text-gray-400 m-4 flex items-center"><span className="text-4xl mr-2">HTML5</span></div>
                        <div className="text-2xl font-bold text-gray-400 m-4 flex items-center"><span className="text-4xl mr-2">CSS3</span></div>
                        <div className="text-4xl font-bold text-gray-400 m-4">B</div>
                        <div className="text-4xl font-bold text-gray-400 m-4">A</div>
                    </div>
                </div>
            </section>
            {/* Modal */}
            {selectedDomain && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden transform transition-all animate-fade-in-up">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-3xl font-bold text-gray-900">{selectedDomain.title}</h2>
                                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <p className="text-gray-500 mb-6 text-lg">{selectedDomain.subtitle}</p>

                            <div className="space-y-4 mb-8">
                                {selectedDomain.features && selectedDomain.features.map((feature, idx) => (
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
                                    state={{ domain: selectedDomain.title }}
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

const FeatureCard = ({ icon, title, subtitle, description, features, image, onOpen }) => (
    <div className="group relative h-[480px] w-full rounded-xl shadow-lg border-t-4 border-primary overflow-hidden bg-white">
        {/* Layer 1: Background Image & Hover Content (Revealed on Hover) */}
        <div className="absolute inset-0 z-0">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'})` }}
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Centered Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
                <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-200 mb-6 text-sm italic">{subtitle}</p>
                <div
                    onClick={onOpen}
                    className="bg-white rounded-full p-4 hover:bg-primary hover:text-white transition-colors duration-300 shadow-xl cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
            </div>
        </div>

        {/* Layer 2: Default White Content (Slides down/away on Hover) */}
        <div className="absolute inset-0 z-10 bg-white p-6 flex flex-col items-center text-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            <div className="mt-4 mb-4 transform transition-transform duration-300">
                {/* Outline icon style */}
                <div className="p-3 rounded-lg border-2 border-orange-100 text-orange-500">
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-black mb-1">{title}</h3>
            {subtitle && <p className="text-primary text-xs font-semibold mb-3 uppercase tracking-wide">{subtitle}</p>}

            {/* Small separator line */}
            <div className="h-1 w-8 bg-orange-400 mb-4 rounded-full"></div>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {description}
            </p>

            {/* Features Preview */}
            {features && features.length > 0 && (
                <div className="w-full text-left space-y-2 bg-gray-50 p-3 rounded-lg">
                    {features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                        </div>
                    ))}
                    {features.length > 2 && (
                        <p className="text-xs text-primary font-medium text-center mt-1">+ {features.length - 2} more</p>
                    )}
                </div>
            )}

            {/* Decorative watermark icon at bottom right inside the white card */}
            <div className="absolute -bottom-4 -right-4 opacity-5 transform rotate-[-15deg]">
                {icon && React.cloneElement(icon, { className: "h-32 w-32 text-primary" })}
            </div>
        </div>
    </div>
);

const StatItem = ({ number, label }) => (
    <div>
        <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{number}</div>
        <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{label}</div>
    </div>
);

export default Home;
