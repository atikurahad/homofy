import React from 'react'
import Agents from '../Agents/Agents';
import Properties from '../Properties/Properties';
import './Home.css'

export default function Home() {
  return (
    <>
      <div className="bg-image bg-no-repeat grid sm:grid-cols-1">
        <p className=" text-center text-4xl font-semibold mx-auto my-auto text-[#660066] ">
          We Are Provide Your Residance Most Popular City <br /> In The World
        </p>
      </div>
      <div className="">
        <h1 className="text-6xl text-center text-bold p-5 ">
          Display Latest & Featured Properties
        </h1>
        <p className="text-2xl text-center p-2 ">
          Get started by choosing from one of our pre-built page templates to
          showcase <br /> your properties
        </p>
      </div>
      <Properties />
      <div className=" ">
        <h1 className="h-[8rem] text-6xl text-center font-light my-auto">
          Our Clients
        </h1>
      </div>
      <Agents />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-96 bg-[#040F2E]">
        <div>
          <img
            className="h-96"
            src="https://www.houseplans.pro/assets/plans/804/basement-duplex-house-plan-with-two-car-garage-color-rendering-D-723.jpg"
            alt=""
          />
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            at.
          </p>
        </div>
      </div>
    </>
  );
}
