import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AppointmentBook.css';

const AppointmentBook = () => {
  const { date } = useParams();

  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ patient: '', doctor: '', time: '' });
  const [edit, setEdit] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const patients = ['Manu', 'Shyam', 'Vimal'];
  const doctors = ['Dr. Clara', 'Dr. Strange', 'Dr. Rose'];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('appointments')) || {};
    setAppointments(stored[date] || []);
  }, [date]);

  const updateLocalStorage = (newAppointments) => {
    const all = JSON.parse(localStorage.getItem('appointments')) || {};
    all[date] = newAppointments;
    localStorage.setItem('appointments', JSON.stringify(all));
    setAppointments(newAppointments);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrEdit = () => {
    if (!formData.patient || !formData.doctor || !formData.time) return;

    let updated;
    if (edit !== null) {
      updated = [...appointments];
      updated[edit] = formData;
      setEdit(null);
    } else {
      updated = [...appointments, formData];
    }

    updateLocalStorage(updated);
    setFormData({ patient: '', doctor: '', time: '' });
  };

  const handleEdit = (index) => {
    setFormData(appointments[index]);
    setEdit(index);
  };

  const handleDelete = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    updateLocalStorage(updated);
  };

  return (
    <div className={`appt-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="appt-header">
        <h2>Appointments for {date}</h2>
        <button onClick={() => setDarkMode(!darkMode)} className="appt-dark-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="appt-form">
        <select name="patient" value={formData.patient} onChange={handleChange}>
          <option value="">Select Patient</option>
          {patients.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>

        <select name="doctor" value={formData.doctor} onChange={handleChange}>
          <option value="">Select Doctor</option>
          {doctors.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>

        <input type="time" name="time" value={formData.time} onChange={handleChange} />

        <button className="appt-submit" onClick={handleAddOrEdit}>
          {edit !== null ? 'Update' : 'Add'} Appointment
        </button>
      </div>

      <hr />

      {appointments.length === 0 ? (
        <p className="appt-empty">No appointments yet.</p>
      ) : (
        <ul className="appt-list">
          {appointments.map((appt, index) => (
            <li key={index} className="appt-item">
              <span className="appt-info"><strong>{appt.time}</strong> - {appt.patient} with {appt.doctor}</span>
              <div className="appt-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentBook;
