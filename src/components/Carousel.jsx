import React, { useState } from 'react';
import Card from './Card';
import Arrow from './Arrow';

let data = [
  {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
  {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
  {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
  {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
  {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
  {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
  {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
  {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
  {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
  {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
  {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
  {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
  {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
  {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
  {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
  {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
];

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevArrow = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextArrow = () => {
    if (startIndex < data.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="carousel flex justify-center items-center">
      <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={handlePrevArrow} />

 


<div className="container flex flex-wrap gap-2 justify-center h-full">
<div className="container flex flex-wrap gap-2 justify-center h-1/2">
  {data.slice(startIndex, startIndex + 2).map((each, index) => (
    <Card key={index} src={each.photo} city={each.city} />
  ))}
</div>
<div className="container flex flex-wrap gap-2 justify-center h-1/2">
  {data.slice(startIndex + 2, startIndex + 4).map((each, index) => (
    <Card key={index} src={each.photo} city={each.city} />
  ))}
</div>
</div>

      <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={handleNextArrow} />
    </div>
  );
}

