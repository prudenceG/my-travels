import React from "react";
import Travel from "./Travel";

const travelsTableau = [
    {
        destination : "Nantes",
        country : "France",
        distance : "450",
        photo : "https://i.postimg.cc/zfphBK4x/1200px-_Marit.jpg"
    },
    {
        destination : "Edimburgh",
        country : "Scotland",
        distance : "2.550",
        photo : "https://i.postimg.cc/63mGVwWR/edimbourg.1475787.w740.jpg"
    },
    {
        destination : "Berlin",
        country : "Germany",
        distance : "1.200",
        photo : "berlin.jpg"
    },
    {
        destination : "London",
        country : "Great-Britain",
        distance : "900",
        photo : "london.jpg"
    }

];
  //on utilise la fonction element en argument de la méthode map
  const Travels = () => (
    <div>
      {travelsTableau.map((element, id) => (
        <Travel key={id} {...element} />))} 
    </div> );
    // <Travel key={index} {...element} />))} raccourci qui prends en compte tous les paramètres de l'objet du tableau
    // <Travel key={index} destination={element.destination} country={element.country} photo={element.photo} distance={element.distance} />))}
    // <Travel/> on appelle le composant Travel sous forme de balise

export default Travels;