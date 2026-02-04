import React, { useState, Suspense, lazy, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import residentialImg from '../assets/residential_cleaning_1768327291773.png';
import commercialImg from '../assets/commercial_cleaning_1768327306633.png';
import specializedImg from '../assets/specialized_cleaning_1768327322601.png';
import industrialImg from '../assets/industrial_cleaning_1768327344053.png';
import outdoorImg from '../assets/outdoor_maintenance_1768327364134.png';
import sanitationImg from '../assets/sanitation_hygiene_1768327387017.png';
// Using logo or hero as fallback for manpower since generation failed, or reuse commercial which has people
import manpowerImg from '../assets/commercial_cleaning_1768327306633.png';
import warehouseWorkersImg from '../assets/warehouse_workers.png';
import forkliftDriversImg from '../assets/forklift_drivers.png';
import constructionWorkersImg from '../assets/construction_workers.png';
import hospitalityStaffImg from '../assets/hospitality_staff.png';
import eventStaffImg from '../assets/event_staff.png';
import generalManpowerImg from '../assets/general_manpower.png';
import heroBanner from '../assets/hero-banner.png';
const BookingModal = lazy(() => import('../components/BookingModal'));

const Services = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');
    const [activeCard, setActiveCard] = useState(null);
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [mouseMoved, setMouseMoved] = useState(false);

    const handleMouseDown = (e) => {
        setMouseMoved(false);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        const x = e.pageX - scrollRef.current.offsetLeft;
        const dist = Math.abs(x - startX);

        if (dist > 5 && e.buttons === 1) { // Left mouse button down and moved
            setIsDragging(true);
            setMouseMoved(true);
        }

        if (!isDragging) return;

        e.preventDefault();
        const walk = (x - startX) * 2; // Scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollManual = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleCardHover = (e) => {
        if (isDragging || window.innerWidth < 768) return;
        const card = e.currentTarget;
        const container = scrollRef.current;
        if (!container) return;

        // Small delay to allow CSS transition to start so we can get more accurate dimensions
        setTimeout(() => {
            const cardRect = card.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const cardCenter = cardRect.left + cardRect.width / 2;
            const containerCenter = containerRect.left + containerRect.width / 2;

            const scrollOffset = cardCenter - containerCenter;

            container.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }, 100);
    };

    const openBookingModal = (e, serviceTitle) => {
        e.stopPropagation(); // Prevent card toggle when booking
        setSelectedServiceForBooking(serviceTitle);
        setIsBookingModalOpen(true);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const servicesList = [
        {
            id: 'manpower',
            category: 'Manpower',
            title: t('services.items.manpower.title'),
            description: t('services.items.manpower.description'),
            items: t('services.items.manpower.features', { returnObjects: true }) || [],
            image: manpowerImg,
            color: 'bg-indigo-50'
        },
        {
            id: 'residential',
            category: 'Residential',
            title: t('services.items.residential.title'),
            description: t('services.items.residential.description'),
            items: t('services.items.residential.features', { returnObjects: true }) || [],
            image: residentialImg,
            color: 'bg-rose-50'
        },
        {
            id: 'commercial',
            category: 'Commercial',
            title: t('services.items.commercial.title'),
            description: t('services.items.commercial.description'),
            items: t('services.items.commercial.features', { returnObjects: true }) || [],
            image: commercialImg,
            color: 'bg-blue-50'
        },
        {
            id: 'specialized',
            category: 'Specialized',
            title: t('services.items.specialized.title'),
            description: t('services.items.specialized.description'),
            items: t('services.items.specialized.features', { returnObjects: true }) || [],
            image: specializedImg,
            color: 'bg-orange-50'
        },
        {
            id: 'industrial',
            category: 'Industrial',
            title: t('services.items.industrial.title'),
            description: t('services.items.industrial.description'),
            items: t('services.items.industrial.features', { returnObjects: true }) || [],
            image: industrialImg,
            color: 'bg-gray-50'
        },
        {
            id: 'outdoor',
            category: 'Outdoor',
            title: t('services.items.outdoor.title'),
            description: t('services.items.outdoor.description'),
            items: t('services.items.outdoor.features', { returnObjects: true }) || [],
            image: outdoorImg,
            color: 'bg-green-50'
        },
        {
            id: 'sanitation',
            category: 'Sanitation',
            title: t('services.items.sanitation.title'),
            description: t('services.items.sanitation.description'),
            items: t('services.items.sanitation.features', { returnObjects: true }) || [],
            image: sanitationImg,
            color: 'bg-cyan-50'
        },
        {
            id: 'warehouse-workers',
            category: 'Manpower',
            title: t('services.items.warehouseWorkers.title'),
            description: t('services.items.warehouseWorkers.description'),
            items: t('services.items.warehouseWorkers.features', { returnObjects: true }) || [],
            image: warehouseWorkersImg,
            color: 'bg-amber-50'
        },
        {
            id: 'forklift-drivers',
            category: 'Manpower',
            title: t('services.items.forkliftDrivers.title'),
            description: t('services.items.forkliftDrivers.description'),
            items: t('services.items.forkliftDrivers.features', { returnObjects: true }) || [],
            image: forkliftDriversImg,
            color: 'bg-orange-50'
        },
        {
            id: 'construction-workers',
            category: 'Manpower',
            title: t('services.items.constructionWorkers.title'),
            description: t('services.items.constructionWorkers.description'),
            items: t('services.items.constructionWorkers.features', { returnObjects: true }) || [],
            image: constructionWorkersImg,
            color: 'bg-yellow-50'
        },
        {
            id: 'hospitality-staff',
            category: 'Manpower',
            title: t('services.items.servers.title'),
            description: t('services.items.servers.description'),
            items: t('services.items.servers.features', { returnObjects: true }) || [],
            image: hospitalityStaffImg,
            color: 'bg-rose-50'
        },
        {
            id: 'event-staff',
            category: 'Manpower',
            title: t('services.items.eventAssistants.title'),
            description: t('services.items.eventAssistants.description'),
            items: t('services.items.eventAssistants.features', { returnObjects: true }) || [],
            image: eventStaffImg,
            color: 'bg-purple-50'
        },
        {
            id: 'general-manpower',
            category: 'Manpower',
            title: t('services.items.nonSkilledWorkforce.title'),
            description: t('services.items.nonSkilledWorkforce.description'),
            items: t('services.items.nonSkilledWorkforce.features', { returnObjects: true }) || [],
            image: generalManpowerImg,
            color: 'bg-gray-50'
        }
    ];

    // Filter Logic
    const categories = ['All', 'Residential', 'Commercial', 'Specialized', 'Industrial', 'Outdoor', 'Sanitation', 'Manpower'];

    const filteredServices = activeCategory === 'All'
        ? servicesList
        : servicesList.filter(s => s.category === activeCategory);

    const reviews = t('services.testimonials.items', { returnObjects: true }) || [];
    const filteredReviews = activeCategory === 'All'
        ? reviews.slice(0, 3)
        : reviews.filter(r => r.category === activeCategory || r.category === 'All');

    const faqItems = t('services.faq.items', { returnObjects: true }) || [];
    const filteredFaqs = faqItems.filter(f =>
        activeCategory === 'All'
            ? f.category === 'All' || f.category === 'Residential'
            : f.category === activeCategory || f.category === 'All'
    );

    return (
        <div className="bg-[#FAF9F6] min-h-screen pb-12 sm:pb-20 font-sans overflow-x-hidden selection:bg-lime-200 selection:text-lime-900">


            {/* Hero Section */}
            <div className="relative z-10 pt-16 sm:pt-20 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2 space-y-6 sm:space-y-10 relative text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                            <span className="text-xs sm:text-sm font-medium text-gray-600 tracking-wide uppercase">{t('services.hero.trusted')}</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-[1.1] tracking-tight break-words">
                            {t('services.hero.title').split(' ').map((word, i) => (
                                i === 2 ?
                                    <span key={i} className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-600 italic px-2">
                                        {word}
                                        <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-4 text-lime-300/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                                        </svg>
                                    </span> : word + ' '
                            ))}
                        </h1>

                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg font-light border-l-4 border-lime-300 pl-6 mx-auto lg:mx-0">
                            {t('services.hero.subtitle')}
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <button
                                onClick={(e) => openBookingModal(e, 'General Service')}
                                className="group relative w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden shadow-2xl transition-all hover:scale-105 hover:shadow-lime-900/20"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-lime-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {t('services.hero.cta')}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            <button
                                onClick={() => navigate('/about')}
                                className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm border border-white/60 text-gray-800 rounded-full font-medium hover:bg-white transition-all shadow-lg hover:shadow-xl"
                            >
                                {t('services.hero.learnMore')}
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative aspect-square max-w-md lg:max-w-none mx-auto">
                        {/* Abstract Composition */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-lime-100 to-blue-50 rounded-[2.5rem] sm:rounded-[4rem] rotate-3 transform transition-transform hover:rotate-6 duration-700"></div>
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[4rem] -rotate-3 border border-white/50 shadow-2xl overflow-hidden z-10 group">
                            <img src={residentialImg} alt="Hero Main" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" />

                            {/* Floating Glass Cards */}
                            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg transform transition-transform duration-500 hover:-translate-y-2">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-white/80 text-xs sm:text-sm font-medium mb-1">Total Satisfaction</p>
                                        <p className="text-white text-2xl sm:text-3xl font-serif">100%</p>
                                    </div>
                                    <div className="flex -space-x-3 sm:-space-x-4">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 sm:w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 border-2 border-white shadow-md"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 sm:-top-12 -right-6 sm:-right-12 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-300 rounded-full blur-xl opacity-60"></div>
                        <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-24 sm:w-32 h-24 sm:h-32 bg-lime-400 rounded-full blur-2xl opacity-40"></div>
                    </div>
                </div>
            </div>

            {/* Partners & Certifications Ticker */}
            <div className="bg-white border-y border-gray-100 py-4 sm:py-6 overflow-hidden relative">
                <div className="flex gap-12 sm:gap-16 items-center animate-scroll-slow whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300">
                    {/* Repeated for smooth infinite scroll */}
                    {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            {i === 1 && <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gray-400">{t('services.ticker.iso')}<span className="text-gray-300 font-light">{t('services.ticker.isoSuffix')}</span></span>}
                            {i === 2 && <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gray-400">{t('services.ticker.eco')}<span className="text-lime-400">{t('services.ticker.ecoSuffix')}</span></span>}
                            {i === 3 && <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gray-400">{t('services.ticker.certified')}<span className="text-gray-300 font-light">{t('services.ticker.certifiedSuffix')}</span></span>}
                            {i === 4 && <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gray-400">{t('services.ticker.safety')}<span className="text-blue-300 font-light">{t('services.ticker.safetySuffix')}</span></span>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Dock Filter Bar */}
            <div className="sticky top-4 z-50 max-w-max mx-auto px-4 mb-16 sm:mb-20 mt-6">
                <div className="flex gap-2 p-1.5 sm:p-2 bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 overflow-x-auto max-w-[95vw] md:max-w-none no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 whitespace-nowrap ${activeCategory === cat
                                ? 'text-white shadow-lg scale-105'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                                }`}
                        >
                            {activeCategory === cat && (
                                <div className="absolute inset-0 bg-gray-900 rounded-full -z-10 transition-all duration-500 ease-out"></div>
                            )}
                            {t(`services.categories.${cat.toLowerCase()}`)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 sm:mb-16 gap-4">
                    <div className="text-center md:text-left space-y-4">
                        <span className="text-lime-600 font-bold tracking-widest uppercase text-xs sm:text-sm">{t('services.expertise')}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-gray-900">
                            {t('services.title')}
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scrollManual('left')}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollManual('right')}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex flex-col md:flex-row md:flex-nowrap gap-4 md:gap-3 lg:gap-4 h-auto md:h-[650px] w-full items-stretch md:overflow-x-auto md:pb-8 no-scrollbar ${isDragging ? 'cursor-grabbing select-none' : 'cursor-default'}`}
                >
                    {filteredServices.map((service, index) => (
                        <div
                            key={service.id}
                            onMouseEnter={handleCardHover}
                            onClick={() => {
                                if (!isDragging) {
                                    setActiveCard(activeCard === service.id ? null : service.id);
                                }
                            }}
                            className={`group relative rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer flex-shrink-0
                                h-[450px] sm:h-[550px] md:h-full
                                w-full md:w-[150px] md:hover:w-[600px] lg:hover:w-[750px]
                                ${activeCard === service.id ? 'md:w-[600px] lg:w-[750px]' : ''}`}
                        >
                            {/* Background Image & Overlay */}
                            <div className="absolute inset-0 bg-gray-900 z-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className={`w-full h-full object-cover transition-all duration-700 ${activeCard === service.id ? 'opacity-40 scale-110' : 'opacity-70 group-hover:opacity-40 group-hover:scale-110'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>
                            </div>

                            {/* Content Wrapper */}
                            <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-10 pointer-events-none">
                                {/* Top Navigation Icon (↗) - Re-enable pointer events for the icon container if needed, but the card click handles it */}
                                <div className="flex justify-end mb-4">
                                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white group-hover:bg-lime-500 group-hover:border-lime-500 transition-all duration-500 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform transition-transform duration-500 ${activeCard === service.id ? 'rotate-0' : '-rotate-45 group-hover:rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Main Title Area */}
                                <div className={`flex-grow flex flex-col min-h-0 transition-all duration-700 ${activeCard === service.id ? 'justify-end' : 'justify-center md:group-hover:justify-end'}`}>

                                    {/* Desktop-only Vertical Title (When narrow) */}
                                    <div className={`hidden md:block absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-700 ${activeCard === service.id ? 'opacity-0 scale-95' : 'opacity-100 group-hover:opacity-0 group-hover:scale-95'}`}>
                                        <h3 className="text-3xl lg:text-4xl font-serif text-white/90 font-medium tracking-tight -rotate-90">
                                            {service.title.split(' ')[0]}
                                        </h3>
                                    </div>

                                    {/* Expanded Content Area with fixed content */}
                                    <div className={`pointer-events-auto flex flex-col transition-all duration-700 ${activeCard === service.id ? 'translate-y-0 opacity-100' : 'md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'}`}>
                                        <div className="flex flex-col">
                                            <div className="inline-block self-start px-3 py-1 rounded-full bg-lime-500 text-[10px] sm:text-xs font-bold text-black mb-3 sm:mb-4 uppercase tracking-widest leading-none">
                                                {t(`services.categories.${service.category.toLowerCase()}`)}
                                            </div>
                                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-3 sm:mb-4 leading-tight font-medium tracking-tight">
                                                {service.title}
                                            </h3>

                                            <div className={`transition-all duration-700 delay-100 ${activeCard === service.id ? 'opacity-100' : 'md:opacity-0 md:group-hover:opacity-100'}`}>
                                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mb-5 line-clamp-3">
                                                    {service.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                                                    {service.items.slice(0, 4).map((item, idx) => (
                                                        <span key={idx} className="text-[10px] sm:text-xs font-bold bg-white/10 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 whitespace-nowrap">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>

                                                <button
                                                    onClick={(e) => openBookingModal(e, service.title)}
                                                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-lime-500 text-black font-extrabold rounded-2xl hover:bg-lime-400 transition-all duration-300 shadow-xl shadow-lime-900/20 active:scale-95 uppercase tracking-widest text-[10px] sm:text-xs"
                                                >
                                                    {t('services.hero.cta')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Suspense fallback={null}>
                <BookingModal
                    key={`${selectedServiceForBooking}-${isBookingModalOpen}`}
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    selectedService={selectedServiceForBooking}
                />
            </Suspense>

            {/* Why Choose Us Section - Bento Grid Style */}
            <div className="mt-24 sm:mt-40 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 sm:mb-20 gap-8 text-center md:text-left">
                    <div className="max-w-2xl">
                        <span className="text-lime-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">{t('services.whyChoose.title')}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                            {t('services.whyChoose.heading')} <br />
                            <span className="italic text-gray-500">{t('services.whyChoose.headingItalic')}</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-md text-base sm:text-lg leading-relaxed">{t('services.whyChoose.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {(t('services.whyChoose.features', { returnObjects: true }) || []).map((feature, idx) => (
                        <div key={idx} className="relative p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group bg-white text-gray-900 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-lime-200">
                            <div className="relative z-10">
                                <div className="w-12 h-12 sm:w-14 h-14 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 text-xl sm:text-2xl shadow-sm bg-lime-50 text-lime-600 group-hover:bg-lime-600 group-hover:text-white transition-colors duration-300">
                                    {idx === 0 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-7 w-6 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {idx === 1 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-7 w-6 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {idx === 2 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-7 w-6 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">{feature.title}</h3>
                                <p className="leading-relaxed text-gray-500 text-sm sm:text-base">{feature.desc}</p>

                                <div className="mt-6 sm:mt-8">
                                    <span className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wide uppercase text-lime-600 group-hover:text-lime-700">
                                        {t('services.whyChoose.discover')}
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process Section - Snake Layout */}
            <div className="mt-24 sm:mt-40 bg-white py-20 sm:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="absolute inset-0">
                    <img src={heroBanner} className="w-full h-full object-cover opacity-5" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                    <div className="text-center mb-16 sm:mb-24">
                        <span className="text-lime-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">{t('services.process.title')}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">{t('services.process.subtitle')}</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block border-t border-dashed border-gray-300"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative">
                            {(t('services.process.steps', { returnObjects: true }) || []).map((step, idx) => (
                                <div key={idx} className="relative group text-center md:text-left">
                                    <div className="md:absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none hidden md:block">
                                        <div className="absolute top-0 left-1/2 w-4 h-4 bg-white border-4 border-lime-500 rounded-full transform -translate-x-1/2 -translate-y-[2px] z-20 transition-transform duration-500 group-hover:scale-150"></div>
                                    </div>

                                    <div className="relative z-10 p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                                        <span className="text-4xl sm:text-5xl font-serif font-bold text-lime-100 absolute top-4 right-6 group-hover:text-lime-50 transition-colors">0{idx + 1}</span>
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-500">
                                            {idx === 0 && <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                                            {idx === 1 && <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                                            {idx === 2 && <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Standards Section */}
            <div className="mt-24 sm:mt-32 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-12 lg:p-0 text-white relative overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
                        <div className="absolute inset-0">
                            <img src={specializedImg} alt="Professional Safety" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-gray-900"></div>
                        </div>
                    </div>

                    <div className="lg:w-3/5 p-8 sm:p-12 lg:p-20 relative z-10">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                        <span className="text-lime-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">{t('services.promise.title')}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{t('services.promise.heading')}</h2>
                        <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-8">
                            {t('services.promise.desc')}
                        </p>

                        <div className="flex flex-wrap gap-6 mb-12">
                            {(t('services.promise.stats', { returnObjects: true }) || []).map((stat, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="flex flex-col">
                                        <span className="text-2xl sm:text-3xl font-serif text-lime-400">{stat.value}</span>
                                        <span className="text-gray-400 text-xs sm:text-sm">{stat.label}</span>
                                    </div>
                                    {idx < 2 && <div className="hidden sm:block w-px bg-gray-700"></div>}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                            {(t('services.promise.features', { returnObjects: true }) || []).map((item, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors flex items-start gap-4">
                                    <div className="shrink-0 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-lime-500/20 text-lime-400 flex items-center justify-center">
                                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                                            {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                                            {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                                            {idx === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />}
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-xs sm:text-sm mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-[10px] sm:text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20 sm:py-32 overflow-hidden bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 mb-12 sm:mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
                    <div>
                        <span className="text-lime-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">{t('services.testimonials.title')}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">{t('services.testimonials.subtitle')}</h2>
                    </div>
                </div>

                <div className="max-w-[100vw] overflow-x-hidden">
                    <div className="flex gap-6 sm:gap-8 px-6 sm:px-12 lg:px-24 animate-scroll-slow hover:pause-animation">
                        {filteredReviews.concat(filteredReviews).map((review, idx) => (
                            <div key={idx} className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-1 mb-4 sm:mb-6">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <svg key={star} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-lg sm:text-xl text-gray-700 italic font-serif leading-relaxed mb-6 sm:mb-8">"{review.text}"</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 sm:w-14 h-14 rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
                                    <div>
                                        <h4 className="font-bold text-sm sm:text-base text-gray-900">{review.name}</h4>
                                        <p className="text-xs sm:text-sm text-lime-600 font-medium">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-24 sm:mt-32 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="text-center mb-12 sm:mb-16 space-y-4">
                    <span className="text-lime-600 font-bold tracking-widest uppercase text-xs sm:text-sm">{t('services.faq.supportLabel')}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">{t('services.faq.title')}</h2>
                    <p className="text-lg sm:text-xl text-gray-500">{t('services.faq.subtitle')}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden h-full min-h-[300px] sm:min-h-[500px] shadow-xl group order-last lg:order-first">
                        <img src={sanitationImg} alt="FAQ Customer Support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white">
                            <div className="w-10 h-10 sm:w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mb-4 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 w-5 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">{t('services.faq.stillHaveQuestions')}</h3>
                            <p className="text-gray-200 text-sm sm:text-base">{t('services.faq.contactSupport')}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredFaqs.map((faq, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-lime-200">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex justify-between items-center p-6 sm:p-8 text-left"
                                >
                                    <span className={`font-medium text-lg sm:text-xl transition-colors duration-300 ${activeFaq === idx ? 'text-lime-600' : 'text-gray-900'}`}>
                                        {faq.q}
                                    </span>
                                    <span className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${activeFaq === idx ? 'bg-lime-600 border-lime-600 text-white rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-lime-400 group-hover:text-lime-600'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 sm:p-8 pt-0 text-gray-600 leading-relaxed text-base sm:text-lg border-t border-dashed border-gray-100 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-12 bg-white rounded-3xl border border-gray-100">
                                <p className="text-gray-500 text-base sm:text-lg">{t('services.faq.noGeneric')}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Premium CTA Section */}
            <div className="mt-24 sm:mt-40 mb-12 sm:mb-20 px-6 sm:px-12 lg:px-24">
                <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-black text-white py-16 sm:py-24 px-6 md:px-20 text-center shadow-2xl">
                    <div className="absolute inset-0">
                        <img
                            src="https://img.freepik.com/free-photo/man-cleaning-his-home_23-2148112482.jpg"
                            alt="Background"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white leading-tight tracking-tight">
                            {t('services.ctaSection.title')}
                        </h2>
                        <p className="text-gray-400 text-lg sm:text-xl font-light tracking-wide max-w-xl mx-auto">
                            {t('services.ctaSection.subtitle')}
                        </p>
                        <div className="pt-8 sm:pt-12 flex justify-center">
                            <button
                                onClick={(e) => openBookingModal(e, 'General Service')}
                                className="relative group w-full sm:w-auto"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-70 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative px-8 sm:px-12 py-4 bg-white rounded-full leading-none flex items-center justify-center">
                                    <span className="text-gray-900 font-bold text-base sm:text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                                        {t('services.ctaSection.button')}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;
