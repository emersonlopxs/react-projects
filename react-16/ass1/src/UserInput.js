import React from 'react';

const input = (props) => {
  return (
    <div>
      <p>place your text here:</p>
      <input 
        type="text" 
        value={props.username} 
        onChange={props.change}
      />
    </div>
  );
};

export default input;