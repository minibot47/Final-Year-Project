import React from 'react'
import './Dashboard.css'
import dashboardicon from '../images/dashboard.png'
import animalicon from '../images/animal.png'
import settingicon from '../images/settings.png'
import logouticon from '../images/logout.png'
import dogpaw from '../images/dogpaw.png'
import dogpaw2 from '../images/dogpaw.png'
import not from "../images/not.png"
import profile from "../images/profile.png"
import chart from "../images/chart1.png"
import chart1 from "../images/chart2.png"


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
            <div className='rightdashboard'>
                <div className='innerrightdashboard'>
                    <div className='innerrightdashboardtop'>
                        <div className='dashboardtopleft'>
                            <h2 className='dashboardpage'>Home  <span className='bluedashboard'> > Dashboard</span></h2>
                            <h1 className='dashboardpagetop'>Dashboard</h1>
                        </div>
                        <div className='dashboardtopright'>
                            <img src={not}/>
                            <img src={profile}/>

                        </div>

                    </div>
                    

                    <div className='dashboardanimalcount'>
                        <div className='innerdashboardanimalcount'>
                            <div className='innerdashboardanimalcounttexts'>
                                <img src={dogpaw} alt='img'/>
                                <p>Total Number of Animals</p>
                                <p>500</p>
                            </div>


                        </div>
                        <div className='innerdashboardanimalcount2'>
                            <div className='innerdashboardanimalcount2texts'>
                                <img src={dogpaw2} alt='img'/>
                                <p>Species Distribution</p>
                                <p>200</p>
                            </div>

                        </div>

                    </div>
                    <div className='dashboardchart'>
                        <img src={chart}/>
                        <img src={chart1}/>
                            

                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Dashboard