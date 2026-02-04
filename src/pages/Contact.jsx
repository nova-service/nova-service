import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Lottie from 'lottie-react';
import cleaningAnimation from '../../cleaning.json';
import celebrationsAnimation from '../../Celebrations Begin.json';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix leaflet's default icon paths (works with Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showCelebration, setShowCelebration] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = true;
        if (!formData.email.trim()) newErrors.email = true;
        if (!formData.message.trim()) newErrors.message = true;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setShowCelebration(true);
        // Clear form after success
        setFormData({ name: '', email: '', message: '' });
    };

    function OfficeMarker() {
        return (
            <Marker position={[51.1657, 10.4515]}>
                <Popup>Our Office Location</Popup>
            </Marker>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center contact-page">
                {/* Header Section */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase text-center text-gray-900 mb-6 drop-shadow-sm">
                    {t('contact.title')}
                </h1>
                <p className="text-sm md:text-base text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {t('contact.subtitle')}
                </p>

                {/* Main Content Area: Form & Animation */}
                <div className="flex flex-col md:flex-row gap-10 items-center mb-24 text-left">
                    {/* Form Section */}
                    <div className="w-full md:flex-1 order-2 md:order-1">
                        <form className="space-y-4 p-8 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-100 border border-gray-50" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">{t('contact.name')}</label>
                                <input
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    className={`w-full px-5 py-4 bg-gray-50 border ${errors.name ? 'border-red-400' : 'border-transparent'} rounded-2xl text-sm transition-all focus:bg-white focus:border-lime-500 outline-none placeholder:text-gray-300 font-medium`}
                                    placeholder={t('contact.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">{t('contact.email')}</label>
                                <input
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className={`w-full px-5 py-4 bg-gray-50 border ${errors.email ? 'border-red-400' : 'border-transparent'} rounded-2xl text-sm transition-all focus:bg-white focus:border-lime-500 outline-none placeholder:text-gray-300 font-medium`}
                                    placeholder={t('contact.emailPlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-2">{t('contact.message')}</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-5 py-4 bg-gray-50 border ${errors.message ? 'border-red-400' : 'border-transparent'} rounded-2xl text-sm transition-all focus:bg-white focus:border-lime-500 outline-none resize-none placeholder:text-gray-300 font-medium`}
                                    placeholder={t('contact.messagePlaceholder')}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#a3d937] hover:bg-[#92c530] text-black font-black py-5 rounded-2xl transition-all shadow-xl shadow-lime-100 uppercase tracking-widest text-[10px] mt-4"
                            >
                                {t('contact.send')}
                            </button>
                        </form>
                    </div>

                    {/* Lottie Animation Section */}
                    <div className="w-full md:flex-1 order-1 md:order-2 flex justify-center items-center">
                        <div className="w-44 sm:w-60 md:w-full max-w-sm">
                            <Lottie
                                animationData={cleaningAnimation}
                                loop={true}
                                autoplay={true}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Office Location & Details Header */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4">Office Location</h2>
                    <p className="text-sm text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">Visit us at our headquarters in Berlin or reach out through our digital channels.</p>

                    {/* Information Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
                        <div className="p-8 bg-white rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-lime-500 transition-all group cursor-pointer">
                            <div className="w-12 h-12 bg-lime-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime-500 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-lime-600 group-hover:text-white transition-colors">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-black text-gray-900 mb-1 tracking-tight">Call Us</h3>
                            <p className="text-sm text-gray-500 font-bold">+49 (0) 123 456789</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-lime-500 transition-all group cursor-pointer">
                            <div className="w-12 h-12 bg-lime-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime-500 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-lime-600 group-hover:text-white transition-colors">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-lg font-black text-gray-900 mb-1 tracking-tight">Email Us</h3>
                            <p className="text-sm text-gray-500 font-bold">info@novaservice.de</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-lime-500 transition-all group cursor-pointer">
                            <div className="w-12 h-12 bg-lime-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime-500 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-lime-600 group-hover:text-white transition-colors">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <h3 className="text-lg font-black text-gray-900 mb-1 tracking-tight">Headquarters</h3>
                            <p className="text-sm text-gray-500 font-bold">Berlin, Germany</p>
                        </div>
                    </div>

                    {/* Interactive Map Section */}
                    <div className="w-full p-4 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-100 border border-gray-50 mb-16 overflow-hidden">
                        <div className="h-80 md:h-[450px] rounded-[1.8rem] overflow-hidden">
                            <MapContainer center={[51.1657, 10.4515]} zoom={6} className="w-full h-full" scrollWheelZoom={true}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <OfficeMarker />
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Celebration Overlay */}
            {showCelebration && (
                <div className="fixed inset-0 pointer-events-none z-[1100] flex items-center justify-center backdrop-blur-sm bg-white/10 overflow-hidden">
                    <Lottie
                        animationData={celebrationsAnimation}
                        loop={false}
                        autoplay={true}
                        onComplete={() => setShowCelebration(false)}
                        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
                    />
                </div>
            )}
        </div>
    );
};

export default Contact;