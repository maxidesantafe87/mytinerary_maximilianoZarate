import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex space-x-10 items-center ml-auto">
      <div className="flex space-x-2">
        <Link to="/" className="font-bold text-1xl hover:text-gray-600 hover:bg-blue-400 hover:text-white rounded p-2 transition duration-300 ease-in-out">Home</Link>
        <Link to="/cities" className="font-bold text-1xl hover:text-gray-600 hover:bg-blue-400 hover:text-white rounded p-2 transition duration-300 ease-in-out">Cities</Link>
      </div>
      <button type="button" className="bg-blue-600 px-4 py-2 font-bold text-1xl text-white rounded flex items-center space-x-1 hover:bg-blue-400 hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none transition duration-300 ease-in-out">
        <img src="login.svg" alt="login" className="w-4 h-4 icon-white" />
        <span>Login&nbsp;</span>
      </button>
    </nav>
  );
}
