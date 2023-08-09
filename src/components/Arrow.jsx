import React from 'react';

export default function Arrow({ direction, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#333" 
      className="w-20 h-20" 
      onClick={onClick} 
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
  );
}
