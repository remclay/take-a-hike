import React from 'react'

const Error = ({ prop, message}) => {
  return (
    <li>
      <strong>{prop}</strong> {message}
    </li>
  );
};

const Errors = ({ messages }) => {
  let errors = []
  for (const prop in messages) {
    errors.push(< Error prop={prop} key={prop} message={messages[prop]} />);
  }

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>The hike was not added, due to the following error(s):</p>
      <div className="errors">
        <ul>
          {errors}
        </ul>
      </div>
    </div>
  );
}

export default Errors
