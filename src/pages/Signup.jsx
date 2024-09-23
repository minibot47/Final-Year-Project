import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dog from "../images/Dog.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { ThreeDots } from "react-loader-spinner";
import OTPModal from "../components/otp-modal/OtpModal";
import logo from '../images/livestockwatchicon.png';

const Signup = () => {
  const navigate = useNavigate();
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const { fullname, email, password, confirmPassword } = signUpData;
    if (!fullname) return "Fullname is required";
    if (!email) return "Email is required";
    if (!password) return "Password is required";
    if (password !== confirmPassword) return "Passwords do not match";
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
    //SETTING TO FORM DATA
    const formDataObj = new FormData();
    formDataObj.append("fullname", signUpData.fullname);
    formDataObj.append("email", signUpData.email);
    formDataObj.append("password", signUpData.password);

    try {
      const response = await axios.post(
        `${baseUrl}/authenticate/register_user.php`,
        formDataObj,
        {
          headers: {
            // "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      console.log(response?.data);
      if (response?.data?.response === true) {
        setShowOTPModal(true);
        // Save user ID and OTP code in session storage
        toast.success("Signup successful!");
        sessionStorage.setItem("userData", response?.data.userid);
        //  sessionStorage.setItem('otpCode', data.otpCode);
      }

      console.log("Sign up successful!");
      // Handle successful sign up here, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error("Signup failed. Please try again.");
      // Handle error, e.g., show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  const handleOTPVerifySuccess = () => {
    // Handle successful OTP verification, e.g., navigate to login page
    navigate("/signIn");
    console.log("OTP verified successfully, redirecting to login...");
  };

  return (
    <>
      <div className="signup-wrapper">
      <div className="backhome">
                      <Link to="/">
                      <button className="backhomebutton">Homepage</button>
                      </Link>
                    </div> 
        <div className="signup">
          <div className="leftsignup">
            <div>
              <form onSubmit={handleSignUp} method="">
              <img src={logo} alt="logo"/>
                <div className="signuptop">Create an account</div>
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
                    min={7}
                    value={signUpData.password}
                    onChange={handleChange}
                    className={signUpData.password ? "filled" : ""}
                  />
                </label>
                <label>
                  Confirm Password <br />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={signUpData.confirmPassword}
                    onChange={handleChange}
                    min={7}
                    className={signUpData.confirmPassword ? "filled" : ""}
                    placeholder="Re-Enter Password"
                  />
                </label>

                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  type="submit"
                  className="signupbutton"
                  disabled={loading}
                >
                  {loading ? (
                    <ThreeDots
                      type="ThreeDots"
                      color="#000"
                      height={30}
                      width={30}
                    />
                  ) : (
                    "Sign-Up"
                  )}
                </button>
                <div className="signupbottom">
                  Already have an account?{" "}
                  <Link to="/Signin">
                    <button type="button" className="signinbutton">
                      Sign-In
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