// src/components/HouseList.jsx
import React from 'react';
import '../css/HouseList.css';

const HouseList = ({ houses }) => {
  return (
    <div className="house-list">
      {houses.map((house) => (
        <div key={house.id} className="house-item">
          <h2>{house.name}</h2>
          <p>{house.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HouseList;
