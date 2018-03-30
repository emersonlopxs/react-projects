import React, { Component } from 'react';
// import Navbar from '../Navbar/Navbar.jsx';
// import Footer from '../Footer/Footer.jsx';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const post1 = {
  title: 'This is the Id Page',
  content: 'hello',
  date: 'Emerson, 10 March 2018'
};



let thisIsMyCopy = (
  <div>
    
  </div>
);

class PostId extends Component {
  render() {
    return (
      <div className="ContentBox">
              <section className="Posts">
                <p className="Title"><span>{post1.title}</span></p>
                <p className="Content">{post1.content}</p>
                <p className="Date">{post1.date}</p>
              </section>
        </div>
    );
  }
}

export default PostId;
