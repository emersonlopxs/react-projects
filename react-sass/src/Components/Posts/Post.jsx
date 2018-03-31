import React, { Component } from 'react';
// import Navbar from '../Navbar/Navbar.jsx';
// import Footer from '../Footer/Footer.jsx';
import Gist from 'react-gist';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const post = {
  title: 'Create a new react component',
  body: [
    {
        heading: '',
        paragraph: [
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?.',
          
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxiex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis? !'
        ],
        image: 'http://images5.fanpop.com/image/photos/30900000/Wallpaper-random-30957495-1920-1080.jpg',
        code: '',
        gistId: '35393fad72358dfe197e833a28579f34'
    },
    {
        heading: 'INSTALL THE DEPENDENCIES  ',
        paragraph: [
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis facilis voluptatum corporis, aliquid itaque ducimus dolores expedita ibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?',
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis facilis voluptatum corporis, aliquid itaque ducimus dolores expedita sapiente at rem dolorum officiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniofficiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?',
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis facilis voluptatum corporis, aliquid itaque ducimus dolores expedita sapiente at rem dolorum officiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?',
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis facilis voluptatum corporis, aliquid itaque ducimus dolores expedita sapiente at rem dolorum officiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?'
        ],
        image: ''
        
       
    },
    {
      heading: 'RUN THE APP  ',
      paragraph: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis facilis voluptatum corporis, aliquid itaque ducimus dolores expedita sapiente at rem dolorum officiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosalorum officiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis facilis voluptatum corporis, aliquid itaque ducimus dolores expedita sapiente at rem dolorum officiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus officia dolorum asperiores minus consectetur aspernatur debitis, numquam quae, nisi maxime minima! Minus, dolorem! Qui, quam vitae maxime veritatis facilis voluptatum corporis, aliquid itaque ducimus dolores expedita sapiente at rem dolorum officiis eveniet quidem. Aut accusantium id perspiciatis enim blanditiis impedit illo a hic! Ex, necessitatibus! Numquam eum dicta illum amet minima quae animi dolorum soluta pariatur ducimus aspernatur ex, voluptatum laboriosam eveniet, sequi sed neque exercitationem repellat corporis dolorem iste nihil fugiat veniam fugit! Eos doloremque magni iure rem ab, nam sequi laborum ducimus perspiciatis, soluta reprehenderit tempore qui quis?'
      ],
      image: ''
      
     
  }
  ],
  date: 'Emerson, 10 March 2018'
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
                
                <p>{data.paragraph[1]}</p>
                <p>{data.paragraph[2]}</p>
                <p>{data.paragraph[3]}</p>
                <p>{data.paragraph[5]}</p>
                <p>{data.paragraph[6]}</p>
                <p>{data.paragraph[7]}</p>
                <p>{data.paragraph[8]}</p>
                <p>{data.paragraph[9]}</p>


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
