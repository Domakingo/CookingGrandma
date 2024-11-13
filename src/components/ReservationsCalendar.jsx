import './ReservationsCalendar.css';
import CalendarDay from './CalendarDay';
import { useState } from 'react';

function ReservationsCalendar() {
    const weekDays = ['DOM', 'LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'];
    const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => {
            if (prevMonth === 0) {
                setCurrentYear(currentYear - 1);
                return 11;
            }
            return prevMonth - 1;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => {
            if (prevMonth === 11) {
                setCurrentYear(currentYear + 1);
                return 0;
            }
            return prevMonth + 1;
        });
    };

    const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Calcola i giorni necessari dal mese precedente per completare la prima settimana
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPreviousMonth = getDaysInMonth(previousMonth, previousMonthYear);
    const daysFromPrevMonth = firstDayOfMonth;

    // Numero totale di celle: 40 per una griglia 5x8
    const totalCells = 40;

    return (
        <>
            <div className="calendarControls">
                <button onClick={handlePrevMonth}>Previous</button>
                <p>{`${monthNames[currentMonth]} ${currentYear}`}</p>
                <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className="reservations-calendar">
                {weekDays.map((day, index) => (
                    <div key={index} className="calendar-header">{day}</div>
                ))}
                {Array.from({ length: totalCells }, (_, index) => {
                    let monthDay;
                    let isCurrentMonth = false;

                    if (index < daysFromPrevMonth) {
                        // Giorni del mese precedente
                        monthDay = daysInPreviousMonth - daysFromPrevMonth + index + 1;
                    } else if (index < daysFromPrevMonth + daysInCurrentMonth) {
                        // Giorni del mese corrente
                        monthDay = index - daysFromPrevMonth + 1;
                        isCurrentMonth = true;
                    } else {
                        // Giorni del mese successivo
                        monthDay = index - daysFromPrevMonth - daysInCurrentMonth + 1;
                    }

                    return (
                        <CalendarDay
                            key={index}
                            monthDay={monthDay}
                            isCurrentMonth={isCurrentMonth}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ReservationsCalendar;
