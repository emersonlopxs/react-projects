import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PostId from '../Posts/Post.jsx';


class ContentBox extends Component {
  render() {

    const post1 = {
      title: 'This is the title',
      body: [
        {
            heading: 'The first sub title',
            p: 'welcome to  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime corporis ea natus, adipisci maiores voluptatibus aut illum animi nesciunt aliquid non quo atque veniam nisi itaque. Necessitatibus fuga, nihil, atque ipsum optio vel reprehenderit eaque rem maiores exercitationem dolore, magnam et cupiditate quae totam sed earum obcaecati quia. Beatae possimus quia deserunt accusamus libero, veniam consequatur neque rem minus voluptates ratione quasi, saepe recusandae aliquam cum at, perferendis ipsum. Provident sint deserunt quos distinctio sequi alias, quo error, eaque quis mollitia nihil perferendis commodi voluptatibus nisi quod porro consectetur. Earum doloremque cum assumenda ipsa hic accusantium sed quisquam eaque, laudantium dolorum deserunt explicabo qui aspernatur provident adipisci tempore voluptatum dolores similique molestiae pariatur repudiandae et alias. Animi, facere! Nostrum praesentium sunt consectetur molestiae nulla itaque fugit? Ipsa porro doloribus corporis iure, sequi explicabo hic. Adipisci quae voluptates nam ipsam vitae repudiandae dolore velit dolores delectus officia exercitationem est animi ad nulla eos nemo expedita tenetur error, odio doloremque enim atque aspernatur molestias. Ut eos minus quisquam ea iste sint provident harum, temporibus doloribus, repellendus unde molestiae deserunt consequuntur soluta veritatis. Eaque minus laborum deleniti veniam eos deserunt ullam repellendus est quis dolore temporibus ut tempora qui, tempore fugit libero?the jungle where people to crazy stuff to keep all the things in place'
        },
        {
            heading: 'second sub title',
            p: 'welcome to the jungle where people to crazy stuff to keep all the things in place  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime corporis ea natus, adipisci maiores voluptatibus aut illum animi nesciunt aliquid non quo atque veniam nisi itaque. Necessitatibus fuga, nihil, atque ipsum optio vel reprehenderit eaque rem maiores exercitationem dolore, magnam et cupiditate quae totam sed earum obcaecati quia. Beatae possimus quia deserunt accusamus libero, veniam consequatur neque rem minus voluptates ratione quasi, saepe recusandae aliquam cum at, perferendis ipsum. Provident sint deserunt quos distinctio sequi alias, quo error, eaque quis mollitia nihil perferendis commodi voluptatibus nisi quod porro consectetur. Earum doloremque cum assumenda ipsa hic accusantium sed quisquam eaque, laudantium dolorum deserunt explicabo qui aspernatur provident adipisci tempore voluptatum dolores similique molestiae pariatur repudiandae et alias. Animi, facere! Nostrum praesentium sunt consectetur molestiae nulla itaque fugit? Ipsa porro doloribus corporis iure, sequi explicabo hic. Adipisci quae voluptates nam ipsam vitae repudiandae dolore velit dolores delectus officia exercitationem est animi ad nulla eos nemo expedita tenetur error, odio doloremque enim atque aspernatur molestias. Ut eos minus quisquam ea iste sint provident harum, temporibus doloribus, repellendus unde molestiae deserunt consequuntur soluta veritatis. Eaque minus laborum deleniti veniam eos deserunt ullam repellendus est quis dolore temporibus ut tempora qui, tempore fugit libero?'
        }
      ],
      date: '10 March 2018 by Emerson'
    };

    const post2 = {
      title: 'This is the title',
      body: [
        {
            heading: 'The first sub title',
            p: 'welcome to  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime corporis ea natus, adipisci maiores voluptatibus aut illum animi nesciunt aliquid non quo atque veniam nisi itaque. Necessitatibus fuga, nihil, atque ipsum optio vel reprehenderit eaque rem maiores exercitationem dolore, magnam et cupiditate quae totam sed earum obcaecati quia. Beatae possimus quia deserunt accusamus libero, veniam consequatur neque rem minus voluptates ratione quasi, saepe recusandae aliquam cum at, perferendis ipsum. Provident sint deserunt quos distinctio sequi alias, quo error, eaque quis mollitia nihil perferendis commodi voluptatibus nisi quod porro consectetur. Earum doloremque cum assumenda ipsa hic accusantium sed quisquam eaque, laudantium dolorum deserunt explicabo qui aspernatur provident adipisci tempore voluptatum dolores similique molestiae pariatur repudiandae et alias. Animi, facere! Nostrum praesentium sunt consectetur molestiae nulla itaque fugit? Ipsa porro doloribus corporis iure, sequi explicabo hic. Adipisci quae voluptates nam ipsam vitae repudiandae dolore velit dolores delectus officia exercitationem est animi ad nulla eos nemo expedita tenetur error, odio doloremque enim atque aspernatur molestias. Ut eos minus quisquam ea iste sint provident harum, temporibus doloribus, repellendus unde molestiae deserunt consequuntur soluta veritatis. Eaque minus laborum deleniti veniam eos deserunt ullam repellendus est quis dolore temporibus ut tempora qui, tempore fugit libero?the jungle where people to crazy stuff to keep all the things in place'
        },
        {
            heading: 'second sub title',
            p: 'welcome to the jungle where people to crazy stuff to keep all the things in place  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime corporis ea natus, adipisci maiores voluptatibus aut illum animi nesciunt aliquid non quo atque veniam nisi itaque. Necessitatibus fuga, nihil, atque ipsum optio vel reprehenderit eaque rem maiores exercitationem dolore, magnam et cupiditate quae totam sed earum obcaecati quia. Beatae possimus quia deserunt accusamus libero, veniam consequatur neque rem minus voluptates ratione quasi, saepe recusandae aliquam cum at, perferendis ipsum. Provident sint deserunt quos distinctio sequi alias, quo error, eaque quis mollitia nihil perferendis commodi voluptatibus nisi quod porro consectetur. Earum doloremque cum assumenda ipsa hic accusantium sed quisquam eaque, laudantium dolorum deserunt explicabo qui aspernatur provident adipisci tempore voluptatum dolores similique molestiae pariatur repudiandae et alias. Animi, facere! Nostrum praesentium sunt consectetur molestiae nulla itaque fugit? Ipsa porro doloribus corporis iure, sequi explicabo hic. Adipisci quae voluptates nam ipsam vitae repudiandae dolore velit dolores delectus officia exercitationem est animi ad nulla eos nemo expedita tenetur error, odio doloremque enim atque aspernatur molestias. Ut eos minus quisquam ea iste sint provident harum, temporibus doloribus, repellendus unde molestiae deserunt consequuntur soluta veritatis. Eaque minus laborum deleniti veniam eos deserunt ullam repellendus est quis dolore temporibus ut tempora qui, tempore fugit libero?'
        }
      ],
      date: '10 March 2018 by Emerson'
    };

    return (

      // <Router>
        <div className="ContentBox">
              <section className="Posts">
                <p className="Title"><span>{post1.title}</span></p>
                <p className="Content">{post1.body[0].heading}</p>
                <p className="Content">{post1.body[0].p.substring(0,300)}</p>
                <Link to={'/id'}><button>read more</button></Link>
                <p className="Date">{post1.date}</p>
              </section>
        </div>
      // </Router>
    );
  }
}

export default ContentBox;
