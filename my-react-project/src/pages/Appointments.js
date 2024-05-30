// src/Appointments.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Appointments.css';
import './fonts.css'
import not from '../images/not.png';
import profile from '../images/profile.png';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [reminder, setReminder] = useState('');

  const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [reminder, setReminder] = useState('');}
  
    const handleReminderChange = (event) => {
      setReminder(event.target.value);
    };
  

  return (
    <div className='Appointments'>
      <div className='innerrightAppointmentstop'>
        <div className='Appointmentsstopleft'>
          <h2 className='Appointmentspage'>Home {'>'} <span className='blueAppointments'> Appointment</span></h2>
          <div className='Appointmentshealthtop'>
            <h1 className='Appointmentspagetop'>Appointment</h1>
            <div className='Appointmentshealth'>
            </div>
          </div>
        </div>
        <div className='Appointmentstopright'>
          <img src={not} alt="notifications"/>
          <img src={profile} alt="profile"/>
        </div>
      </div>
      <div className='Appoinmentsbody'>
        <h2>Date of last Treatment</h2>
        <div className='date-picker-container'>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="SELECT A DATE"
            className="date-picker"
          />
        </div>
        <h2>Available Time slots (Monday to Friday)</h2>
        <div className='timeslots'>
          <div className='timeslot1'>
            <button>9:00AM</button>
          </div>
          <div className='timeslot2'>
            <button>10:00AM</button>
          </div>
          <div className='timeslot3'>
            <button>11:00AM</button>
          </div>
          <div className='timeslot4'>
            <button>12:00AM</button>
          </div>
          <div className='timeslot5'>
            <button>1:00PM</button>
          </div>
          <div className='timeslot6'>
            <button>2:00PM</button>
          </div>
          <div className='timeslot7'>
            <button>3:00PM</button>
          </div>
          <div className='timeslot8'>
            <button>4:00PM</button>
          </div>

        </div>
        <h2>Reminder</h2>
        <div className='reminder-dropdown-container'>
          <select value={reminder} onChange={handleReminderChange} className='reminder-dropdown'>
            <option value="" disabled>Set Reminder</option>
            <option value="exact-date">Exact Date</option>
            <option value="24-hours">24 Hours</option>
            <option value="48-hours">48 Hours</option>
            <option value="72-hours">72 Hours</option>
            <option value="1-week">1 Week</option>
          </select>
        </div>
        <h2>Mode of Meeting</h2>
        <div className='modeofmeeting'>
          <div className='meeting'>
            <button>Physical</button>
          </div>
          <div className='meeting'>
            <button>Virtual</button>
          </div>
        </div>
        <div className='bookappoinment'>
          <button type='submit'>Book Appointment</button>
        </div>

      </div>
    </div>
  );
};

export default Appointments;
