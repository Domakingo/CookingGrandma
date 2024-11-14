import './CalendarDay.css';

function CalendarDay({ monthDay, weekDay, isCurrentMonth, hasEvents }) {
    return (
        <div className={`calendar-day ${isCurrentMonth ? 'current-month' : 'other-month-day'}`}>
            <div className={hasEvents ? 'events' : 'noEvents'}></div>
            <span className="monthDay">{monthDay}</span>
            <span className="weekDay">{weekDay}</span>
        </div>
    );
}

export default CalendarDay;
