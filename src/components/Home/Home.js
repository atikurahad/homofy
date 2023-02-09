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
        <div className="p-12 mt-2">
          <p className="text-4xl text-white font-semibold">
            Subscribe Newsletter
          </p>
          <p className="text-2xl text-white mt-2">
            Get started by choosing from one of our pre-built page templates to
            showcase your properties
          </p>
          <input
            className="bg-transparent	w-full h-[2rem] mt-3 "
            placeholder="Enter Your Email"
            type="email"
            name="Email"
            id=""
          />{" "}
          <hr />
          <button className="bg-yellow-500 mt-5 p-4 hover:bg-slate-200 hover:text-black hover:font-bold">Subscribe</button>
        </div>
      </div>
    </>
  );
}
