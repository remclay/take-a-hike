/* eslint-disable no-undef */
function search(query) {
  return fetch(`api/hikes`, {
    accept: 'application/json',
  }).then(parseJSON);
}

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
