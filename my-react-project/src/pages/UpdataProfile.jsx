import React, { useEffect, useState } from "react";
import "./update-profile.css";
import axios from "axios";

const UpdataProfile = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("example@gmail.com");
  const [profileImage, setProfileImage] = useState(null);
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePreviousPasswordChange = (e) =>
    setPreviousPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  //I added this function here. From Yori
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
      // console.log(response?.data)
      setProfileImage(response?.data?.userprofile.profilepic);
      console.log(profileImage)
    } catch (error) {
      console.error("Error during sign in:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    userData();
  }, [baseUrl])
  //And it ended here. Check below for other info

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (newPassword === confirmPassword) {
      const data = JSON.parse(sessionStorage.getItem("tokenObj"));
      try {
        const response = await axios.post(
          `${baseUrl}/updateprofile/changepassword.php`,
          {
            userid: data.userid,
            newpassword: newPassword,
            previouspassword: previousPassword,
          },
          {
            headers: {
              Accesstoken: data.accessToken,
            },
          }
        );
        // setAnimalData(response?.data?.animals);
        console.log(response);
      } catch (error) {
        console.error("Error during sign in:", error);
        // Handle error, e.g., show an error message to the user
      }
      alert(`Password updated successfully!`);
    } else {
      alert("New password and confirm password do not match.");
    }
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  //I adjusted this update profile picture function. From Yori
  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(URL.createObjectURL(file));

      const data = JSON.parse(sessionStorage.getItem("tokenObj"));
      const formData = new FormData();
      formData.append("image", file);
      formData.append("userid", data.userid);

      try {
        const response = await axios.post(
          `${baseUrl}/updateprofile/updateprofilepicture.php`,
          formData,
          {
            headers: {
              Accesstoken: data.accessToken,
              // "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        if (response.data.response) {
          setProfileImage(response.data.data);
        }
      } catch (error) {
        console.error("Error during image upload:", error);
      }
    }
  };
  //It ended here

  const handleSubmitName = async (e) => {
    e.preventDefault();
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));

    // Handle form submission logic here
    const formData = new FormData();
    formData.append("userid", data.userid);
    formData.append("fullname", name);
    formData.append("email", email);
    try {
      const response = await axios.post(
        `${baseUrl}/updateprofile/updateuserdescription.php`,
        formData,
        {
          headers: {
            Accesstoken: data.accessToken,
          },
        }
      );
      console.error(response);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }

    alert(`Name: ${name}, Email: ${email}`);
  };


  return (
    <div>
      <div className="personal-info-header-wrapper">
        <h1 className="personal-info-header">Personal Information</h1>
      </div>
      <div className="personal-info-update">
        <div className="profile-form">
          <div className="profile-image-container">
            <img
              src={profileImage || "default-profile.png"} //I already set profileImage to the image here, and it works. But nnow you will work on it so that when the image is changed, it sets the image to the new image set. From Yori
              alt="Profile"
              className="profile-image"
            />
            <label htmlFor="image-upload" className="image-upload-label">
              <i className="fas fa-camera"></i>
            </label>
            <input
              type="file"
              id="image-upload"
              onChange={handleImageChange}
              className="image-upload-input"
            />
          </div>
          <form onSubmit={handleSubmitName} className="form-info">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button type="submit" className="update-button">
              Update
            </button>
          </form>
        </div>
      </div>
      <div className="personal-info-header-wrapper">
        <h1 className="personal-info-header">Change Password</h1>
      </div>
      <div className="profile-form">
        <form onSubmit={handleSubmitPassword} className="form-info">
          <div className="input-group">
            <label htmlFor="previous-password">Enter Previous Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="previous-password"
                value={previousPassword}
                onChange={handlePreviousPasswordChange}
              />
              <span
                onClick={toggleShowPassword}
                className="toggle-password-visibility"
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </span>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="new-password">Enter New Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="new-password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
              <span
                onClick={toggleShowPassword}
                className="toggle-password-visibility"
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </span>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <span
                onClick={toggleShowPassword}
                className="toggle-password-visibility"
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </span>
            </div>
          </div>
          <button type="submit" className="update-button">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdataProfile;
