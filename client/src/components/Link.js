import React from 'react'

const Link = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active}>
    {children}
  </button>
)

export default Link
