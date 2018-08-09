import React from 'react';
import { Link } from 'react-router-dom';

const Hike = ({
  id,
  name,
  location,
  difficulty
}) => (
  <div>
    <h3><Link to={`/hikes/${id}`}>{name}</Link></h3>
    <h4>{location}</h4>
    <p>{difficulty}</p>
  </div>
)

export default Hike;
