import React from 'react';
import Hike from './Hike';

const Hikes = ({ hikes }) => (
  <div>
    <div className="hikes">
      {hikes.map(hike =>
        <Hike
          key={hike.id}
          {...hike}
        />
      )}
    </div>

    {hikes.length === 0 &&
      <h3 className="no-search-match">Sorry, no hike names match that search.</h3>
    }
  </div>
);

export default Hikes
