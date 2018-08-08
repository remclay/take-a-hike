// import React from 'react';
// import Client from './Client';
//
// class HikeSearch extends React.Component {
//   state = {
//     hikes: [],
//     searchValue: '',
//   };
//
//   handleChange = (e) => {
//     const value = e.target.value;
//
//     this.setState({
//       searchValue: value,
//     });
//
//   Client.search(value, (hikes) => {
//     this.setState({
//       hikes: hikes,
//     });
//   })
// }
//
//   render() {
//     const hikeRows = this.state.hikes.map((hike, id) => (
//       <li key={id}>
//         {hike.name} - {hike.location}
//       </li>
//     ));
//
//     return (
//       <div id='hike-search'>
//         <ul>
//           {hikeRows}
//         </ul>
//             <input
//               className='prompt'
//               type='text'
//               placeholder='Search hikes...'
//               value={this.state.searchValue}
//               onChange={this.handleChange}
//             />
//       </div>
//     );
//   }
// }
//
// export default HikeSearch;
