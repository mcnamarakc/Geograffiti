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
          <div className="col-3 mt-1 p-3 homebox">
            <Link to="/map"><h1>Map</h1></Link>
          </div>
          <div className="col-3 mt-1 p-3 homebox">
            <Link to="/art"><h1>Art</h1></Link>
          </div>
          <div className="col-3 mt-1 p-3 homebox">
            <Link to="/bio"><h1>Bio</h1></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
