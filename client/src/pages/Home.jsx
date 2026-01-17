import React, { useEffect } from 'react';
import { ArrowRight, Code, Globe, Search, Smartphone, CheckCircle, BarChart, Server, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Custom Arrows for Slider (Updated to match screenshot style)
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
                                    We help to solve <br />
                                    <span className="text-yellow-400">Business Problems</span>
                                </h1>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Strategic solutions tailored to overcome your biggest challenges and drive sustainable growth.
                                </p>
                                <Link to="/contact" className="bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                                    Get Quotes <ArrowRight className="ml-2 h-5 w-5" />
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
                                    Don't Be The Same, <br />
                                    <span className="text-green-300">Be Better.</span>
                                </h1>
                                <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                                    Innovate your workflow and stay ahead of the curve with our cutting-edge technologies.
                                </p>
                                <Link to="/services" className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
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
                                    Find Products for <br />
                                    <span className="text-pink-300">Your Customers</span>
                                </h1>
                                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                    Deliver exactly what your market needs with our customer-centric development approach.
                                </p>
                                <Link to="/contact" className="bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </section>
                    </div>
                </Slider>
            </div>

            {/* Services Carousel Section */}
            <section className="py-12 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block relative">
                            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 z-10 relative">
                                Our <span className="text-primary">Services</span>
                            </h2>
                            <div className="h-3 w-full bg-yellow-200 absolute bottom-1 left-0 -z-0 opacity-60"></div>
                        </div>
                        <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-4">
                            We provide a comprehensive range of digital services to help high-growth companies scale.
                        </p>
                    </div>

                    <div className="px-4 md:px-8">
                        <Slider {...serviceSettings}>
                            <div className="px-3 py-4 h-full">
                                <FeatureCard
                                    icon={<BarChart strokeWidth={1} className="h-12 w-12 text-primary" />}
                                    title="IT Consulting"
                                    description="Our consultants catch potential problems that are lurking in your systems and processes, stopping them before they harm your company."
                                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                                />
                            </div>
                            <div className="px-3 py-4 h-full">
                                <FeatureCard
                                    icon={<Code strokeWidth={1} className="h-12 w-12 text-primary" />}
                                    title="Software Development"
                                    description="Our experts develop cutting-edge and rich software applications which complement your thoughts and demand."
                                    image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                />
                            </div>
                            <div className="px-3 py-4 h-full">
                                <FeatureCard
                                    icon={<Globe strokeWidth={1} className="h-12 w-12 text-primary" />}
                                    title="Digital Marketing"
                                    description="Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet and any other digital medium."
                                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                                />
                            </div>
                            <div className="px-3 py-4 h-full">
                                <FeatureCard
                                    icon={<Server strokeWidth={1} className="h-12 w-12 text-primary" />}
                                    title="Cloud Infrastructure"
                                    description="Cloud computing gives you the ability to transfer servers, storage, apps, and data into secure, offsite cloud servers that can be accessed via the internet."
                                    image="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                                />
                            </div>
                            <div className="px-3 py-4 h-full">
                                <FeatureCard
                                    icon={<Smartphone strokeWidth={1} className="h-12 w-12 text-primary" />}
                                    title="Mobile Solutions"
                                    description="We create seamless mobile experiences that engage users and drive business growth across all devices."
                                    image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                                />
                            </div>
                            <div className="px-3 py-4 h-full">
                                <FeatureCard
                                    icon={<Search strokeWidth={1} className="h-12 w-12 text-primary" />}
                                    title="SEO Optimization"
                                    description="Improve your online visibility and drive organic traffic with our data-driven SEO strategies and content optimization."
                                    image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
                                />
                            </div>
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
                                The company was founded to focus on new innovations and ideas.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Within short time span the business has grown so much, they recruited friends and business guru's to help them and manage their direction. The business has expanded to reach markets that were not even thought of when the company first started.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="flex items-center text-xl font-bold text-dark mb-3">
                                        <span className="text-orange-500 mr-2">»</span> Our Mission
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        "Our mission is to utilize our expertise in composite products to provide the absolute best value as measured by quality, cost, delivery and innovation."
                                    </p>
                                </div>
                                <div>
                                    <h4 className="flex items-center text-xl font-bold text-dark mb-3">
                                        <span className="text-orange-500 mr-2">»</span> Our Vision
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        "Our vision is to provide quality services with cost effective solutions and IT services over the global market, by combining technology skills."
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
                            To review means to look back over something for evaluation or memory.
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-400 italic">
                            "It's always a joy to hear that the work I do has positively impacted our clients and they are happy to share their experience."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-700 pt-12">
                        <StatItem number="250+" label="Team Members" />
                        <StatItem number="750+" label="Clients" />
                        <StatItem number="12+" label="Years of Experience" />
                        <StatItem number="3500+" label="Completed Projects" />
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
                                    Why Working with <br /><span className="text-dark">BrightLearn Services?</span>
                                </h2>
                                <div className="h-3 w-1/3 bg-red-200 absolute bottom-1 left-0 -z-0 opacity-80"></div>
                            </div>
                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-lg text-gray-700 font-medium">Our Business Knowledge, Your Business Growth.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-lg text-gray-700 font-medium">Honest Relationship, Commitment and Trust this is the Foundation of our growth.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-lg text-gray-700 font-medium">Our Focus is Our Client's Success.</span>
                                </li>
                            </ul>
                        </div>
                        {/* Testimonial/Client Box Placeholder */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg relative">
                            <div className="text-6xl text-primary opacity-20 absolute top-4 left-6">"</div>
                            <p className="text-gray-600 italic text-lg mb-6 relative z-10 pt-6">
                                "BrightLearn has been an absolute game-changer for our business. Their technical expertise coupled with their deep understanding of our market needs resulted in a product that exceeded our expectations."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-bold text-dark">John Doe</h4>
                                    <p className="text-sm text-gray-500">CEO, TechCorp</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Don't misread here we have random & interesting facts.
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                BrightLearn Services founded in 2013 and focused on Information Technology and Business Process Services. We provide a high quality and low cost Business Services ideally suited in to FinTech applications.
                            </p>
                        </div>
                        {/* Circular Stats (Simplified visual representation) */}
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="w-40 h-40 rounded-full border-4 border-gray-700 flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm">
                                <span className="text-3xl font-bold text-white">250+</span>
                                <span className="text-xs text-gray-300 uppercase mt-1">Team Members</span>
                            </div>
                            <div className="w-48 h-48 rounded-full border-4 border-gray-600 flex flex-col items-center justify-center bg-gray-700/50 backdrop-blur-sm -mt-8">
                                <span className="text-4xl font-bold text-white">750+</span>
                                <span className="text-xs text-gray-300 uppercase mt-1">Clients</span>
                            </div>
                            <div className="w-32 h-32 rounded-full border-4 border-gray-700 flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm">
                                <span className="text-2xl font-bold text-white">12+</span>
                                <span className="text-xs text-gray-300 uppercase mt-1">Years Exp</span>
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
        </div>
    );
};

const FeatureCard = ({ icon, title, description, image }) => (
    <div className="group relative h-[450px] w-full rounded-xl shadow-lg border-t-4 border-primary overflow-hidden bg-white">
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
                <h3 className="text-3xl font-bold text-white mb-8">{title}</h3>
                <div className="bg-white rounded-full p-4 hover:bg-primary hover:text-white transition-colors duration-300 shadow-xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
            </div>
        </div>

        {/* Layer 2: Default White Content (Slides down/away on Hover) */}
        <div className="absolute inset-0 z-10 bg-white p-8 flex flex-col items-center text-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            <div className="mt-8 mb-6 transform transition-transform duration-300">
                {/* Outline icon style */}
                <div className="p-3 rounded-lg border-2 border-orange-100 text-orange-500">
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-bold text-black mb-3">{title}</h3>

            {/* Small separator line */}
            <div className="h-1 w-8 bg-orange-400 mb-6 rounded-full"></div>

            <p className="text-gray-500 text-sm leading-relaxed">
                {description}
            </p>

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
