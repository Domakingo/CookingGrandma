import './CalendarDay.css';

function CalendarDay({ monthDay, weekDay, isCurrentMonth }) {
    return (
        <div className={`calendar-day ${isCurrentMonth ? 'current-month' : 'other-month-day'}`}>
            <span className="monthDay">{monthDay}</span>
            <span className="weekDay">{weekDay}</span>
        </div>
    );
}

export default CalendarDay;
