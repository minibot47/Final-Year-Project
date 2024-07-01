import React, { useState, useEffect } from 'react';
import './edit-livestock.css';
import axios from 'axios';

const EditLivestockModal = ({ open, handleClose, handleEdit, livestock }) => {
    console.log(livestock);
    const data = JSON.parse(sessionStorage.getItem("tokenObj"));

    const [formValues, setFormValues] = useState({
        id: data.userid,
        animalId: livestock?.animal?.animalid,
        specie: '',
        status: '',
        lastTreatmentDate: '',
        disease: '',
        bodyTemperature: '',
        imageUrl: '' 
    });
console.log(formValues);
    useEffect(() => {
        if (livestock) {
            setFormValues(livestock);
        }
    }, [livestock]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const formData = new FormData();
    formData.append('userid', formValues.id);
    formData.append('animalid', formValues.animalId);
    formData.append('specie', formValues.specie);
    formData.append('status', formValues.status);
    formData.append('last-treatment', formValues.last_treatment);
    formData.append('disease', formValues.disease);
    formData.append('body-temperature', formValues.bodyTemp);
    // formData.append('imageUrl', formValues.imageUrl);
    handleEdit(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        handleClose();
        console.log(formData);
        console.log(formValues);

            const data = JSON.parse(sessionStorage.getItem('tokenObj'));
            try {
              const response = await axios.post(
                "http://localhost/livestockbackend/animal/editanimal.php",
                formData,
                {
                  headers: {
                    "AccessToken": data.accessToken,
                  },
                }
              );
                  console.log(response?.data);

            } catch (error) {
              console.error("Error during sign in:", error);
              // Handle error, e.g., show an error message to the user
            }
          };

    if (!open) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="close-button" onClick={handleClose}>×</button>
                <h2>Edit Livestock</h2>
                <form onSubmit={handleSubmit}>
                   
                    {/* <div className="form-group">
                        <label>ID</label>
                        <input
                            type="text"
                            name="animalid"
                            value={formValues.animalId}
                            onChange={handleInputChange}
                            required
                        />
                    </div> */}
                    <div className="form-group">
                        <label>Specie</label>
                        <input
                            type="text"
                            name="specie"
                            value={formValues.specie}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <div className="status-options">
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="Healthy"
                                    checked={formValues.status === 'Healthy'}
                                    onChange={handleInputChange}
                                />
                                Healthy
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="Sick"
                                    checked={formValues.status === 'Sick'}
                                    onChange={handleInputChange}
                                />
                                Sick
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="Weak"
                                    checked={formValues.status === 'Weak'}
                                    onChange={handleInputChange}
                                />
                                Weak
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Date of Last Treatment</label>
                        <input
                            type="date"
                            name="lastTreatmentDate"
                            value={formValues.lastTreatmentDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Disease</label>
                        <input
                            type="text"
                            name="disease"
                            value={formValues.disease}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Body Temperature</label>
                        <input
                            type="number"
                            name="bodyTemperature"
                            value={formValues.bodyTemperature}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                  
                    <button type="submit" className="add-button">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditLivestockModal;
