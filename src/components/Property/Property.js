import React from "react";

const Property = (props) => {
  const { img, category, price,size, bed, bath, location } = props.property;
  return (
    <>
      <div>
        <div className=" h-[30rem] w-[25rem] border-2 border-gray-200	mx-auto p-5 m-5 bg-gray-100">
          <img src={img} alt="PropertyImage" className="h-[15rem] w-full p-5" />
          <div className="flex justify-between ">
            <p className="text-2xl  text-black font-black font-mono p-2">
              {category}
            </p>
          </div>
          <div className="flex ">
            <p className="text-xl text-violet-500 font-bold mt-2 p-2">
              ${price}
            </p>
          </div>
          <div className="flex  mt-3 p-2">
            <span className="text-blue-400 text-xl">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <p className="text-xl text-rose-700 font-semibold">{location}</p>
          </div>
          <div className="flex justify-between border-2 border-gray-400 p-2">
            <p>
              <span className="text-xl font-bold">{bath}</span> Bathroom
            </p>
            <p>
              <span className="text-xl font-bold">{size}</span> Sq Ft
            </p>
            <p>
              <span className="text-xl font-bold ">{bed}</span> Bedroom
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;



