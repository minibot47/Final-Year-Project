import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css'
import not from '../images/not.png';
import profile from '../images/profile.png';

const Settings = () => {
  return (
    <div className='Settings'>
      <div className='innerrightAppointmentstop'>
        <div className='Appointmentsstopleft'>
          <h2 className='Appointmentspage'>Home {'>'} <span className='blueAppointments'> Setting</span></h2>
          <div className='Appointmentshealthtop'>
            <h1 className='Appointmentspagetop'>Setting</h1>
            <div className='Appointmentshealth'>
            </div>
          </div>
        </div>
        <div className='Appointmentstopright'>
          <img src={not} alt="notifications"/>
          <img src={profile} alt="profile"/>
        </div>
      </div>


    </div>
  )
}

export default Settings