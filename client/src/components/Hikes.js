import React from 'react';
import Hike from './Hike';

const Hikes = ({
  hikes
}) => (
  <div>
    {hikes.map(hike =>
      <Hike
        key={hike.id}
        {...hike}
      />
    )}
  </div>
);

export default Hikes
