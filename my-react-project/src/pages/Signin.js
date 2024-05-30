import React from 'react'
import './Signin.css'
import { Link } from 'react-router-dom';
import Cat from '../images/Cat.png';

const Signin = () => {
  return (
    <>
    <div className='signin'>
      <div className='leftsignin'>
        <div>
          
          <form method='post'>
            <div className='signintop'>Sign In</div>
            <label>
              Email <br></br>
              <input type='email' placeholder='Enter Email Address'></input>
            </label>
            <label>
              Password <br></br>
              <input type='password' placeholder='Enter Password'></input>
            </label>
            <Link to='/Dashboard'><button className='signinbutton'>Sign In</button></Link>
            <div className='signinbottom'>Don't have an account? <Link to='/Signup'><button className='signinbutton'>Sign up</button></Link></div>
            
          </form>
        </div>
      </div>
      <div className='rightsignin'>
        <img src={Cat} alt='dog image'/>
      </div>
      
    </div></>
  )
}

export default Signin