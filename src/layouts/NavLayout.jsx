import React from 'react';
import Navbar from '../components/Navbar';

export default function NavLayout() {
  return (
    <header className="flex flex-col items-center my-8 gap-6 pt-6 text-gray-800
    sm:mx-0 sm:justify-between
    md:mx-20 md:justify-between md:flex-row
    lg:mx-40 lg:justify-between lg:flex-row">
      <h2 className="font-bold italic text-3xl font-preahvihear">My Tinerary</h2>
      
      <img src="/img/logo.jpg" alt="Página no encontrada" style={{ width: '150px', height: '150px', position: 'absolute', top: '0%', left: '50%', transform: 'translateX(-50%)' }} />
      
      <Navbar />
      
    </header>
  );
}
