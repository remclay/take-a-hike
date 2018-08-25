import React from 'react'

const Errors = ({ messages }) => {
  let sentence = `<ul>`
  for(const prop in messages) {
      sentence += `<li>${prop} ${messages[prop]}</li>`
  }
  sentence += `</ul>`

  return (
    <div className="error-container">
      <p>The hike was not added, due to the following errors:</p>
      <div className="errors">
        {sentence}
      </div>
    </div>
  );
}

export default Errors
