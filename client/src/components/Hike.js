const Hike = ({
  onClick,
  name,
  location,
  difficulty
}) => (
  <div onClick={onClick}>
    <h3>{name}</h3>
    <h4>{name}</h4>
    <p>{difficulty}</p>
  </div>
)

// onClick to render show?
