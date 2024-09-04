import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TouristPlaceDetail = () => {
  const { id } = useParams(); // useParams hook to get the 'id' from the route
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/places/${id}`)
      .then(response => response.json())
      .then(data => setPlace(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!place) return <div>Loading...</div>;

  return (
    <div className="TouristPlaceDetail">

      <h1>{place.name}</h1>
      <img src={`${place.image}`} alt={place.name} />
      <p><strong>Location:</strong> {place.location}</p>
      <p><strong>Description:</strong> {place.description}</p>
      <p><strong>Rating:</strong> {place.rating}</p>
      <p><strong>Entry Fee:</strong> {place.entryFee}</p>
      <p><strong>Best Time to Visit:</strong> {place.bestTimeToVisit}</p>
      <p><strong>Nearest Airport:</strong> {place.nearestAirport}</p>
      <p><strong>Popular For:</strong> {place.popularFor}</p>
      <p><strong>Historical Significance:</strong> {place.historicalSignificance}</p>
    </div>
  );
};

export default TouristPlaceDetail;
