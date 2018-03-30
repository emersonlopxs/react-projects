import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PostId from '../Posts/Post.jsx';


class ContentBox extends Component {
  render() {

    const post1 = {
      title: 'JavaScript is Great',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque incidunt maxime quam autem dignissimos quia tempora ipsum amet cupiditate? Quidem, ex! Id, eligendi repudiandae? Fugit sint dolorem aspernatur atque dolor asperiores quod. Alias nisi dolorem id aliquid magni! Soluta, dignissimos dolore assumenda tempora placeat hic ab officia illo eum minima... ',
      date: 'Emerson, 10 March 2018'
    };

    return (

      // <Router>
        <div className="ContentBox">
              <section className="Posts">
                <p className="Title"><span>{post1.title}</span></p>
                <p className="Content">{post1.content}</p>
                <Link to={'/id'}><button>read more</button></Link>
                <p className="Date">{post1.date}</p>
              </section>
        </div>
      // </Router>
    );
  }
}

export default ContentBox;
