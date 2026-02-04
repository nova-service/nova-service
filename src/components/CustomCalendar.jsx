import React, { useState, useMemo } from 'react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addDays,
    eachDayOfInterval,
    getDay,
    startOfToday
} from 'date-fns';

const CustomCalendar = ({ selectedDate, onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const today = startOfToday();

    const selected = useMemo(() => {
        return selectedDate ? new Date(selectedDate) : null;
    }, [selectedDate]);

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToToday = () => setCurrentMonth(today);

    const getOffer = (date) => {
        const dayOfWeek = getDay(date);
        const offers = {
            1: '10%',
            2: '5%',
            3: '10%',
            6: '4%',
            0: '10%'
        };
        return offers[dayOfWeek] || null;
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-col gap-2 mb-3">
                <div className="bg-[#333] rounded-lg px-2 py-1.5 flex items-center justify-between text-white shadow-sm">
                    <button onClick={prevMonth} className="p-1 hover:bg-white/10 rounded transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <span className="text-[11px] font-bold uppercase tracking-wider">{format(currentMonth, 'MMMM yyyy')}</span>
                    <button onClick={nextMonth} className="p-1 hover:bg-white/10 rounded transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
        return (
            <div className="grid grid-cols-7 mb-1">
                {days.map(day => (
                    <div key={day} className="text-center text-[9px] font-bold text-gray-400 uppercase">{day}</div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
        const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

        const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

        const rows = [];
        let days = [];

        calendarDays.forEach((day, i) => {
            const offer = getOffer(day);
            const isCurrentMonth = isSameMonth(day, monthStart);
            const isSelected = selected && isSameDay(day, selected);
            const isPast = day < today && !isSameDay(day, today);

            days.push(
                <div
                    key={day.toString()}
                    className={`relative aspect-square border-[0.5px] border-gray-50 flex flex-col items-center justify-center transition-all cursor-pointer
            ${!isCurrentMonth ? 'bg-gray-50/20 text-gray-300' : 'bg-white text-gray-700'}
            ${isSelected ? 'bg-lime-500 border-lime-600 z-10 shadow-md text-white scale-105' : ''}
            ${!isSelected && offer && isCurrentMonth && !isPast ? 'bg-[#f7fee7]' : ''}
            ${isPast ? 'opacity-20 cursor-not-allowed' : 'hover:bg-lime-50'}
          `}
                    onClick={() => !isPast && onDateSelect(format(day, 'yyyy-MM-dd'))}
                >
                    <span className={`text-[11px] font-bold ${isSelected ? 'text-white' : ''}`}>
                        {format(day, 'd')}
                    </span>
                    {offer && isCurrentMonth && !isPast && (
                        <span className={`text-[7px] font-black leading-none uppercase mt-0.5
              ${isSelected ? 'text-white' : 'text-lime-600'}`}>
                            {offer}
                        </span>
                    )}
                </div>
            );

            if ((i + 1) % 7 === 0) {
                rows.push(<div className="grid grid-cols-7" key={day.toString()}>{days}</div>);
                days = [];
            }
        });

        return <div className="rounded-lg overflow-hidden border border-gray-100">{rows}</div>;
    };

    return (
        <div className="w-[260px] sm:w-[280px] bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
            <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-[#f7fee7] rounded-full border border-lime-200"></div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Offers</span>
                </div>
                <button onClick={goToToday} className="text-[9px] font-bold text-lime-600 uppercase hover:underline">Go to Today</button>
            </div>
        </div>
    );
};

export default CustomCalendar;
