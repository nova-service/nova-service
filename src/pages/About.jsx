import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCarousel from './TestimonialCarousel.jsx';
//IMAGES
import roomCleaned from '../assets/room_cleaned.png';
import roomUncleaned from '../assets/room_uncleaned.png';
import team from '../assets/team.jpg'; // Import team image
//3d images
import trained from "../assets/3D_ICON/Trained_Professionals.png";
import eco from "../assets/3D_ICON/Eco-Friendly.png";
import affordable from "../assets/3D_ICON/Affordable.png";
import ontime from "../assets/3D_ICON/On-Time.png";
import satisfaction from "../assets/3D_ICON/Satisfaction.png";
import quality from "../assets/3D_ICON/Quality.png";

//2d images
import clock from "../assets/2D_ICON/clock.png";
import handshake from "../assets/2D_ICON/handshake.png";
import multiple from "../assets/2D_ICON/multiple-users-silhouette.png";
import quality2 from "../assets/2D_ICON/quality-assurance.png";


const About = () => {
    // ================= STATE =================
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [dragging, setDragging] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);

    // ================= REFS =================
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const afterRef = useRef(null);

    // ================= RESIZE OBSERVER FOR SLIDER =================
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const features = [
        {
            icon: trained,
            title: t('about.whyChoose.features.0.title'),
            description: t('about.whyChoose.features.0.description')
        },
        {
            icon: eco,
            title: t('about.whyChoose.features.1.title'),
            description: t('about.whyChoose.features.1.description')
        },
        {
            icon: affordable,
            title: t('about.whyChoose.features.2.title'),
            description: t('about.whyChoose.features.2.description')
        },
        {
            icon: ontime,
            title: t('about.whyChoose.features.3.title'),
            description: t('about.whyChoose.features.3.description')
        },
        {
            icon: satisfaction,
            title: t('about.whyChoose.features.4.title'),
            description: t('about.whyChoose.features.4.description')
        },
        {
            icon: quality,
            title: t('about.whyChoose.features.5.title'),
            description: t('about.whyChoose.features.5.description')
        }
    ];



    // ================= DATA =================
    const testimonials = [
        {
            id: 1,
            name: "Schmidt Family",
            location: "Munich",
            rating: 5,
            text: "Nova Service transformed our home. Their attention to detail is unmatched, and the team is always professional and courteous.",
            service: "Residential Cleaning"
        },
        {
            id: 2,
            name: "TechHub GmbH",
            location: "Berlin",
            rating: 5,
            text: "We've been using Nova Service for our office for over a year. Consistent quality, reliable service, and excellent communication.",
            service: "Commercial Cleaning"
        },
        {
            id: 3,
            name: "Maria Weber",
            location: "Hamburg",
            rating: 5,
            text: "The eco-friendly products were a game-changer for our family. Our home has never been cleaner or safer!",
            service: "Deep Cleaning"
        },
        {
            id: 4,
            name: "Restaurant Goldener Löffel",
            location: "Frankfurt",
            rating: 5,
            text: "Outstanding service for our restaurant. They understand the specific needs of food service establishments.",
            service: "Commercial Cleaning"
        }
    ];

    // ================= TESTIMONIAL NAV =================
    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) =>
            (prev - 1 + testimonials.length) % testimonials.length
        );
    };
    function ShineEffect() {
        return (
            <div className="relative w-20 h-20 flex items-center justify-center">

                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-[#84CC16]/30 blur-2xl animate-pulse [animation-duration:4s]"></div>

                {/* Sparkles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#A3E635] rotate-45 animate-ping [animation-duration:3s]"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#84CC16] rotate-45 animate-ping [animation-duration:3.5s]"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#84CC16] rotate-45 animate-ping [animation-duration:4.0s]"></div>

                {/* Cleaning Bubbles */}
                <span className="bubble bubble-1"></span>
                <span className="bubble bubble-2"></span>
                <span className="bubble bubble-3"></span>

            </div>
        );
    } function BubbleEffect() {
        const bubbles = Array.from({ length: 6 });

        return (
            <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden">

                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full /30 blur-2xl animate-pulse [animation-duration:6s]"></div>

                {/* Multiple Bubbles */}
                {bubbles.map((_, index) => (
                    <span
                        key={index}
                        className="bubble"
                        style={{
                            left: `${Math.random() * 80}%`,
                            width: `${6 + Math.random() * 6}px`,   // Bigger bubbles
                            height: `${6 + Math.random() * 6}px`,
                            animationDelay: `${index * 0.8}s`,
                            animationDuration: `${6 + Math.random() * 3}s`,
                        }}
                    ></span>
                ))}

            </div>
        );
    }




    // ================= SLIDER HANDLERS =================
    const handleMove = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, percentage)));
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        const handleGlobalMove = (e) => handleMove(e.clientX);
        const handleGlobalTouchMove = (e) => handleMove(e.touches[0].clientX);
        const handleGlobalUp = () => setDragging(false);

        if (dragging) {
            window.addEventListener('mousemove', handleGlobalMove);
            window.addEventListener('mouseup', handleGlobalUp);
            window.addEventListener('touchmove', handleGlobalTouchMove);
            window.addEventListener('touchend', handleGlobalUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchmove', handleGlobalTouchMove);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [dragging]);

    // ================= EFFECT =================
    useEffect(() => {
        if (afterRef.current) {
            afterRef.current.style.width = `${sliderPosition}%`;
        }
        if (sliderRef.current) {
            sliderRef.current.style.left = `${sliderPosition}%`;
        }
    }, [sliderPosition]);

    return (
        <div className="min-h-screen bg-[#FAF9F6] overflow-x-hidden">
            {/* ================= HERO ================= */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454568.jpg')`,
                            backgroundPosition: 'right center'
                        }}
                    ></div>
                </div>

                {/* Soft Overlay for Readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#F0FDF4]/95 via-[#F0FDF4]/85 to-[#F0FDF4]/65"></div>

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        className="relative inline-block mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#E5E7EB] text-[#84CC16] font-semibold text-sm shadow-md tracking-wide relative z-10">
                            {t('about.hero.certified')}
                        </span>
                    </motion.div>
                    {/* Heading */}
                    <motion.h1
                        className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-[#111827] mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t('about.hero.title')}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CC16] via-[#84CC16] to-[#059669]">
                            {t('about.hero.titleHighlight')}
                        </span>
                    </motion.h1>
                    <div className="absolute -top-12 -left-1 z-0">
                        <ShineEffect />
                    </div>
                    <div className="absolute -bottom-12 -right-1 z-0">
                        <ShineEffect />
                    </div>
                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {t('about.hero.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* ================= ABOUT US ================= */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#111827] mb-6 leading-tight"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {t('about.story.title')}
                            </motion.h2>

                            <motion.p
                                className="text-[#4B5563] leading-relaxed mb-8 text-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {t('about.story.text')}
                            </motion.p>

                            {/* NOVA Principle */}
                            <motion.div
                                className="mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-[#111827] mb-2">{t('about.story.principle.title')}</h3>
                                <p className="text-sm text-gray-500 mb-6">{t('about.story.principle.subtitle')}</p>
                                <div className="space-y-4">
                                    {(t('about.story.principle.items', { returnObjects: true }) || []).map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#84CC16]/10 text-[#84CC16] font-bold">
                                                {item.letter}
                                            </span>
                                            <div>
                                                <span className="font-bold text-gray-900">{item.word}: </span>
                                                <span className="text-gray-600">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Expansion Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mb-10"
                            >
                                <h3 className="text-xl font-bold text-[#111827] mb-3">{t('about.story.expansion.title')}</h3>
                                <p className="text-[#4B5563] leading-relaxed">
                                    {t('about.story.expansion.text')}
                                </p>
                            </motion.div>

                            {/* Values */}
                            <div className="space-y-6">
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#111827]">
                                    {t('about.values.title')}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                    {[
                                        { title: t('about.values.items.0.title'), desc: t('about.values.items.0.desc') },
                                        { title: t('about.values.items.1.title'), desc: t('about.values.items.1.desc') },
                                        { title: t('about.values.items.2.title'), desc: t('about.values.items.2.desc') },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-[#F0FDF4] p-5 rounded-2xl border border-[#84CC16] shadow-sm hover:shadow-md transition-all duration-300 text-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.15 }}
                                        >
                                            <h4 className="font-semibold text-[#84CC16] mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-[#6B7280] leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Stats Card */}
                        <motion.div
                            className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#84CC16] w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="grid grid-cols-2 gap-4 md:gap-8 text-center">
                                {[
                                    { value: 500, label: t('about.stats.clients'), suffix: "+", icon: handshake },
                                    { value: 8, label: t('about.stats.experience'), suffix: "+", icon: clock },
                                    { value: 50, label: t('about.stats.staff'), suffix: "+", icon: multiple },
                                    { value: 100, label: t('about.stats.certified'), suffix: "%", icon: quality2 },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex flex-col items-center"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                    >
                                        <div className="mb-3 flex justify-center">
                                            <img
                                                src={item.icon}
                                                alt={item.label}
                                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                            />
                                        </div>

                                        <motion.div
                                            className="text-2xl md:text-3xl font-bold text-[#84CC16] mb-1"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
                                        >
                                            {item.value}
                                            {item.suffix}
                                        </motion.div>

                                        <div className="text-[#6B7280] text-xs md:text-sm">
                                            {item.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="mt-10 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <span className="inline-flex items-center justify-center bg-[#84CC16] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-md tracking-wide text-sm md:text-base">
                                    {t('about.stats.badge')}
                                </span>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ================= BEFORE / AFTER ================= */}
            <section className="bg-white mb-12 md:mb-16">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <motion.h3
                        className="text-2xl md:text-4xl font-bold text-[#84CC16] mb-3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('about.transformation.title')}
                    </motion.h3>
                    <motion.p
                        className="text-base md:text-lg mb-4 font-semibold text-gray-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('about.transformation.slideText')}
                    </motion.p>

                    <div
                        ref={containerRef}
                        className="relative max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-[#E5E7EB] cursor-ew-resize select-none touch-none"
                        onMouseDown={() => setDragging(true)}
                        onTouchStart={() => setDragging(true)}
                    >
                        {/* BOTTOM IMAGE (Visible on the right - "Cleaned" state) */}
                        <img
                            src={roomCleaned}
                            alt="After: Professionally Cleaned"
                            className="w-full object-cover"
                            draggable="false"
                        />
                        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#111827] px-4 py-1.5 rounded-full font-bold text-sm shadow-md z-10 select-none pointer-events-none">
                            {t('about.transformation.after')}
                        </span>

                        {/* TOP IMAGE (Visible on the left - "Uncleaned" state) */}
                        <div
                            ref={afterRef}
                            className="absolute top-0 left-0 h-full overflow-hidden border-r-4 border-[#10B981] z-20"
                            style={{ width: `${sliderPosition}%` }}
                        >
                            <img
                                src={roomUncleaned}
                                alt="Before: Needs Cleaning"
                                className="w-full object-cover max-w-none"
                                style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
                                draggable="false"
                            />
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111827] px-4 py-1.5 rounded-full font-bold text-sm shadow-md z-10 select-none pointer-events-none">
                                {t('about.transformation.before')}
                            </span>
                        </div>

                        {/* SLIDER HANDLE */}
                        <div
                            ref={sliderRef}
                            className="absolute top-0 h-full w-10 -ml-5 flex items-center justify-center cursor-ew-resize opacity-0 hover:opacity-100 transition-opacity z-30"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            {/* Invisible touch target trigger area handles logic via container but visual handle helps */}
                            <div className="bg-[#10B981] text-white rounded-full p-2 shadow-lg ring-4 ring-white/30">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 19L16 12L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Circle Handle in Center (always visible) */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-[#10B981] text-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-white/30 pointer-events-none z-30"
                            style={{ left: `calc(${sliderPosition}% - 20px)` }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-90 sm:rotate-0">
                                <path d="M8 12h8M8 12l4-4m-4 4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                    </div>

                    <p className="mt-4 text-[#6B7280] text-base md:text-xl font-medium">
                        {t('about.transformation.caption')}
                    </p>
                </div>
            </section>
            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-16 md:py-24 bg-[#FAF9F6] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-3xl md:text-5xl mb-6 font-bold bg-gradient-to-r from-[#84CC16] to-[#65a30d] bg-clip-text text-transparent animate-gradient relative inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {t('about.whyChoose.title')}
                            <div className="absolute -top-7 -right-12 sm:-right-25 pointer-events-none">
                                <BubbleEffect />
                            </div>
                        </motion.h2>
                        <motion.p
                            className="text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('about.whyChoose.subtitle')}
                        </motion.p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative w-full h-auto min-h-[16rem] rounded-3xl overflow-hidden group transition-transform duration-500 hover:-translate-y-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Soft Green Glow */}
                                <div className="absolute w-56 h-48 bg-[#84CC16]/30 blur-[70px] -left-1/2 -top-1/2 group-hover:blur-[100px] transition-all duration-700"></div>

                                {/* Lite Luxury Card Base */}
                                <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-[#E5E7EB] rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500"></div>

                                {/* Frosted Content Layer */}
                                <div className="relative z-10 h-full flex flex-col justify-center p-8 text-[#111827]">
                                    <div className="mb-4 h-20 w-20 flex items-center justify-center">
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-full h-full object-contain drop-shadow-sm"
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-[#6B7280] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section>
                <TestimonialCarousel />



            </section>

            {/* ================= CONTACT ================= */}
            <section className="relative py-16 md:py-24 bg-[linear-gradient(90deg,#9BE24D,#84CC16,#6FAE16,#4D7C0F)] overflow-hidden">

                {/* Decorative Blurs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <motion.div
                    className="relative max-w-5xl mx-auto px-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight px-2"
                    >
                        {t('about.contact.title')}{" "}
                        <span className="text-white/90">{t('about.contact.titleHighlight')}</span>
                    </motion.h2>

                    {/* ================= TEAM IMAGE ================= */}
                    <div className="flex justify-center my-10 md:my-20">
                        <div className="max-w-2xl mx-auto px-6 text-center">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                {t('about.contact.teamTitle')}
                            </h3>
                            <img
                                src={team}
                                alt="Our Team"
                                className="rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-base md:text-xl text-white/90 mb-10 max-w-3xl mx-auto px-4"
                    >
                        {t('about.contact.subtitle')}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-5 justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {/* Primary Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/services')}
                            className="bg-white text-[#65A30D] px-10 py-4 rounded-2xl font-semibold shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300"
                        >
                            {t('about.contact.quoteBtn')}
                        </motion.button>

                        {/* Secondary Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            className="border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                        >
                            {t('about.contact.contactBtn')}
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

        </div>

    );
};

export default About;