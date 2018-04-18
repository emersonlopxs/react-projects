import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api')
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        const pictures = data.map((pic) => {
          return (
            <div className="picture">
              <p>{pic.title}</p>
              <img src={pic.link} alt="happy rick" />
            </div>
          );
        });
        console.log(pictures);
        this.setState({ pictures: pictures });
        console.log('state', this.state.pictures);
      });
  }

  render() {
    return (
      <div className="Image">
        {this.state.pictures}
      </div>
    );
  }
}

export default Image;
