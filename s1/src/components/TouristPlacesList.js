import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TouristPlacesList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/places')
      .then(response => response.json())
      .then(data => setPlaces(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="TouristPlacesList">

      <h1>Tourist Places</h1>
      <ul>
        {places.map(place => (
          <li key={place.id}>
            <Link to={`/place/${place.id}`}>
              <img src={`${place.image}`} alt={place.name} width="100" />
              <h2>{place.name}</h2>
              <p>{place.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristPlacesList;
