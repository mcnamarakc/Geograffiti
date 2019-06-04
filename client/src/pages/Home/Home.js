import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Home.css"


class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className = "header1"></div>
        <div className="jumbotron homeContainer homebox mt-5">
          <div id="page">
          <ul className="cb-slideshow">
            <li><span></span><div><h3> </h3></div></li>
            <li><span></span><div><h3> </h3></div></li>
            <li><span></span><div><h3> </h3></div></li>
            <li><span></span><div><h3> </h3></div></li>
            <li><span></span><div><h3> </h3></div></li>
            <li><span></span><div><h3> </h3></div></li>
          </ul>  
          </div>
        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-3 mt-1 p-3 homebox grayout">
            <Link to="/map"><h1>Map</h1></Link>
          </div>
          <div className="col-3 mt-1 p-3 homebox grayout">
            <Link to="/art"><h1>Art</h1></Link>
          </div>
          <div className="col-3 mt-1 p-3 homebox grayout">
            <Link to="/bio"><h1>Bio</h1></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
