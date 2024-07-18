import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import not from "../images/not.png";
import userimg from "../images/user.png"
import edituser from "../images/edit img.png"
import axios from "axios";


const Settings = () => {
  const [userProfile, setUserProfile] = useState(null);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const userData = async () => {
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));
    try {
      const response = await axios.post(
        `${baseUrl}/updateprofile/getuserprofile.php`,
        { userid: data.userid },
        {
          headers: {
            Accesstoken: data.accessToken,
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
  }, [baseUrl]);
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

          <img src={userimg} alt="profile" />
        </div>
      </div>
      <div className="user-info">
        <div className="edit-profile-wrapper">
          <div className="edit-profile">
            <div className="edit-profile-right">
              <img className="user-image" src={userimg} alt="" />
              <h3 className="username"> {userProfile?.fullname}</h3>
            </div>
            <div className="edit-profile-right">
              <Link className="edit-btn" to={"/"}>
                <button> <img className="edit" src={edituser} alt="profile" /> Edit Profile</button>
              </Link>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-profile-right">
              <img className="user-image" src={userimg} alt="" />
              <h3 className="username"> Name</h3>
            </div>
            <div className="user-profile-right">
              <h3 className="name">{userProfile?.fullname}</h3>
            </div>
          </div>
          <div className="user-profile">
            <div className="user-profile-right">
              <img className="user-image" src={userimg} alt="" />
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
