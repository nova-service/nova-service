import React from 'react';
import { useTranslation } from 'react-i18next';
import footerImg from '../assets/footer.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-black text-white py-12 sm:py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Socials & Lines */}
                <div className="flex items-center gap-4 sm:gap-8 mb-12 sm:mb-20">
                    <div className="flex-1 h-[1px] bg-gray-800"></div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-lime-400 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-black transition-all">
                            <svg width="20" height="20" sm:width="24" sm:height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-lime-400 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-black transition-all">
                            <svg width="20" height="20" sm:width="24" sm:height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex-1 h-[1px] bg-gray-800"></div>
                </div>

                {/* Main Text Content */}
                <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 sm:mb-4 gap-6 sm:gap-4 text-center sm:text-left">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">{t('footer.premier')}</h2>
                        <div className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-wider flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                            <span>{t('footer.copyright')}</span>
                            <span className="opacity-80">
                                {t('footer.design')}
                                <a href="https://leptotech.in/" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition-colors">
                                    {t('footer.designer')}
                                </a>
                            </span>
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tighter uppercase mb-24 sm:-mt-2 sm:mb-0 md:-mt-10 text-center">
                        {t('footer.cleaning')}
                    </h1>
                </div>

                {/* Footer Image with Z-Index */}
                <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-20 pointer-events-none">
                    <img
                        src={footerImg}
                        alt="Cleaning Tools"
                        className="w-full h-auto object-contain opacity-90"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
