import React, { useEffect, useState } from 'react';
import Client from '../Client';

const Agents = () => {
  const [clinets, setClients] = useState([]);
  useEffect(() => {
    fetch("clients.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);
  return (
    <div className='grid sm:grid-col-1 md:grid-cols-3'>
    {
    clinets.map((client)=>(<Client  client={client} key={client.id} />))
    }
    </div>
  );
};

export default Agents;

