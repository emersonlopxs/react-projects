import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNav extends Component {

  render() {
    return (
      <div className="MainNav">
        <div className="SubMain">
          <Link to={'/'}>Emerson Lopes</Link>
          <Link to={'/post'} className='post'> Posts </Link>
          <span><i className="ion-ios-barcode-outline"></i></span>
        </div>
      </div>
    );
  }
}

export default MainNav;
