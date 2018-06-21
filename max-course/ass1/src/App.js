import React, { Component } from 'react';
import './App.css';
import Output from './UserOutput';
import Input from './UserInput';

class App extends Component {

  state = {
    username: 'Emerson'
  }

  changeInputHandler = (event) => {
    console.log('changed!');
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
       <Input
        username={this.state.username}
        change={this.changeInputHandler}
       />
       <Output username={this.state.username}/>
      </div>
    );
  }
}

export default App;
