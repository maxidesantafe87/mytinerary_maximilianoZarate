import React from 'react';

export default function Card({ src, city }) {
  return (
    <div style={{ backgroundImage: `url(${src})` }} className="w-48 flex bg-cover justify-center rounded-lg relative">
      <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-30 p-1 rounded-b-lg">
        <h1 className="text-white font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,1)] text-center">{city}</h1>
      </div>
    </div>
  );
}
