import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import dashboardicon from "../images/dashboard.png";
import animalicon from '../images/animal.png';
import settingicon from '../images/settings.png';
import logouticon from '../images/logout.png';
import dogpaw from '../images/dogpaw.png';
import not from "../images/not.png";
import profile from "../images/profile.png";
import chart from "../images/chart1.png";
import chart1 from "../images/chart2.png";
import appointmenticon from '../images/appointment.png';
import Animals from './Animals';
import Appointments from "./Appointments.js";
import Settings from './Settings.js';
import elipses from "../images/elipses vertical.png"

const Dashboard = () => {
  const [view, setView] = useState('dashboard');
  useEffect(() => {

  sessionStorage.getItem('tokenObj')
  console.log(sessionStorage.getItem('tokenObj'))git
 
  }, []);


  return (
    <div className='Dashboard'>
      <div className='main'>
        <div className='leftdashboard'>
          <div>
            <p>Livestock</p>
            <div className='leftdashboardbuttons'>
              <label>
                <img src={dashboardicon} alt='img'/>
                <button onClick={() => setView('dashboard')}>Dashboard</button>
              </label>
              <label>
                <img src={animalicon} alt='img'/>
                <button onClick={() => setView('animals')}>Animals</button>
              </label>
              <label>
                <img src={appointmenticon} alt='img'/>
                <button onClick={() => setView('appointments')}>Appointments</button>
              </label>
              <label>
                <img src={settingicon} alt='img'/>
                <button onClick={() => setView('settings')}>Settings</button>
              </label>
            </div>
          </div>
          <div className='leftdashboardbuttonsbottom'>
            <label className='logoutbutton'>
              <img src={logouticon} alt=''/>
              <Link to='/Signin'>
              <button>LOGOUT</button>
              </Link>
            </label>
          </div>
        </div>
        <div className='rightdashboard'>
          {view === 'dashboard' && (
            <div className='innerrightdashboard'>
              <div className='innerrightdashboardtop'>
                <div className='dashboardtopleft'>
                  <h2 className='dashboardpage'>Home {">"} <span className='bluedashboard'>  Dashboard</span></h2>
                  <h1 className='dashboardpagetop'>Dashboard</h1>
                </div>
                <div className='dashboardtopright'>
                  <img src={not} alt="notifications"/>
                  <img src={profile} alt="profile"/>
                </div>
              </div>
              <div className='dashboardanimalcount'>
                <div className='innerdashboardanimalcount'>
                  <div className='innerdashboardanimalcounttexts'>
                    <img src={dogpaw} alt='img'/>
                    <p>Total No of Animals</p>
                    <span>10,000</span>
                  </div>
                </div>
                <div className='innerdashboardanimalcount2'>
                  <div className='innerdashboardanimalcount2texts'>
                    <img src={dogpaw} alt='img'/>
                    <p>Species Distribution</p>
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className='dashboardchart'>
                <img src={chart} alt="chart"/>
                <img src={chart1} alt="chart"/>
              </div>
              <div className='Animalcharttable'>
                <div className='Animalcharttable-top'>
                  <h2>Livestock</h2>
                  <button onClick={() => setView('animals')}>See all {'>'}</button>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Specie</th>
                      <th>Status</th>
                      <th>Last Treatment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Cow</td>
                      <td>Healthy</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Pig</td>
                      <td>Weak</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {view === 'animals' && <Animals />}
          {view === 'appointments' && <Appointments />}
          {view === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
