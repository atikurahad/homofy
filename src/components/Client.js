import React from 'react';

const Client = (props) => {
  return (
    <div>

      <div className="h-[18rem] w-[18rem] border-amber-400	bg-gray-100 mx-auto p-5 m-5">
        <img
          className="h-[10rem] w-[10rem] rounded-full"
          src={props.client.img}
          alt=""
        />
        <h1 className='text-black text-2xl text-center'>{props.client.name}</h1>
        <h1 className='text-black'>{props.client.title}</h1>
      </div>
    </div>
  );
};

export default Client;
