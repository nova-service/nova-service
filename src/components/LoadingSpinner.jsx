import React from 'react';

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
        <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-lime-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-lime-500 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-4 bg-lime-50 rounded-lg animate-pulse flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a3d937" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
            </div>
        </div>
    </div>
);

export default LoadingSpinner;
