import React from 'react'
import './Dashboard.css'
import dashboardicon from '../images/dashboard.png'
import animalicon from '../images/animal.png'
import settingicon from '../images/settings.png'
import logouticon from '../images/logout.png'


const Dashboard = () => {
  return (
    <div className='Dashboard'>
        <div className='main'>
            <div className='leftdashboard'>
                <div>
                    <p>Livestock</p>
                    <div className='leftdashboardbuttons'>
                    <label>
                        <img src={dashboardicon} alt=''/>
                        Dashboard
                    </label>
                    <label>
                        <img src={animalicon} alt=''/>
                        Animals 
                    </label>
                    <label>
                        <img src={settingicon} alt=''/>
                        Setting
                    </label>

                </div>
                </div>
                
                <div className='leftdashboardbuttonsbottom' >
                    <label>
                        <img src={logouticon} alt=''/>
                        Logout
                    </label>
                </div>

            </div>
            <div className='rightdashboard'></div>
        </div>


    </div>
  )
}

export default Dashboard