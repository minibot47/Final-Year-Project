import React from 'react'
import './Signin.css'
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
            <button className='signinbutton'>Sign In</button>
            <div className='signinbottom'>Don't have an account? <a href='#'>Sign up</a></div>
            
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