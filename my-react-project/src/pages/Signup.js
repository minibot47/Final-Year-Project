import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dog from '../images/Dog.png';
import Modal from './Modal';
import Timer from './Timer'; // Import the Timer component
import './Signup.css';
import eyes from '../images/logout.png';

const Signup = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    // Add your sign up logic here
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTimerComplete = () => {
    // Logic when timer completes
    console.log('Timer completed!');
  };

  return (
    <>
      <div className='signup'>
        <div className='leftsignup'>
          <div>
            <form onSubmit={handleSignUp}>
              <div className='signuptop'>Sign Up</div>
              <label>
                Name <br />
                <input type='text' placeholder='Enter Full Name'/>
              </label>
              <label>
                Email <br />
                <input type='email' placeholder='Enter Email Address' />
              </label>
              <label>
                Password <br />
                <input type='password' placeholder='Enter Password'/>
              </label>
              <label>
                Confirm Password <br />
                <input type='password' placeholder='Re-Enter Password'/>
              </label>
              <button type='submit' className='signupbutton'>Sign Up</button>
              <div className='signupbottom'>
                Already have an account? <Link to='/Signin'><button type='button' className='signinbutton'>Sign In</button></Link>
              </div>
            </form>
          </div>
        </div>
        <div className='rightsignup'>
          <img src={dog} alt='dog' />
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <div className='modalstuff'>
          <h1>OTP VERIFICATION</h1>
          <h2>Please Enter the 6-Digit code sent to your email</h2>
          <div className='modalinput'>
            <input type='password'></input>
          </div>
          <button type='submit'>Verify</button>
          <h3>Didn't receive code? <a href='/'>Resend code</a></h3>
          <Timer initialSeconds={180} onComplete={handleTimerComplete} /> {/* Timer component */}
        </div>
        {/* <button onClick={handleCloseModal}>Close</button> */}
      </Modal>
    </>
  );
};

export default Signup;