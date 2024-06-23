import React, { useState } from "react";
import "./Signin.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cat from "../images/Cat.png";

const Signin = () => {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    // console.log("selina tested");
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
      if (response?.data?.response === true) {
        sessionStorage.setItem('tokenObj',response?.data )
        navigate("/Dashboard");
      }
      // Handle successful sign up here, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error during sign in:", error);
      // Handle error, e.g., show an error message to the user
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
                  Email <br></br>()
                  <input
                    type="email"
                    name="email"
                    value={signInData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
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
                  ></input>
                </label>
                {/* <Link to="/Dashboard"> */}
                <button type="submit" className="signinbutton">
                  Sign In
                </button>
                {/* </Link> */}
                <div className="signinbottom">
                  Don't have an account?{" "}
                  <Link to="/">
                    <button className="signinbutton">Sign up</button>
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
