import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    let chosenCountry;
    const { country } = this.props;
    // const country = 'United States';
    if (country === 'Brazil') {
      chosenCountry = 'country=br&';
    } else if (country === 'United States') {
      chosenCountry = 'country=us&';
    } else if (country === 'France') {
      chosenCountry = 'country=fr&';
    }
    const url = 'https://newsapi.org/v2/top-headlines?' +
    chosenCountry +
    'apiKey=76bf8253d195407da53a87a92fdaedf5';

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.news.map((item) => {
      return (
        <NewSingle key={item.url} item={item} />
      );
    });
  }


  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
