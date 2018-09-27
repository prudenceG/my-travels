// src/Travel.js ceci est un composant que je peux appliquer sur un tableau par example afin d'avoir la meme mise en page,
// la meme manière de traiter les informations
import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <section>
      <h1>{destination}</h1>
      <h3>({country})</h3>
      <p>{distance} km</p>  
      <img src={photo} alt={destination}/>
      <hr/>
  </section>
);

export default Travel;