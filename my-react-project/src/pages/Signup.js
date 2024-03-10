import React from 'react'
import dog from '../images/Dog.png'
import './Signup.css'
import eyes from '../images/logout.png'

const Signup = () => {
  return (
    <>
    <div className='signup'>
      <div className='leftsignup'>
        <div>
          
          <form>
            <div className='signuptop'>Sign Up</div>
            <label>
              Name <br></br>
              <input type='name' placeholder='Enter Full Name' required></input>
            </label>
            <label>
              Email <br></br>
              <input type='email' placeholder='Enter Email Address' required></input>
            </label>
            <label>
              Password <br></br>
              <input type='password' placeholder='Enter Password' required></input>
            </label>
            <label>
              Confirm Password <br></br>
              <input type='password' placeholder='RE-Enter Password' required></input>
            </label>
            <button className='signupbutton'>Sign Up</button>
            <div className='signupbottom'>Already have an account? <a href='#'>Sign up</a></div>
            
          </form>
        </div>
      </div>
      <div className='rightsignup'>
        <img src={dog} alt='dog image'/>
      </div>
      
    </div>
    
    </>
  )
}

export default Signup