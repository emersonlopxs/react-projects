import React, { Component } from 'react';
// import Navbar from '../Navbar/Navbar.jsx';
// import Footer from '../Footer/Footer.jsx';
import Gist from 'react-gist';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const post = {
  title: 'the day I fell in love with coding',
  body: [
    {
        heading: '',
        paragraph: [
          ''

        ],
        image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?utm_medium=medium&w=700&q=50&auto=format',
        code: '',
        gistId: ''
    },
    {
        heading: '',
        
        image: '',
        paragraph: [
          'I always liked to code. After about for six months of learning I had built quite a few apps like a weather app (cause who hasn’t?), random quote machine, budget app, todo list app and many static webpages and others. Working on projects was always cool to me, being able to make something is one o the reasons I always liked coding.',
          'One day though, while working on the intermediate front end projects on Free Code Camp, specifically the Wikipedia Viewer, something different happened. While working on it it was just as fun as the others, struggling to figure out how to the this and that, but eventually making it work. Nothing new here.',
          'When the project was completed and I was checking if all the features were working correctly I felt something different, being able to type anything on that input and receive and answer related to the topic made me feel like I could do anything, so for the rest of the day I was thinking about how amazing I was able to create such an app. That was when I really realized I could build anything I wanted.',
          'Being a coder doesn’t mean you know everything in a language/framework, but it’s about how you look for the information you need, how you deal when something in your app isn’t working and you have no idea how to solve it it’s about searching, asking for help, changing this line, or that other one to see what happens and eventually getting it right. That what most beginners fail to understand, it happened to me when I was starting out.',

          'If you’re a beginner I highly recommend you to take CS50 course on Edx and follow the Free Code Camp map, their all free and extremely helpful if you’re starting, and don’t give up!'
        ]
        
       
    },
    {
      heading: '',
      paragraph: [
        ''
      ],
      image: ''
      
     
  }
  ],
  date: '27 December 2017, by Emerson'
};

// post.body.section.heading
// post.body.section.p



class PostId extends Component {
  render() {
    return (
      <div className='PostWapper'>
        <div className="Post-box">

          <h1>{post.title.toUpperCase()}</h1>
          <span>{post.date}</span>
        
          {
            post.body.map((data, idx) => (
              <div key={idx}>
                <h2 className='subtitle-post'>{data.heading}</h2>

                {/* if data.image exists, render it */}
                {data.image ? <img src={data.image} alt="randon pic" className='image-sub-header'/> : false}
                
                <p>{data.paragraph[0]}</p>
                <p>{data.paragraph[1]}</p>
                <p>{data.paragraph[2]}</p>
                <p>{data.paragraph[3]}</p>
                <p>{data.paragraph[4]}</p>
                <p>{data.paragraph[5]}</p>
                <p>{data.paragraph[6]}</p>
                <p>{data.paragraph[7]}</p>
                <p>{data.paragraph[8]}</p>


              </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default PostId;
