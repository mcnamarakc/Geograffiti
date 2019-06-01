import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Home.css"


class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron homeContainer homebox mt-5">
          <p>GEOGRAFFITI</p>
        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-3 mt-1 p-5 homebox">
            <Link to="/map"><p>Map</p></Link>
          </div>
          <div className="col-3 mt-1 p-5 homebox">
            <Link to="/art"><p>Art</p></Link>
          </div>
          <div className="col-3 mt-1 p-5 homebox">
            <Link to="/bio"><p>Bio</p></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
