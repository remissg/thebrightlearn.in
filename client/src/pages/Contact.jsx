import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us | BrightLearn";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We will contact you soon.");
        // TODO: Integrate with backend API
    };

    return (
        <div className="font-sans pt-16">
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Get in touch with us for any queries."
            />

            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:-translate-y-1">
                                <h3 className="text-2xl font-bold text-dark mb-6 border-l-4 border-secondary pl-4">Get In Touch</h3>
                                <div className="space-y-6">
                                    <ContactItem
                                        icon={<Phone className="h-6 w-6 text-white" />}
                                        title="Phone"
                                        content="+91 12345 67890"
                                        sub="Mon-Fri 9am to 6pm"
                                    />
                                    <ContactItem
                                        icon={<Mail className="h-6 w-6 text-white" />}
                                        title="Email"
                                        content="info@brightlearn.in"
                                        sub="Online Support"
                                    />
                                    <ContactItem
                                        icon={<MapPin className="h-6 w-6 text-white" />}
                                        title="Location"
                                        content="Pune, Maharashtra, India"
                                        sub="Visit us at our office"
                                    />
                                </div>
                            </div>

                            <div className="bg-gray-200 rounded-2xl h-64 overflow-hidden shadow-inner flex items-center justify-center text-gray-500">
                                <span className="flex items-center gap-2"><MapPin className="h-5 w-5" /> Google Map Coming Soon</span>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                            <h3 className="text-2xl font-bold text-dark mb-6">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91..." />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transform transition-all hover:-translate-y-1">
                                        Send Message <Send className="h-5 w-5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactItem = ({ icon, title, content, sub }) => (
    <div className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors">
        <div className="flex-shrink-0 bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-md">
            {icon}
        </div>
        <div className="ml-4">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
            <p className="text-lg font-semibold text-gray-900">{content}</p>
            {sub && <p className="text-sm text-gray-400">{sub}</p>}
        </div>
    </div>
)

export default Contact;
