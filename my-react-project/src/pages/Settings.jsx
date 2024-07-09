import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import not from "../images/not.png";
import profile from "../images/profile.png";
import axios from "axios";
const Settings = () => {
  const [userProfile, setUserProfile] = useState(null);
  const userData = async () => {
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));
    try {
      const response = await axios.post(
        "http://localhost/livestockbackend/updateprofile/getuserprofile.php",
        { userid: data.userid },
        {
          headers: {
            AccessToken: data.accessToken,
          },
        }
      );
      setUserProfile(response?.data?.userprofile);
    } catch (error) {
      console.error("Error during sign in:", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  // JSON.parse(data)
  useEffect(() => {
    userData();
  }, []);
  return (
    <div className="Settings">
      <div className="innerrightAppointmentstop">
        <div className="Appointmentsstopleft">
          <h2 className="Appointmentspage">
            Home {">"} <span className="blueAppointments"> Setting</span>
          </h2>
          <div className="Appointmentshealthtop">
            <h1 className="Appointmentspagetop">Setting</h1>
            <div className="Appointmentshealth"></div>
          </div>
        </div>

        <div className="Appointmentstopright">
          <img src={not} alt="notifications" />

          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="user-info">
        <div className="edit-profile-wrapper">
          <div className="edit-profile">
            <div className="edit-profile-right">
              <img className="user-image" src={profile} alt="" />
              <h3 className="username"> {userProfile?.fullname}</h3>
            </div>
            <div className="edit-profile-right">
              <Link className="edit-btn" to={"/"}>
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-profile-right">
              <img className="user-image" src={profile} alt="" />
              <h3 className="username"> Name</h3>
            </div>
            <div className="user-profile-right">
              <h3 className="name">{userProfile?.fullname}</h3>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-profile-right">
              <img className="user-image" src={profile} alt="" />
              <h3 className="username"> Email</h3>
            </div>
            <div className="user-profile-right">
              <h3 className="name">{userProfile?.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
