import React from 'react';


// Stateless component
// Simplest react component
// 
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;