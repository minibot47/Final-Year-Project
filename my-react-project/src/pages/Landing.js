import React from 'react'
import "./Landing.css";
import { Link, useNavigate } from "react-router-dom";
import Cat from "../images/Cat.png";
import dog from "../images/Dog.png";

const Landing = () => {
  return (
    <div className='Landing-page'>
        <div className='navbar'>
            <h1>Livestock</h1>
            <div className='nav-right'>
                <ul>
                    <li><button>Home</button></li>
                    <li><button>About-Us</button></li>
                    <li><button>Services</button></li>
                    <li><button>Contact</button></li>
                    <li className='signup-button'>
                        <Link to ="/signup">
                            <button className='sign-up'>Sign Up</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='firstpage'>
            <div className='firstpage-left'>
                <div>
                    <img src={Cat} alt="chart" />
                    <img src={dog} alt="chart" />
                </div>
                <div>
                    <h1>Monitor your Animals with our <span >Intuitive Web Application</span></h1>
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

    </div>
  )
}

export default Landing