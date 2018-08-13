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
  <div className="hike">
    <h3><Link to={`/hikes/${id}`}>{name}</Link></h3>
    <p>Location: {location}</p>
    <p>Difficulty: {difficulty}</p>
    {display==="single" &&
      <p>Description: {description}</p>
    }
  </div>
)

export default Hike;
