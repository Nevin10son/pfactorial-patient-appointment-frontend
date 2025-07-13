import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calender.css';

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointmentsByDate, setAppointmentsByDate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('appointments')) || {};
    setAppointmentsByDate(stored);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const firstDayIndex = (firstDay.getDay() + 6) % 7; 
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

const formatDate = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

  return (
    <div className="calendar-container">
      <h2>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h2>

      <div className="calendar-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div className="calendar-header" key={day}>{day}</div>
        ))}

        {weeks.map((week, wi) =>
          week.map((date, di) => {
            const formatted = date ? formatDate(date) : null;
            const appointments = formatted && appointmentsByDate[formatted];

            return (
              <div
                key={`${wi}-${di}`}
                className="calendar-cell"
                onClick={() => date && navigate(`/appointments/${formatted}`)}
              >
                {date && <div className="cell-date">{date.getDate()}</div>}

                {appointments && appointments.slice(0, 3).map((appt, i) => (
                  <div key={i} className="cell-appointment">
                    {appt.time} - {appt.patient}
                  </div>
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Calender;
