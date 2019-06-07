import React from "react";
import { Link, Route } from "react-router-dom";
import Artists from "./Artists";
import NavTabs from "../../components/App/NavTabs";
import "./Bio.css";
import InstaList from "../../components/App/InstaList";


function Bio(props) {
  return (
    <div>
      <NavTabs />
      <div className="jumboBioContainer">
        <div className="jumbotron main">
          <p className="display-4">Featured Artist</p>
          <p className="lead">Highlighting local artists who are changing the face of Charlotte</p>
          <hr className="my-4" />
          <img src="https://static1.squarespace.com/static/5be99fd896e76fa751de180a/t/5c29b1b86d2a73e6a9b311f7/1546241649983/osirisweb.jpg" alt="Osiris Rain" />
          <div className="featured">
            <p>Osiris Rain is an international muralist and post contemporary figurative painter. He is the founder of Osiris Rain Studios and the North Carolina Academy of Art. His murals and paintings are featured in numerous private and public collections across the globe.</p>
          </div>
          {/* <a href="https://www.instagram.com/osirisrain/" className="fa fa-instagram" alt="image of osirisRain"></a> */}
          <a href="https://www.instagram.com/osirisrain/"><button className="instaBtn" onClick="window.location.href='https://www.instagram.com/osirisrain/';"><i class="fab fa-instagram"></i></button></a>
          
        </div>
      </div>
      <Artists />
      <InstaList />
      {/* <div>
        <HLink to={`${props.match.url}/artists#carousel`} role="button" className="btn btn-link">
          Click here to discover artists around Charlotte
        </HLink>{" "}
        <Link to="/map" role="button" className="btn btn-link">
          Find local art!
        </Link>
        <Route exact path={`${props.match.url}/artists`} component={Artists} />
      </div> */}
    </div>
  );
}

export default Bio;
