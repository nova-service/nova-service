import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import BookingModal from '../components/BookingModal';
import CustomCalendar from '../components/CustomCalendar';

const CleaningGame = lazy(() => import('../components/CleaningGame'));

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import heroBanner from '../assets/hero-banner.png';
import commercialImg from '../assets/commercial_cleaning_1768327306633.png';
import residentialImg from '../assets/residential_cleaning_1768327291773.png';
import work1 from '../assets/work1.png';
import cleaningVideo from '../assets/nova-watermark.mp4';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [viewDate, setViewDate] = useState(new Date());
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleBookNow = () => {
        setIsBookingModalOpen(true);
    };

    const calendarRef = useRef(null);
    const serviceRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
            if (serviceRef.current && !serviceRef.current.contains(event.target)) {
                setShowServiceDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    {/* Star Component */ }
    const Stars = () => (
        <div className="flex text-amber-400 gap-1">
            {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                <path d="M12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-6 mt-10">

            {/* ================= HERO WRAPPER ================= */}
            <div className="relative flex flex-col items-start">
                <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight md:pl-40">
                    {t('home.title')}{' '}
                    <span className="relative inline-block italic font-light">
                        {t('home.titleHighlight')}
                        <span className="absolute bottom-2 left-0 w-full h-3 z-10 "></span>
                    </span>
                    <br />
                    {t('home.titleEnd')}
                </h1>

                {/* =================================================
        IMAGE + REVIEW — BELOW TITLE
    ================================================= */}
                <div className="relative md:mt-1 mt-3 ml-4 md:pl-40 flex flex-col md:flex-row items-center justify-between w-full">

                    {/* Spacer for Center Alignment (Desktop Only) */}
                    <div className="hidden md:block flex-1"></div>

                    {/* IMAGE (Center) */}
                    <div className="flex justify-center w-full md:w-auto">
                        <img
                            src={heroBanner}
                            alt="Cleaning Supplies"
                            className="w-auto max-h-[420px] object-contain"
                        />
                    </div>

                    {/* REVIEW CARD (Right - Desktop Only) */}
                    <div className="hidden md:flex flex-1 justify-end mb-50 md:mr-7">
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-[280px]">
                            <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">
                                {t('home.reviewText')}
                            </p>

                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold">{t('home.rating')}</span>
                                <Stars />
                            </div>

                            <p className="text-[11px] text-gray-400 mt-2">
                                {t('home.totalReviews')}
                            </p>
                        </div>
                    </div>

                    {/* =================================================
          MOBILE FLOATING REVIEW (UNCHANGED)
      ================================================= */}
                    <div className="md:hidden absolute -top-4 -right-1 bg-white p-4 rounded-xl shadow-xl z-20 max-w-[200px]">
                        <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">
                            {t('home.reviewText')}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">{t('home.rating')}</span>
                            <Stars />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1">
                            {t('home.totalReviews')}
                        </p>
                    </div>

                </div>
            </div>

            {/* ================= CTA SECTION ================= */}
            {/* MOBILE VIEW (Unchanged) */}
            <div className="md:hidden mt-12 flex flex-col items-start gap-6">
                <div>
                    <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-2">
                        {t('home.cta')}
                    </p>
                    <div className="h-1 w-24 bg-[#ffd700]"></div>
                </div>

                <div
                    onClick={handleBookNow}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <button className="w-12 h-12 rounded-full bg-[#a3d937] group-hover:bg-[#92c530] flex items-center justify-center transition-colors">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    <span className="text-black font-semibold text-lg group-hover:text-lime-600 transition-colors">
                        {t('home.minimal')}
                    </span>
                </div>
            </div>

            {/* DESKTOP VIEW (New Design) */}
            <div className="hidden md:flex mt-24 max-w-6xl mx-auto w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm items-center justify-between">
                {/* Text */}
                <h2 className="text-2xl font-bold text-black uppercase tracking-wide">
                    {t('home.cta')}
                </h2>

                <div className="flex items-center gap-4 relative z-10">
                    {/* Service Type Dropdown */}
                    <div className="relative" ref={serviceRef}>
                        <div
                            onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                            className="flex items-center justify-between w-48 bg-gray-50 border border-gray-100 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <span className={`font-medium text-sm ${selectedService ? 'text-black' : 'text-gray-500'}`}>
                                {selectedService ? t(`home.serviceOptions.${selectedService}`) : t('home.serviceType')}
                            </span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${showServiceDropdown ? 'rotate-180' : ''}`}>
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {showServiceDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden py-1 z-20">
                                {['residential', 'commercial', 'deep', 'move'].map((key) => (
                                    <div
                                        key={key}
                                        onClick={() => {
                                            setSelectedService(key);
                                            setShowServiceDropdown(false);
                                        }}
                                        className="px-4 py-2 hover:bg-lime-50 cursor-pointer text-sm text-gray-700 hover:text-black transition-colors"
                                    >
                                        {t(`home.serviceOptions.${key}`)}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Select Date Input */}
                    <div className="relative" ref={calendarRef}>
                        <div
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="relative flex items-center justify-between w-48 bg-gray-50 border border-gray-100 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <span className={`font-medium text-sm ${selectedDate ? 'text-black' : 'text-gray-500'}`}>
                                {selectedDate ? new Date(selectedDate).toLocaleDateString() : t('home.selectDate')}
                            </span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        {showCalendar && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-2 z-20">
                                <CustomCalendar
                                    selectedDate={selectedDate}
                                    onDateSelect={(dateStr) => {
                                        setSelectedDate(dateStr);
                                        setShowCalendar(false);
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Book Now Button */}
                    <button
                        onClick={handleBookNow}
                        className="bg-[#a3d937] hover:bg-[#92c530] text-black font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                        {t('home.bookNow')}
                    </button>
                </div>
            </div>

            <BookingModal
                key={`${selectedService}-${selectedDate}-${isBookingModalOpen}`}
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                selectedService={selectedService ? t(`home.serviceOptions.${selectedService}`) : ''}
                selectedDate={selectedDate}
            />

            {/* ================= OUR WORK SECTION ================= */}
            <div className="mt-40 mb-20 px-4 md:pl-40">
                {/* Header: Title and Description */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <h2 className="text-5xl md:text-7xl font-black text-black leading-tight uppercase">
                        {t('home.work.title')} <span className="italic font-light text-gray-700">{t('home.work.titleHighlight')}</span>
                        <br />
                        {t('home.work.titleEnd')}
                    </h2>
                    <p className="max-w-md text-gray-500 text-sm leading-relaxed mt-4 md:mt-12">
                        {t('home.work.description')}
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 items-stretch">
                    {/* 01/ Commercial Cleaning */}
                    <div className="col-span-2 md:col-span-4 group cursor-pointer relative overflow-hidden rounded-3xl aspect-[16/10] md:aspect-[4/5]">
                        <img
                            src={commercialImg}
                            alt="Commercial Cleaning"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-[10px] font-bold text-lime-400 mb-1">01</p>
                            <p className="text-lg md:text-xl font-black tracking-tight uppercase leading-none">
                                {t('home.work.item01')}
                            </p>
                        </div>
                        {/* Optional Sparkle Icon */}
                        <div className="absolute bottom-6 right-6 text-white/40">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
                            </svg>
                        </div>
                    </div>

                    {/* 02/ Regular Cleaning */}
                    <div className="col-span-2 md:col-span-8 group cursor-pointer relative overflow-hidden rounded-3xl bg-[#FFB800] aspect-[16/10] md:aspect-[16/9] flex items-center justify-center">
                        {/* Image with Person - using same for now but styled */}
                        <img
                            src={residentialImg}
                            alt="Regular Cleaning"
                            className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-6 left-6 text-white text-left">
                            <p className="text-[10px] font-bold text-black/50 mb-1">02</p>
                            <p className="text-xl md:text-2xl font-black tracking-tight uppercase leading-none">
                                {t('home.work.item02')}
                            </p>
                        </div>
                    </div>



                    {/* Explore Services Box */}
                    <div
                        onClick={() => navigate('/services')}
                        className="col-span-2 md:col-span-12 group cursor-pointer bg-white border-[#E5E5E5] border-[2px] rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all md:aspect-[16/3]"
                    >
                        <h3 className="text-2xl md:text-4xl font-black text-black leading-tight mb-2 md:mb-6">
                            20+
                        </h3>
                        <p className="text-[8px] md:text-xs font-bold text-gray-600 uppercase tracking-widest leading-tight mb-4">
                            {t('home.work.exploreText')}
                        </p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/services');
                            }}
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-[#a3d937] hover:bg-[#b5db67] transition-colors"
                        >
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
                    </div>
                </div>
            </div>

            {/* Interactive Game Section */}
            <div className="mt-40 mb-20 px-4 md:pl-40">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-lime-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">{t('home.game.interactiveExperience')}</span>
                    <h2 className="text-5xl md:text-7xl font-black text-black leading-tight uppercase">
                        {t('home.game.headingPrimary')} <br />
                        <span className="italic font-light text-gray-700">{t('home.game.headingSecondary')}</span>
                    </h2>
                    <p className="max-w-md text-gray-500 text-sm leading-relaxed mt-6">
                        {t('home.game.description')}
                    </p>
                </div>
                <Suspense fallback={<div className="h-60" />}>
                    <CleaningGame />
                </Suspense>
            </div>

            {/* Video Showcase Section */}
            <div className="mt-10 mb-20 px-4 md:pl-40 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-black text-black leading-tight uppercase tracking-tight">
                        {t('home.game.video.headingPrimary')} <span className="font-light text-gray-400">{t('home.game.video.headingHighlight')}</span>
                        <br />
                        {t('home.game.video.headingEnd')}
                    </h2>
                </div>

                <div className="relative w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl group border-[8px] md:border-[12px] border-white bg-white">
                    <video
                        className="w-full h-auto object-cover rounded-[1.5rem]"
                        src={cleaningVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        {t('home.videoFallback')}
                    </video>

                </div>
            </div>

        </div>
    );
};

export default Home;
