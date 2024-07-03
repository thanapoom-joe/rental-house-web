// src/pages/PropertiesPage.jsx
import React from 'react';

const PropertiesPage = () => {
  const properties = [
    { id: 1, name: 'Cozy Cottage', description: 'A cozy cottage in the countryside.' },
    { id: 2, name: 'Urban Apartment', description: 'A modern apartment in the city.' }
  ];

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-3xl font-bold">Available Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {properties.map(property => (
          <div key={property.id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{property.name}</h3>
            <p>{property.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
