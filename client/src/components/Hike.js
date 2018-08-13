import React from 'react';
import { Link } from 'react-router-dom';

const Hike = ({
  id,
  name,
  location,
  difficulty,
  description,
  display
}) => (
  <li>
    <h3><Link to={`/hikes/${id}`}>{name}</Link> - {location}</h3>
    <h4>Difficulty: {difficulty}</h4>
    {display==="single" &&
      <p>Description: {description}</p>
    }
  </li>
)

export default Hike;
