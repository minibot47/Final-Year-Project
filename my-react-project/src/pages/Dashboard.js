import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import dashboardicon from "../images/dashboard.png";
import animalicon from "../images/animal.png";
import settingicon from "../images/settings.png";
import logouticon from "../images/logout.png";
import dogpaw from "../images/dogpaw.png";
import not from "../images/not.png";
import profile from "../images/profile.png";
import chart from "../images/chart1.png";
import chart1 from "../images/chart2.png";
import appointmenticon from "../images/appointment.png";
import Animals from "./Animals";
import Appointments from "./Appointments.js";
import Settings from "./Settings.jsx";
import axios from "axios";
import ActionButton from "../components/actioButton/ActionButton.jsx";
import ViewLivestockModal from "../components/viewLivestockModal/ViewLivestockModal.jsx";
import EditLivestockModal from "../components/editLivestock/EditLivestockModal.jsx";
import AddLivestockModal from "../components/addlivestockmodal/AddLivestockModal.jsx";

const Dashboard = () => {
  const [view, setView] = useState("dashboard");
  const [livestock, setLivestock] = useState([]);
  const [animalData, setAnimalData] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLivestock, setSelectedLivestock] = useState(null);

  // Function to fetch dashboard data
  const fetchDashboardData = async () => {
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));
    try {
      const response = await axios.post(
        "http://localhost/livestockbackend/dashboard.php",
        { userid: data.userid },
        {
          headers: {
            AccessToken: data.accessToken,
          },
        }
      );
      setDashboardData(response?.data);
    } catch (error) {
      console.error("Error during fetching dashboard data:", error);
    }
  };

  // Function to fetch animal data
  const fetchAnimalData = async () => {
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));
    try {
      const response = await axios.post(
        "http://localhost/livestockbackend/animal/getanimals.php",
        { userid: data.userid },
        {
          headers: {
            AccessToken: data.accessToken,
          },
        }
      );
      setAnimalData(response?.data?.animals);
    } catch (error) {
      console.error("Error during fetching animal data:", error);
    }
  };

  // Function to handle view change and fetch data accordingly
  const handleViewChange = (view) => {
    setView(view);
    if (view === "dashboard") {
      fetchDashboardData();
    } else if (view === "animals") {
      fetchAnimalData();
    } else if (view === "anppointments") {
      fetchAnimalData();
    } else if (view === "settings") {
      fetchAnimalData();
    }
  };

  useEffect(() => {
    handleViewChange(view);
  }, [view]);

  const handleOpenViewModal = (livestock) => {
    setSelectedLivestock(livestock);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedLivestock(null);
  };

  const handleOpenEditModal = (livestock) => {
    setSelectedLivestock(livestock);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedLivestock(null);
  };

  const handleEditLivestock = (formData) => {
    const updatedLivestock = livestock.map((item) =>
      item.id === selectedLivestock.id
        ? { ...item, ...Object.fromEntries(formData.entries()) }
        : item
    );
    setLivestock(updatedLivestock);
    fetchDashboardData();
    handleCloseEditModal();
  };

  const handleDelete = async (id) => {
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));
    try {
      const response = await axios.post(
        "http://localhost/livestockbackend/animal/deleteanimal.php",
        { userid: data.userid, animalid: id },
        {
          headers: {
            AccessToken: data.accessToken,
          },
        }
      );
      setAnimalData(response?.data?.animals);
    } catch (error) {
      console.error("Error during delete:", error);
    }
    fetchDashboardData();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLivestock = (newLivestock) => {
    setLivestock([...livestock, newLivestock]);
    fetchDashboardData();
  };

  return (
    <div className="Dashboard">
      <div className="main">
        <div className="leftdashboard">
          <div>
            <p>Livestock</p>
            <div className="leftdashboardbuttons">
              <label>
                <img src={dashboardicon} alt="img" />
                <button onClick={() => handleViewChange("dashboard")}>
                  Dashboard
                </button>
              </label>
              <label>
                <img src={animalicon} alt="img" />
                <button onClick={() => handleViewChange("animals")}>
                  Animals
                </button>
              </label>
              <label>
                <img src={appointmenticon} alt="img" />
                <button onClick={() => handleViewChange("appointments")}>
                  Appointments
                </button>
              </label>
              <label>
                <img src={settingicon} alt="img" />
                <button onClick={() => handleViewChange("settings")}>
                  Settings
                </button>
              </label>
            </div>
          </div>
          <div className="leftdashboardbuttonsbottom">
            <label className="logoutbutton">
              <img src={logouticon} alt="" />
              <Link to="/Signin">
                <button>LOGOUT</button>
              </Link>
            </label>
          </div>
        </div>
        <div className="rightdashboard">
          {view === "dashboard" && (
            <div className="innerrightdashboard">
              <div className="innerrightdashboardtop">
                <div className="dashboardtopleft">
                  <h2 className="dashboardpage">
                    Home {">"}{" "}
                    <span className="bluedashboard"> Dashboard</span>
                  </h2>
                  <h1 className="dashboardpagetop">Dashboard</h1>
                </div>
                <div className="dashboardtopright">
                  <img src={not} alt="notifications" />
                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div className="dashboardanimalcount">
                <div className="innerdashboardanimalcount">
                  <div className="innerdashboardanimalcounttexts">
                    <img src={dogpaw} alt="img" />
                    <p>Total No of Animals</p>
                    <span> {dashboardData?.totalcount} </span>
                  </div>
                </div>
                <div className="innerdashboardanimalcount2">
                  <div className="innerdashboardanimalcount2texts">
                    <img src={dogpaw} alt="img" />
                    <p>Species Distribution</p>
                    <span>{dashboardData?.specieCount}</span>
                  </div>
                </div>
              </div>
              <div className="dashboardchart">
                <img src={chart} alt="chart" />
                <img src={chart1} alt="chart" />
              </div>
              <div className="Animalcharttable">
                <div className="Animalcharttable-top">
                  <h2>Livestock</h2>
                  <button onClick={() => handleViewChange("animals")}>
                    See all {">"}
                  </button>
                </div>
                <AddLivestockModal
                  open={isModalOpen}
                  handleClose={handleCloseModal}
                  handleAdd={handleAddLivestock}
                />
                <ViewLivestockModal
                  open={isViewModalOpen}
                  handleClose={handleCloseViewModal}
                  livestock={selectedLivestock}
                />
                <EditLivestockModal
                  open={isEditModalOpen}
                  handleClose={handleCloseEditModal}
                  handleEdit={handleEditLivestock}
                  livestock={selectedLivestock}
                />
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Specie</th>
                      <th>Status</th>
                      <th>Last Treatment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData?.animals?.map((animal, index) => (
                      <tr key={index}>
                        <td>{animal?.id}</td>
                        <td>{animal?.specie}</td>
                        <td>{animal?.status}</td>
                        <td>{animal?.last_treatment}</td>
                        <td>
                          <ActionButton
                            onView={() => handleOpenViewModal(animal)}
                            onEdit={() => handleOpenEditModal(animal)}
                            onDelete={() => handleDelete(animal?.animalid)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {view === "animals" && <Animals />}
          {view === "appointments" && <Appointments />}
          {view === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
