import React from 'react';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center my-8 mx-40 bg-pink-200 px-4">
      <div className="flex items-center space-x-4">
        <a href="#"><img src="/img/logos/face.svg" alt="Facebook" className="w-6 h-6" /></a>
        <a href="#"><img src="/img/logos/whatsapp.svg" alt="Whatsapp" className="w-6 h-6" /></a>
        <a href="#"><img src="/img/logos/insta.svg" alt="Instagram" className="w-6 h-6" /></a>
      </div>
      <p className="text-center">Todos los derechos Reservados @ MGZ</p>

<div className="flex items-center space-x-2">
  <p className="mr-2">2023 - </p>
  <span role="img" aria-label="Fire" className="text-xl">
    🔥
  </span>
</div>
    </footer>
  );
}

