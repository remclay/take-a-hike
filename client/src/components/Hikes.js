import React from 'react';
import Hike from './Hike';

const Hikes = ({ hikes }) => (
  <ul>
    {hikes.map(hike =>
      <Hike
        key={hike.id}
        {...hike}
      />
    )}
  </ul>
);

export default Hikes
