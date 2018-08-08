const Hikes = ({
  hikes,
  onHikeClick
}) => (
  <div>
    {hikes.map(hike =>
      <Hike
        key={hike.id}
        {...hike}
        onClick={() => onHikeClick(hike.id)}
      />
    )}
  </div>
);
