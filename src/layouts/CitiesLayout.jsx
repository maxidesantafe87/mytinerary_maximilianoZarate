import React from 'react';
import Vacio from "../components/Vacio";
import VacioTexto from '../components/VacioText';

export default function MainLayout() {
  return (
    <main className="flex m-40 h-[55vh] justify-between">
      <VacioTexto />
      <Vacio />
    </main>
  );
}
