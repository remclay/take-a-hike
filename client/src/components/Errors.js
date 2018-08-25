import React from 'react'

const Error = ({ prop, message }) => {

  return (
    <li>
    {prop}: {message}
    </li>
  );
}

const Errors = ({ messages }) => {
  const errors = for (const prop in messages) {
    <Error prop={prop} message={messages[prop]} />
  }

  return (
    <div className="error-container">
      <p>The hike was not added, due to the following errors:</p>
      <div className="errors">
      {errors}
      </div>
    </div>
  );
}

export default Errors
