import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1><Link to={'/'}> Hello world!</Link></h1>
          <ul>
            <Link to={'/about'}> <li>About</li> </Link>
            <Link to={'/contact'}> <li>Contact</li> </Link>
            <Link to={'/info'}> <li>Info</li> </Link>
          </ul>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/info' component={Info} />
        </div>
      </Router>
    );
  }
}

const About = function() {
  return (
    <div>
      <p>this is the about section</p>
      <strong>hello</strong>
    </div>
  );
};

const Contact = function() {
  return (
    <div>
      <p>this is the Contact section</p>
    </div>
  );
};

const Info = function() {
  return (
    <div>
      <p>this is the Info section</p>
      <p>there are a lot of cool this you can do with it!</p>
    </div>
  );
};


export default App;
