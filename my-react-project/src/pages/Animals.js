import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Animals.css"
import not from "../images/not.png";
import profile from "../images/profile.png";
import elipses from "../images/elipses vertical.png"

const Animals = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
  return (
    <div className='Animals'>
        <div className='innerrightAnimalstop'>
                <div className='Animalstopleft'>
                  <h2 className='Animalspage'>Home {">"} <span className='blueAnimals'>  Animals</span></h2>
                  <div className='animalhealthtop'>
                    <h1 className='Animalspagetop'>Animals</h1>
                    <div className='animalhealth'>
                    <select id='Health-Status'>
                        <option value=''>Health Status</option>
                        <option value='all'>All</option>
                        <option value='healthy'>Healthy</option>
                        <option value='sick'>Sick</option>
                        <option value='weak'>Weak</option>
                    </select>
                    <div className='Animalsearchbar'>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
                    </div>
                    </div>
                  </div>

                </div>
                <div className='Animalstopright'>
                  <img src={not} alt="notifications"/>
                  <img src={profile} alt="profile"/>
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
                    <tr>
                      <td>1</td>
                      <td>Cow</td>
                      <td>Healthy</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Pig</td>
                      <td>Weak</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Goat</td>
                      <td>Sick</td>
                      <td>04/12/2003 - 10pm</td>
                      <td><img src={elipses} alt="elipses"/></td>
                    </tr>
                  </tbody>
                </table>
                <label className='numbering'>
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
