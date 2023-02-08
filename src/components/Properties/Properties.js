import React, { useEffect, useState } from 'react';
import Property from '../Property/Property';

const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(()=>{
      fetch('realEstate.json')
      .then(response => response.json())
      .then(data => setProperties(data))
    },[])

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </>
  );
};

export default Properties;
