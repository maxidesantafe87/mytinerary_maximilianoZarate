import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [flameSize, setFlameSize] = useState(1);
  const [flameColor, setFlameColor] = useState('#ff9900');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = `hsl(${Math.random() * 40 + 10}, 100%, 50%)`;
      setFlameColor(newColor);
    }, 1000);

    const sizeInterval = setInterval(() => {
      setFlameSize(flameSize === 1 ? 1.2 : 1);
    }, 800);

    return () => {
      clearInterval(colorInterval);
      clearInterval(sizeInterval);
    };
  }, [flameSize]);

  return (
    <footer className="flex justify-between items-center relative my-8 mx-40 bg-pink-200 px-4">
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:scale-110 transition duration-300">
          <img src="/img/logos/face.svg" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="#" className="hover:scale-110 transition duration-300">
          <img src="/img/logos/whatsapp.svg" alt="Whatsapp" className="w-6 h-6" />
        </a>
        <a href="#" className="hover:scale-110 transition duration-300">
          <img src="/img/logos/insta.svg" alt="Instagram" className="w-6 h-6" />
        </a>
      </div>
      <p className="text-center">Todos los derechos Reservados @ MGZ - 2023</p>

      <div className="flex items-center space-x-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        
        <span
          role="img"
          aria-label="Fire"
          className="text-xl animate-pulse"
          style={{ fontSize: `${flameSize}rem`, color: flameColor }}
        >
          🔥
        </span>
      </div>
    </footer>
  );
}
