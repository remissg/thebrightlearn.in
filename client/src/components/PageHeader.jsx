import React from 'react';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="bg-gradient-to-r from-primary-dark to-primary py-20 text-center text-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                {subtitle && <p className="text-xl text-blue-100 max-w-2xl mx-auto">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
