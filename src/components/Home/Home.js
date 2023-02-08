import React from 'react'
import Properties from '../Properties/Properties';
import './Home.css'

export default function Home() {
  return (
    <>
      <div className="bg-image bg-no-repeat grid sm:grid-cols-1">
        <p className=" text-center text-4xl font-semibold mx-auto my-auto text-black">
          We Are Provide Your Residance Most Popular City <br /> In The World
        </p>
      </div>
      <h1 className="text-6xl text-center text-bold p-5">
        Display Latest & Featured Properties
      </h1>
      <p className="text-2xl text-center p-2">
        Get started by choosing from one of our pre-built page templates to
        showcase <br /> your properties
      </p>
      <Properties />
    </>
  );
}
