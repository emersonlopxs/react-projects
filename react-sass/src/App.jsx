import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import ContentBox from './Components/ContentBox/ContentBox.jsx';
import Footer from './Components/Footer/Footer.jsx';
import PostId from './Components/Posts/Post.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">

          <Navbar />
          {/* create a component called Home to render here */}
            <Route exact={true} path='/' render={() => (
              <h1 className='h1-app'>Hello world!</h1>
            )}/>
            <Route path='/post' component={ContentBox} />
            <Route path='/id' component={PostId} />
            {/* <ContentBox /> */}
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
