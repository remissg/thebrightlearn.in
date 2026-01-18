import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, Upload, User, Mail, Phone, Book, Briefcase, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const InternshipApplication = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsapp: '',
        college: '',
        year: '',
        domain: '',
        resumeLink: '',
        referral: '',
        agreeToTerms: false
    });

    useEffect(() => {
        document.title = "Apply for Internship | BrightLearn";
        // Pre-fill domain if passed from Services page
        if (location.state?.domain) {
            setFormData(prev => ({ ...prev, domain: location.state.domain }));
        }
    }, [location]);

    const domains = [
        "Python Programming", "Front-End Development", "Java Programming", "UI/UX Design",
        "Web Development", "Artificial Intelligence (AI)", "Back-End Development",
        "Android App Development", "Data Science", "CyberSecurity", "Machine Learning"
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Application Submitted:", formData);

        // Mock API call
        alert(`Application Submitted Successfully for ${formData.domain}! We will contact you on WhatsApp.`);
        navigate('/');
    };

    return (
        <div className="font-sans pt-16">
            <PageHeader
                title="Internship Application"
                subtitle="Take the first step towards your dream career. Fill out the form below to apply."
            />

            <div className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-primary py-4 px-8">
                            <h3 className="text-xl text-white font-semibold flex items-center gap-2">
                                <Briefcase className="h-5 w-5" /> Application Form
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
                            {/* Personal Details */}
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <h4 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                                    <User className="h-5 w-5 text-secondary" /> Personal Details
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Academic Details */}
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <h4 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                                    <Book className="h-5 w-5 text-secondary" /> Academic Details
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">College / University Name *</label>
                                        <input
                                            type="text"
                                            name="college"
                                            required
                                            value={formData.college}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                            placeholder="Enter your college name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Year *</label>
                                        <select
                                            name="year"
                                            required
                                            value={formData.year}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        >
                                            <option value="">Select Year</option>
                                            <option value="1st Year">1st Year</option>
                                            <option value="2nd Year">2nd Year</option>
                                            <option value="3rd Year">3rd Year</option>
                                            <option value="4th Year">4th Year</option>
                                            <option value="Graduated">Graduated</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Internship Details */}
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <h4 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                                    <Briefcase className="h-5 w-5 text-secondary" /> Internship Selection
                                </h4>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Domain *</label>
                                        <select
                                            name="domain"
                                            required
                                            value={formData.domain}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        >
                                            <option value="">Choose an Internship Domain</option>
                                            {domains.map((d, i) => (
                                                <option key={i} value={d}>{d}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Resume / Portfolio Link (Google Drive/LinkedIn) *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="url"
                                                name="resumeLink"
                                                required
                                                value={formData.resumeLink}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                                placeholder="https://docs.google.com/..."
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">Please ensure the link is publicly accessible.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="agreeToTerms"
                                        name="agreeToTerms"
                                        type="checkbox"
                                        required
                                        checked={formData.agreeToTerms}
                                        onChange={handleChange}
                                        className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="agreeToTerms" className="font-medium text-gray-700">I agree to the Terms & Conditions</label>
                                    <p className="text-gray-500">By submitting this form, I confirm that the information provided is accurate and I agree to join the internship program.</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transform transition-all hover:-translate-y-1"
                            >
                                Submit Application <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternshipApplication;
