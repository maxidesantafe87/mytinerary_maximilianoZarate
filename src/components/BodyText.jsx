import React from 'react';
import { Link as Anchor } from 'react-router-dom';

export default function Bodytext() {
  return (
    <div className="flex flex-col justify-between items-center gap-4 font-preahvihear sm md lg:pr-10 lg:w-7/12 lg:items-start">
      <h1 className="font-bold text-3xl text-gray-800"> Find the perfect destination</h1>
      <p className="font-semibold text-gray-500 px-10 lg:px-0">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
      <div className="h-[10vh]">
        <Anchor
          to="/cities"
          className="bg-blue-600 p-[15px] font-bold text-1xl text-white rounded transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none"
          type="button"
        >
          View More
        </Anchor>
      </div>
    </div>
  );
}
