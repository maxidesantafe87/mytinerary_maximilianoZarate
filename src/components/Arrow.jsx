import React from 'react';

export default function Arrow({ direction, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      onClick={onClick} // Agregamos el manejador onClick
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  );
}
