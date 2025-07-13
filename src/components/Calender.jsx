import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calender.css'; 

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); 

  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7; 

  const daysInMonth = new Date(year, month + 1, 0).getDate(); 

  const calendarDays = [];

  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(new Date(year, month, d));
  }

  while (calendarDays.length % 7 !== 0) {
    calendarDays.push(null);
  }

  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  const handleDateClick = (date) => {
    const formatted = date.toISOString().split('T')[0];
    navigate(`/appointments/${formatted}`);
  };

  return (
    <div className="calendar-container">
      <h2>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h2>
      <div className="calendar-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div className="calendar-header" key={day}>{day}</div>
        ))}

        {weeks.map((week, wi) =>
          week.map((date, di) => (
            <div 
              className="calendar-cell" 
              key={`${wi}-${di}`} 
              onClick={() => date && handleDateClick(date)}
              style={{ cursor: date ? 'pointer' : 'default' }}
            >
              {date ? <span>{date.getDate()}</span> : ''}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calender;
