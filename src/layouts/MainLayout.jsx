import React from 'react';
import Bodytext from "../components/BodyText";
import Carousel from "../components/Carousel";

export default function MainLayout() {
  return (
    <main className="flex m-40 h-[55vh] justify-between">
      <Bodytext />
      <Carousel />
    </main>
  );
}
