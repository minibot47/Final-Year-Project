import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dog from "../images/Dog.png";
import Modal from "./Modal";
import Timer from "./Timer"; // Import the Timer component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import{ThreeDots}from 'react-loader-spinner';
import eyes from "../images/logout.png";
import OTPModal from "../components/otp-modal/OtpModal";

const Signup = () => {
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);


  const [signUpData, setSignUpData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showOTPModal, setShowOTPModal] = useState(false);
  const [code, setCode] = useState("");



  const validateForm = () => {
    const { fullname, email, password, confirmPassword } = signUpData;
    if (!fullname) return 'Fullname is required';
    if (!email) return 'Email is required';
    if (!password) return 'Password is required';
    if (password !== confirmPassword) return 'Passwords do not match';
    return null;
};

const validateVerify = () =>{
  if (!code) return "Otp is Required";
  return null;
}

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
    const errorMessage = validateForm();
    if (errorMessage) {
        toast.error(errorMessage);
        return;
    }
    setLoading(true);
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
        setShowOTPModal(true);
        // Save user ID and OTP code in session storage
        toast.success('Signup successful!');
        sessionStorage.setItem("userData", response?.data.userid);
        //  sessionStorage.setItem('otpCode', data.otpCode);
        // setShowModal(true);
      }

      console.log("Sign up successful!");
      // Handle successful sign up here, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error('Signup failed. Please try again.');
      // Handle error, e.g., show an error message to the user
      } finally {
        setLoading(false);
        }
        };
        const navigate = useNavigate()
        
        const handleOTPVerifySuccess = () => {
  // Handle successful OTP verification, e.g., navigate to login page
                navigate('/signIn')
                // window.location.href = "/Dashboard";
    console.log('OTP verified successfully, redirecting to login...');
};
  // const handleVerify = async (e) => {
  //   e.preventDefault();
  //   const errorMessage = validateVerify();
  //   if (errorMessage) {
  //       toast.error(errorMessage);
  //       return;
  //   } 
  //   setOtpLoading(true);
  //   try {
  //     const userId = sessionStorage.getItem("userData");
  //     console.log(userId);
  //     console.log({
  //       userid: userId,
  //       code: code,
      
  //     });
  //     const response = await axios.post(
  //       "http://localhost/livestockbackend/authenticate/verify_user.php",

  //       {
  //         userid: userId,
  //         code: code,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //      if (response?.data?.response === true) {
  //       toast.success("Signed Up successfully"); 
  //       navigate('/signIn')
  //     }
  //     // Handle successful sign up here, e.g., redirect or show a success message
  //   } catch (error) {
  //     console.error("Error during verify:", error);
  //     toast.error('error during the verification')
  //     // Handle error, e.g., show an error message to the user
  //   }finally {
  //     setOtpLoading(false);
  // }
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // const handleTimerComplete = () => {
  //   // Logic when timer completes
  //   console.log("Timer completed!");
  // };











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
                    className={signUpData.fullname ? "filled" : ""}
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
                    className={signUpData.email ? "filled" : ""}
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
                    className={signUpData.password ? "filled" : ""}
                  />
                </label>
                <label>
                  Confirm Password <br />
                  <input type="password"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={handleChange}
                  className={signUpData.confirmPassword ? "filled" : ""}
                   placeholder="Re-Enter Password" />
                </label>
             
                 <button
                 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} type="submit" className="signupbutton" disabled={loading}>
                {loading ? (
                    <ThreeDots 
                        type="ThreeDots"
                        color="#000"
                        height={30}
                        width={30}
                    />
                ) : (
                    'Sign Up'
                )}
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
     <OTPModal 
                isOpen={showOTPModal} 
                onClose={() => setShowOTPModal(false)} 
                onVerifySuccess={handleOTPVerifySuccess}
            />
      </div>
    </>
  );
};

export default Signup;


{/* <Modal show={showModal} handleClose={handleCloseModal}>
<form className="modalstuff" onSubmit={handleVerify}>
{/* <ToastContainer /> */}

//   <h1>OTP VERIFICATION</h1>
//   <h2>Please Enter the 6-Digit code sent to your email</h2>
//   <div className="modalinput">
//     <input
//       name="code"
//       value={code}
//       onChange={handleOtpChange}
//       type="password"
//     ></input>
//   </div>
//   <button
//        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} type="submit" className="signupbutton" disabled={otpLoading} >
//       {otpLoading ? (
//           <ThreeDots 
//               type="ThreeDots"
//               color="#000"
//               height={30}
//               width={30}
//           />
//       ) : (
//           'Verify'
//       )}
//   </button>
//   <h3>
//     Didn't receive code? <a href="/">Resend code</a>
//   </h3>
//   <Timer initialSeconds={180} onComplete={handleTimerComplete} />{" "}
//   {/* Timer component */}
// </form>
// {/* <button onClick={handleCloseModal}>Close</button> */}
// </Modal> */}
