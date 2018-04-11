import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  // state only can be used when extending Component
   state = {
     persons: [
       {name: "Max", age: 28},
       {name: "Emerson", age: 22},
       {name: "Erica", age: 23}
     ]
   }

   
   switchNamehandler = () => {
    // DONT DO THAT  this.state.persons[0].name = 'Emerson'
    console.log('was clicked');
    
    this.setState({persons: [
      {name: "Robert", age: 28},
      {name: "Emerson", age: 22},
      {name: "Erica", age: 29}
    ]})
   }

   nameChangeHandler = (event) => {
    console.log('was clicked');
    
    this.setState({persons: [
      {name: "LOL", age: 28},
      {name: event.target.value, age: 22},
      {name: "Erica", age: 23}
    ]})
   }

  render() {
    // inline style is perfect to style only one single component
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    };
    return (
      <div className="App">

       <h1>Hello I am a react app!</h1>
       {/* using props */}
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
       />

       <button 
      //  refiring to the style constant
        style={style}
        onClick={this.switchNamehandler}>
          Switch Name
        </button>

       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        // passing a method to another component
        click={this.switchNamehandler}
        changed={this.nameChangeHandler}
       />
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
       />

      </div>
    );
  }
}

export default App;
