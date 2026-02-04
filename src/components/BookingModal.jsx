import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CustomCalendar from './CustomCalendar';

const InputField = ({ label, name, type, value, onChange, placeholder, icon, required = false }) => (
    <div className="flex flex-col gap-0.5 w-full">
        <label className="text-[9px] font-bold uppercase tracking-wider text-gray-400 ml-1">
            {label}
        </label>
        <div className="relative group">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-lime-500 transition-colors duration-200">
                {icon}
            </div>
            <input
                type={type}
                name={name}
                required={required}
                placeholder={placeholder}
                className="w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-gray-100 rounded-xl text-xs text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-lime-500 focus:bg-white transition-all duration-200 shadow-sm group-hover:border-gray-200"
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

const BookingModal = ({ isOpen, onClose, selectedService, selectedDate }) => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        date: selectedDate || '',
        time: '',
        service: selectedService || ''
    });
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        if (showCalendar) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showCalendar]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGetCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert(t('booking.geoError'));
            return;
        }

        setIsLoadingLocation(true);
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                const data = await response.json();
                const address = data.display_name;
                setFormData(prev => ({ ...prev, location: address }));
            } catch (error) {
                setFormData(prev => ({ ...prev, location: `${latitude}, ${longitude}` }));
            } finally {
                setIsLoadingLocation(false);
            }
        }, (error) => {
            setIsLoadingLocation(false);
            alert(t('booking.locationError'));
        });
    };

    const handleOpenMap = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=address', '_blank');
        alert(t('booking.mapAlert'));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const businessPhoneNumber = "491707864074";
        const message = i18n.language === 'DE'
            ? `Hallo, ich möchte einen Termin buchen.
Name: ${formData.name}
Telefon: ${formData.phone}
Standort: ${formData.location}
Datum: ${formData.date}
Uhrzeit: ${formData.time}
Service: ${formData.service || selectedService}`
            : `Hi, I want to book an appointment.
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Date: ${formData.date}
Time: ${formData.time}
Service: ${formData.service || selectedService}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="relative bg-white w-full max-w-[460px] flex flex-col rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-300 ease-out"
                onClick={e => e.stopPropagation()}
            >
                <div className="h-1.5 w-full bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 shrink-0 rounded-t-[2rem]" />

                <div className="p-6 sm:p-8">
                    <button
                        className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
                        onClick={onClose}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="mb-6">
                        <h2 className="text-2xl font-serif font-black text-gray-900 tracking-tight mb-0.5">
                            {t('booking.title')} <span className="text-lime-600 italic font-light">{t('booking.titleHighlight')}</span>
                        </h2>
                        <p className="text-gray-500 text-[10px] sm:text-xs font-medium leading-relaxed">
                            {t('booking.subtitle')}
                        </p>
                    </div>

                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-3">
                            <InputField
                                label={t('booking.nameLabel')}
                                name="name"
                                type="text"
                                required
                                placeholder={t('booking.namePlaceholder')}
                                value={formData.name}
                                onChange={handleChange}
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                }
                            />

                            <InputField
                                label={t('booking.phoneLabel')}
                                name="phone"
                                type="tel"
                                required
                                placeholder={t('booking.phonePlaceholder')}
                                value={formData.phone}
                                onChange={handleChange}
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                }
                            />
                        </div>

                        <div className="flex flex-col gap-0.5 w-full">
                            <label className="text-[9px] font-bold uppercase tracking-wider text-gray-400 ml-1">
                                {t('booking.locationLabel')}
                            </label>
                            <div className="relative group">
                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-lime-500 transition-colors duration-200">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    placeholder={t('booking.locationPlaceholder')}
                                    className="w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-gray-100 rounded-xl text-xs text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-lime-500 focus:bg-white transition-all duration-200 shadow-sm group-hover:border-gray-200"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                {isLoadingLocation && (
                                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                                        <div className="animate-spin rounded-full h-3 w-3 border-2 border-lime-500 border-t-transparent"></div>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={handleGetCurrentLocation}
                                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-gray-50 hover:bg-lime-50 text-gray-500 hover:text-lime-600 text-[9px] font-bold rounded-lg border border-gray-100 hover:border-lime-100 transition-all duration-200"
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    {t('booking.currentLocation')}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleOpenMap}
                                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-500 hover:text-blue-600 text-[9px] font-bold rounded-lg border border-gray-100 hover:border-blue-100 transition-all duration-200"
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                    </svg>
                                    {t('booking.viewMap')}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-0.5 w-full relative" ref={calendarRef}>
                                <label className="text-[9px] font-bold uppercase tracking-wider text-gray-400 ml-1">
                                    {t('booking.dateLabel')}
                                </label>
                                <div
                                    onClick={() => setShowCalendar(!showCalendar)}
                                    className="relative group cursor-pointer"
                                >
                                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-lime-500 transition-colors duration-200">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                    <div className="w-full pl-10 pr-3 py-2 bg-gray-50/50 border border-gray-100 rounded-xl text-xs text-gray-900 transition-all duration-200 shadow-sm group-hover:border-gray-200 min-h-[34px] flex items-center">
                                        {formData.date ? new Date(formData.date).toLocaleDateString() : t('booking.datePlaceholder')}
                                    </div>
                                </div>
                                {showCalendar && (
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-[1100]">
                                        <CustomCalendar
                                            selectedDate={formData.date}
                                            onDateSelect={(dateStr) => {
                                                setFormData(prev => ({ ...prev, date: dateStr }));
                                                setShowCalendar(false);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                            <InputField
                                label={t('booking.timeLabel')}
                                name="time"
                                type="time"
                                required
                                value={formData.time}
                                onChange={handleChange}
                                icon={
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                }
                            />
                        </div>

                        <InputField
                            label={t('booking.serviceLabel')}
                            name="service"
                            type="text"
                            placeholder={t('booking.servicePlaceholder')}
                            value={formData.service || selectedService}
                            onChange={handleChange}
                            icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                </svg>
                            }
                        />

                        <button
                            type="submit"
                            className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold rounded-xl hover:brightness-105 transition-all shadow-lg shadow-green-100 uppercase tracking-widest text-[10px]"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {t('booking.submitButton')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
