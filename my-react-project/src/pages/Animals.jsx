import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Animals.css";
import not from "../images/not.png";
import profile from "../images/profile.png";
import elipses from "../images/elipses vertical.png";
import AddLivestockModal from "../components/addlivestockmodal/AddLivestockModal";
import ViewLivestockModal from "../components/viewLivestockModal/ViewLivestockModal";
import EditLivestockModal from "../components/editLivestock/EditLivestockModal";
import ActionButton from "../components/actioButton/ActionButton";
import axios from "axios";

const Animals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [livestock, setLivestock] = useState([]);
  const [animalData, setAnimalData] = useState([]);

  //edit view and delete code

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLivestock, setSelectedLivestock] = useState(null);

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
    handleCloseEditModal();
  };

  const handleDelete = async (id) => {
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));
    // setLivestock(livestock.filter((item) => item.id !== id));
    try {
      const response = await axios.post(
        "http://localhost/livestockbackend/animal/deleteanimal.php",
        { userid: data.userid,
          animalid: id

         },
        {
          headers: {
            AccessToken: data.accessToken,
          },
        }
      );
      console.log(data.accessToken, data.userid);
      // console.log(response?.data?.animals[0].id);
      
      setAnimalData(response?.data?.animals);
      console.log(animalData);
    } catch (error) {
      console.error("Error during sign in:", error);
      // Handle error, e.g., show an error message to the user
    }
    
  };
  

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  console.log(isModalOpen);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("done");
  };

  const handleAddLivestock = (newLivestock) => {
    setLivestock([...livestock, newLivestock]);
  };

  const handleGetAnimalData = async () => {
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));
    try {
      const response = await axios.post(
        "http://localhost/livestockbackend/animal/animals.php",
        { userid: data.userid },
        {
          headers: {
            AccessToken: data.accessToken,
          },
        }
      );
      console.log(data.accessToken, data.userid);
      console.log(response?.data?.animals[0].id);
      setAnimalData(response?.data?.animals);
      console.log(animalData);
    } catch (error) {
      console.error("Error during sign in:", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  useEffect(() => {
    handleGetAnimalData();
  }, []);

  console.log(animalData?.animalid);

  return (
    <div className="Animals">
      <div className="innerrightAnimalstop">
        <div className="Animalstopleft">
          <h2 className="Animalspage">
            Home {">"} <span className="blueAnimals"> Animals</span>
          </h2>
          <div className="animalhealthtop">
            <h1 className="Animalspagetop">Animals</h1>
            <div className="animalhealth">
              <select id="Health-Status">
                <option value="">Health Status</option>
                <option value="all">All</option>
                <option value="healthy">Healthy</option>
                <option value="sick">Sick</option>
                <option value="weak">Weak</option>
              </select>
              <div className="Animalsearchbar">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="add-btn-wrapper">
              <button
                onClick={handleOpenModal}
                type="button"
                className="add-btn"
              >
                add
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
          </div>
        </div>
        <div className="Animalstopright">
          <img src={not} alt="notifications" />
          <img src={profile} alt="profile" />
        </div>
      </div>
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
          {animalData.map((animal, index) => (
            <tr key={index}>
              <td>{animal?.id}</td>
              <td>{animal?.specie}</td>
              <td>{animal?.status}</td>
              <td>{animal?.last_treatment}</td>
              <td>
                <ActionButton
                  onView={() => handleOpenViewModal({animal})}
                  onEdit={() => handleOpenEditModal({animal})}
                      onDelete={() => handleDelete(animal?.animalid)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <label className="numbering">
        <h1>{"<"}</h1>
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
        <h2>4</h2>
        <h2>5</h2>
        <h2>....</h2>
        <h2>100</h2>
        <h1>{">"}</h1>
      </label>
    </div>
  );
};

export default Animals;
