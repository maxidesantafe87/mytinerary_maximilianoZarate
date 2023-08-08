import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex w-4/12 items-center space-x-10">
      <div className="flex space-x-2 space-x-10">
        <a className="font-bold text-1xl" href="">Home</a>
        <a className="font-bold text-1xl" href="">Cities</a>
      </div>
      <button type="button" className="bg-blue-600 px-4 py-2 font-bold text-1xl text-white rounded flex items-center space-x-1">
        <img src="login.svg" alt="login" className="w-4 h-4 icon-white" />
        <span>Login&nbsp;</span>
      </button>
    </nav>
  );
}
