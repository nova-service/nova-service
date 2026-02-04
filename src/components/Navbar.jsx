import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 w-full z-[1000]">
            <div className="flex items-center justify-between px-4 md:px-8 py-4">
                {/* Logo Section */}
                <div className="flex items-center flex-shrink-0">
                    <Link to="/">
                        <img src={logo} alt="Nova Service" className="h-12 w-auto object-contain" />
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    {/* PC Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                        <Link to="/" className="hover:text-black transition-colors">{t('navbar.home')}</Link>
                        <Link to="/about" className="hover:text-black transition-colors">{t('navbar.about')}</Link>
                        <Link to="/services" className="hover:text-black transition-colors">{t('navbar.services')}</Link>
                    </div>

                    {/* Language Selector (Visible on all screens) */}
                    <div className="flex items-center bg-gray-100 rounded-full p-1 relative isolation-auto">
                        {/* Sliding Background Pill */}
                        <div
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out z-0 ${i18n.language === 'DE' ? 'translate-x-full left-1' : 'left-1'
                                }`}
                        />

                        <button
                            onClick={() => changeLanguage('EN')}
                            className={`relative z-10 w-10 py-1 rounded-full text-xs md:text-sm font-semibold transition-colors duration-200 ${i18n.language === 'EN' ? 'text-black' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage('DE')}
                            className={`relative z-10 w-10 py-1 rounded-full text-xs md:text-sm font-semibold transition-colors duration-200 ${i18n.language === 'DE' ? 'text-black' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            DE
                        </button>
                    </div>

                    {/* PC Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Arrow Icon Button */}
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>

                        {/* Contact Us Button */}
                        <Link to="/contact" className="bg-[#a3d937] hover:bg-[#92c530] text-black font-medium px-6 py-2.5 rounded-full transition-colors cursor-pointer">
                            {t('navbar.contact')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 transition-all duration-500 ease-in-out transform origin-top ${isMenuOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-4 invisible'
                    }`}
            >
                <div className="flex flex-col px-4 py-4 space-y-4">
                    <Link
                        to="/"
                        className="text-gray-600 font-medium hover:text-black hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t('navbar.home')}
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-600 font-medium hover:text-black hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t('navbar.about')}
                    </Link>
                    <Link
                        to="/services"
                        className="text-gray-600 font-medium hover:text-black hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t('navbar.services')}
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-[#a3d937] text-center text-black font-medium px-6 py-2.5 rounded-full hover:bg-[#92c530] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {t('navbar.contact')}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
