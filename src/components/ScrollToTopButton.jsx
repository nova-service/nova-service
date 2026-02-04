import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-8 left-8 z-[1000] transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="group relative flex items-center justify-center w-14 h-14 bg-white border-2 border-[#a3d937] text-black rounded-2xl shadow-xl hover:bg-[#a3d937] hover:text-white transition-all duration-300 transform active:scale-95"
                aria-label="Scroll to top"
            >
                {/* Modern Arrow Icon */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:-translate-y-1 transition-transform duration-300"
                >
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    BACK TO TOP
                </span>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
