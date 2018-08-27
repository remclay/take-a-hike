import React from 'react';
import { Link } from 'react-router-dom';

const Hike = ({ id, name, location, difficulty, description, display }) => (
  <div className="hike">
    <h3><Link to={`/hikes/${id}`}>{name}</Link></h3>
    <p><label>Location: </label>{location}</p>
    <p><label>Difficulty: </label>{difficulty}</p>
    {display==="single" &&
      <p><label>Description: </label>{description}</p>
    }
  </div>
)

export default Hike;
