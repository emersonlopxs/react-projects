import React, { Component } from 'react';

class HobbyList extends Component {
  render() {
    const hobbies = ['eat', 'beer', 'food'];
    const liStyle = {
      fontSize: '1.5rem',
      color: 'red'
    };
    return (
      <ul>
        {hobbies.map((h, i) => {
          return (
            <li key={i} style={liStyle}>
              {h}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default HobbyList;
