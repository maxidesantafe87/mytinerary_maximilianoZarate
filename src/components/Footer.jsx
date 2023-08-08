import React from 'react';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between h-[49px] bg-pink-200 px-4">
      <div className="flex items-center space-x-4">
        {/* Iconos de redes sociales */}
        <a href="#"><img src="facebook-icon.png" alt="Facebook" className="w-6 h-6" /></a>
        <a href="#"><img src="twitter-icon.png" alt="Twitter" className="w-6 h-6" /></a>
        <a href="#"><img src="instagram-icon.png" alt="Instagram" className="w-6 h-6" /></a>
      </div>
      <p className="text-center">Todos los derechos Reservados MGZ</p>
      <div className="flex items-center space-x-2">
        <p className="mr-2">2023</p>
        <img src="flame-icon.png" alt="Fire" className="w-6 h-6" />
      </div>
    </footer>
  );
}
