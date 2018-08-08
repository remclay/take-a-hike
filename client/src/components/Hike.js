import React from 'react';

const Hike = ({
  onClick,
  name,
  location,
  difficulty
}) => (
  <div onClick={onClick}>
    <h3>{name}</h3>
    <h4>{location}</h4>
    <p>{difficulty}</p>
  </div>
)

// onClick to render show?
export default Hike
