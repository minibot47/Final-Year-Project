import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dog from "../images/Dog.png";
import Modal from "./Modal";
import Timer from "./Timer"; // Import the Timer component
import "./Signup.css";
import eyes from "../images/logout.png";

const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [code, setCode] = useState("");

  const handleOtpChange = (e) => {
    setCode(e.target.value);
  };

  console.log(code);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSignUp = async (e) => {
    // Add your sign up logic here
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("fullname", signUpData.fullname);
    formDataObj.append("email", signUpData.email);
    formDataObj.append("password", signUpData.password);

    try {
      const response = await axios.post(
        "http://localhost/livestockbackend/authenticate/register_user.php",
        formDataObj,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
            "Accept": "application/json",

          },
        }
      );
      console.log(
        response?.data
      )
      if (response?.data?.response === true) {
        // Save user ID and OTP code in session storage
        sessionStorage.setItem("userData", response?.data.userid);

        //  sessionStorage.setItem('otpCode', data.otpCode);
        setShowModal(true);
      }

      console.log("Sign up successful!");
      // Handle successful sign up here, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error during sign up:", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  const navigate = useNavigate()

  const handleVerify = async (e) => {
    e.preventDefault();
    // console.log("selina tested");
    try {
      const userId = sessionStorage.getItem("userData");
      console.log(userId);
      console.log({
        userid: userId,
        code: code,
        // code: Number(code),
      });
      const response = await axios.post(
        "http://localhost/livestockbackend/authenticate/verify_user.php",

        {
          userid: userId,
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
       if (response?.data?.response === true) {
        navigate('/signIn')
      }
      // Handle successful sign up here, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error during sign up:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTimerComplete = () => {
    // Logic when timer completes
    console.log("Timer completed!");
  };

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup">
          <div className="leftsignup">
            <div>
              <form onSubmit={handleSignUp} method="">
                <div className="signuptop">Sign Up</div>
                <label>
                  Name <br />
                  <input
                    type=" text"
                    placeholder="Enter Full Name"
                    name="fullname"
                    value={signUpData.fullname}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email <br />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    value={signUpData.email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Password <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={signUpData.password}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Confirm Password <br />
                  <input type="password" placeholder="Re-Enter Password" />
                </label>
                <button type="submit" className="signupbutton">
                  Sign Up
                </button>
                <div className="signupbottom">
                  Already have an account?{" "}
                  <Link to="/Signin">
                    <button type="button" className="signinbutton">
                      Sign In
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="rightsignup">
            <img src={dog} alt="dog" />
          </div>
        </div>
        <Modal show={showModal} handleClose={handleCloseModal}>
          <form className="modalstuff" onSubmit={handleVerify}>
            <h1>OTP VERIFICATION</h1>
            <h2>Please Enter the 6-Digit code sent to your email</h2>
            <div className="modalinput">
              <input
                name="code"
                value={code}
                onChange={handleOtpChange}
                type="password"
              ></input>
            </div>
            <button type="submit">Verify</button>
            <h3>
              Didn't receive code? <a href="/">Resend code</a>
            </h3>
            <Timer initialSeconds={180} onComplete={handleTimerComplete} />{" "}
            {/* Timer component */}
          </form>
          {/* <button onClick={handleCloseModal}>Close</button> */}
        </Modal>
      </div>
    </>
  );
};

export default Signup;
