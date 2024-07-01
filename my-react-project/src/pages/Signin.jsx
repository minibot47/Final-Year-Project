import React, { useState } from "react";
import "./Signin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cat from "../images/Cat.png";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const history = useHistory();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, value);
  };

  const validateForm = () => {
    const { email, password} = signInData;
    if (!email) return 'Email is required';
    if (!password) return 'Password is required';
    return null;
};

  const handleSignIn = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
        toast.error(errorMessage);
        return;
    }
    setLoading(true)
      try {
      const response = await axios.post(
        "http://localhost/livestockbackend/authenticate/login_user.php",
        signInData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log(response?.data);
      if (response?.data?.response === true) {
        toast.success('Signin successful!');
        sessionStorage.setItem('tokenObj', JSON.stringify(response?.data) )
        // navigate("/Dashboard");
// history.
        // window.location.href = "/Dashboard";
      }
      // Handle successful sign up here, e.g., redirect or show a success message
    } catch (error) {
      toast.error('Signin failed. Please try again.');
      console.error("Error during sign in:", error);
      // Handle error, e.g., show an error message to the user
    } finally{
      setLoading(false)
    }
  };

  return (
    <>
      <div className="signin-wrapper">
        <div className="signin">
          <div className="leftsignin">
            <div>
              <form method="post" onSubmit={handleSignIn}>
                <div className="signintop">Sign In</div>
                <label>
                  Email <br></br>
                  <input
                    type="email"
                    name="email"
                    value={signInData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className={signInData.email ? "filled" : ""}
                  ></input>
                </label>
                <label>
                  Password <br></br>
                  <input
                    type="password"
                    name="password"
                    value={signInData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className={signInData.password ? "filled" : ""}
                  ></input>
                </label>
                {/* <Link to="/Dashboard"> */}
                <button
                 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} type="submit" className="signinbutton" disabled={loading}>
                {loading ? (
                    <ThreeDots 
                        type="ThreeDots"
                        color="#000"
                        height={30}
                        width={30}
                    />
                ) : (
                    'Sign In'
                )}
            </button>
                {/* </Link> */}
                <div className="signinbottom">
                  Don't have an account?{" "}
                  <Link to="/SignUp">
                <button>Sign Up</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="rightsignin">
            <img src={Cat} alt="dog image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
