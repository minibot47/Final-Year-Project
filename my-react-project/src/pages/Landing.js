import React, { useEffect, useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Cat from "../images/Cat.png"
import LandingPig from "../images/LandingpagePig.png";
import landingdog from "../images/big dog.png";
import userimg from "../images/user.png"
import paws from "../images/Paws.png"
import rabbit from "../images/rabbit.png"
import keylist1 from "../images/keylist1.png"
import keylist2 from "../images/keylist2.png"
import keylist3 from "../images/keylist3.png"
import keylist4 from "../images/keylist4.png"
import grid1 from "../images/grid1.png"
import grid2 from "../images/grid2.png"
import grid3 from "../images/grid3.png"
import grid4 from "../images/grid4.png"
import facebook from "../images/facebook.png"
import insta from "../images/Vector (1).png"
import twitter from "../images/Vector (3).png"
import youtube from "../images/Vector (4).png"
import google from "../images/Vector (2).png"
import logo from '../images/livestockwatchicon.png'
import menuicon from "../images/dashboardmenuitem.png"


const Landing = () => {
  const [showNav1, setShowNav1] = useState(false);
  const toggleNav1 = () => {
    setShowNav1(!showNav1);
    console.log('button clicked', showNav1)
  };

  return (
    <div className='landing-page'>
      <div className='navbar'>
        <img className="logomain" src={logo} alt="logo" />
        <h1>Livestock-Watch</h1>
        <div className="mobilemenu">
        <button className="mobilemenubutton" onClick={toggleNav1}><img src={menuicon} alt="img" /></button>
          <ol className={`mobilemenu-ol ${showNav1 ? 'show' : 'hide'}`}>
              <li className='signup-button'>
                <Link to="/signup">
                  <button className='sign-up'>Sign Up</button>
                </Link>
              </li>
              <li className='signup-button'>
                <Link to="/signin">
                  <button className='sign-up'>Sign In</button>
                </Link>
              </li>
          </ol> 
        </div>
        <div className='nav-right'>
          <ul>
            <li className="navhover"><button>Home</button></li>
            <li className="navhover">
              <HashLink smooth to="#thirdpage">
                <button>About-Us</button>
              </HashLink>
            </li>
            <li className="navhover">
              <HashLink smooth to="#fourthpage">
                <button>Services</button>
              </HashLink>
            </li>
            <li className="navhover">
              <HashLink smooth to="#sixthpage">
                <button>Contact</button>
              </HashLink>
            </li>
            <li className='signup-button'>
              <Link to="/signup">
                <button className='sign-up'>Sign Up</button>
              </Link>
            </li>
            <li className='signup-button'>
              <Link to="/signin">
                <button className='sign-up'>Sign In</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='firstpage'>
        <div className='firstpage-left'>
          <div>
            <img src={landingdog} alt="dog" />
            <img src={LandingPig} alt="chart" />
          </div>
          <div>
            <h1>Monitor your Animals with our <span>Intuitive Web Application</span></h1>
            <h4>We provide detailed health reports to help you make informed decisions about 
                your livestock, identify trends and prevent future health issues.
            </h4>
          </div>
          <div>
            <Link to="/signup">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
        <div className='firstpage-right'>
          <img src={Cat} alt="chart" />
        </div>
      </div>
      <div className='secondpage'>
        <div className='secondpage1'>
          <div className='img'>
            <img src={userimg} alt="chart" />
          </div>
          <div>
            <h2>100+</h2>
            <h4>Users</h4>
          </div>
        </div>
        <div className='secondpage2'>
          <div className='img'>
            <img src={paws} alt="chart" />
          </div>
          <div className='secondpage21'>
            <h2>200+</h2>
            <h4>Specie Distribution</h4>
          </div>
        </div>
        <div className='secondpage3'>
          <div className='img'>
            <img src={paws} alt="chart" />
          </div>
          <div className='secondpage31'>
            <h2>200+</h2>
            <h4>Specie Distribution</h4>
          </div>
        </div>
      </div>
      <div id='thirdpage' className='thirdpage'>
        <div>
          <h1>Why Choose our <span>System?</span></h1>
        </div>
        <div className='thirdpage-img'>
          <img src={rabbit} alt="chart" />
        </div>
        <div className='thirdpage-words'>
          <h4>
            We understand the critical importance of maintaining the health and well-being of your livestock. 
            Our innovative health monitoring system uses real-time temperature tracking to ensure your animals 
            are always at their best.
          </h4>
        </div>
      </div>
      <div id='fourthpage' className='fourthpage'>
      
        <div className='fourthpage-wrapper'>
          <div className='fourthpage-img'>
            <img src={landingdog} alt="chart" />
          </div>
          <div className='fourthpage-right'>
            <div className='keylists'>
              <h1>Key <span>Features</span></h1>
              <div className='keylists1'>
                <img src={keylist1} alt="chart" />
                <p>Real-Time Temperature Monitoring</p>
              </div>
              <div className='keylists1'>
                <img src={keylist2} alt="chart" />
                <p>Continuous health tracking with instant alerts for abnormal temperature readings.</p>
              </div>
              <div className='keylists1'>
                <img src={keylist3} alt="chart" />
                <p>Easy-to-use dashboard for quick insights into your herd's health status.</p>
              </div>
              <div className='keylists1'>
                <img src={keylist4} alt="chart" />
                <p>Vet Appointment Scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fifthpage'>
        <h1>How it <span>Works</span></h1>
        <div className='fifthpage-grid'>
          <div className='grid1'>
            <img src={grid1} alt="chart" />
            <h2>Attach Sensor</h2>
            <h1>Easily attach our temperature sensor to your animal.</h1>
          </div>
          <div className='grid2'>
            <img src={grid2} alt="chart" />
            <h2>Monitor Health</h2>
            <h1>Track your animal’s temperature in real-time through our platform.</h1>
          </div>
          <div className='grid3'>
            <img src={grid3} alt="chart" />
            <h2>Get Alerts</h2>
            <h1>Receive instant alerts if any temperature anomalies are detected.</h1>
          </div>
          <div className='grid4'>
            <img src={grid4} alt="chart" />
            <h2>Schedule Visits</h2>
            <h1>Book appointments with your vet directly through our system.</h1>
          </div>
        </div>
      </div>
      <div id='sixthpage' className='sixthpage'>
        <div className='sixthpage-top'>
          <div className='sixthinfo'>
            <h2>Hear how the system has made a difference for farmers just like you.</h2>
            <Link to="/signup">
              <button className="endbutton">Get Started Today</button>
            </Link>
          </div>
        </div>
        <div className='sixthpage-bottom'>
          <div className='sixthlivestock'>
            <h2>Live Stock</h2>
            <h3>
              We provide detailed health reports to help you make informed decisions about your livestock, 
              identify trends and prevent future health issues.
            </h3>
          </div>
          <div className='sixthcontact'>
            <h2>Contact Us</h2>
            <h2>Email</h2>
            <h3>toludairo534@gmail.com</h3>
            <h2>Phone</h2>
            <h3>09037976718</h3>
          </div>
          <div className='sixthlist'>
            <h2>Follow Us on</h2>
            <ul>
              <li> 
                <img src={insta} alt="chart" />
              </li>
              <li>
                <img src={facebook} alt="chart" />
              </li>
              <li>
                <img src={google} alt="chart" />
              </li>
              <li>
                <img src={twitter} alt="chart" />
              </li>
              <li>
                <img src={youtube} alt="chart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
