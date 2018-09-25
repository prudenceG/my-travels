// src/Travel.js
import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <section>
      <h1>{destination}</h1>
      <h3>({country})</h3>
      <img src={photo} alt={destination}/>
      <p>{distance} km</p>   
  </section>
);

export default Travel;