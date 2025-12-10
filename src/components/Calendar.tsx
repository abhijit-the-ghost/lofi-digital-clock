import { useState, useEffect } from "react";

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 60000); // Update every minute
        return () => clearInterval(timer);
    }, []);

    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const currentDay = date.getDate();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const renderDays = () => {
        const calendarDays = [];

        // Empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="h-8 w-8 md:h-10 md:w-10" />);
        }

        // Days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === currentDay;
            calendarDays.push(
                <div
                    key={i}
                    className={`h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-full text-base md:text-lg font-[VT323] transition-all duration-300 ${isToday
                        ? "bg-primary text-primary-content scale-110 shadow-lg"
                        : "hover:bg-base-200 text-base-content"
                        }`}
                >
                    {i}
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-md">
            <div className="text-center">
                <h2 className="text-4xl font-[VT323] mb-1">
                    {months[date.getMonth()]}
                </h2>
                <p className="text-xl font-[VT323] opacity-60">
                    {date.getFullYear()}
                </p>
            </div>

            <div className="w-full">
                <div className="grid grid-cols-7 mb-4">
                    {days.map((day) => (
                        <div key={day} className="text-center font-[VT323] opacity-50 font-bold">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-y-2 justify-items-center">
                    {renderDays()}
                </div>
            </div>

            <div className="text-2xl font-[VT323] mt-4 opacity-90">
                {days[date.getDay()]}, {months[date.getMonth()]} {currentDay}
            </div>
        </div>
    );
};

export default Calendar;
