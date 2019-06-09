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
          <h1 className="display-4">Featured Artist</h1>
          <p className="lead">Highlighting local artists who are changing the face of Charlotte</p>
          <hr className="my-4" />
          <img className="img-fluid" src="https://static1.squarespace.com/static/5be99fd896e76fa751de180a/t/5c29b1b86d2a73e6a9b311f7/1546241649983/osirisweb.jpg" alt="Osiris Rain" />
          <div className="featured">
            <p className="subtitleImgText">Osiris Rain is an international muralist and post contemporary figurative painter. He is the founder of Osiris Rain Studios and the North Carolina Academy of Art. His murals and paintings are featured in numerous private and public collections across the globe.</p>
            <div className="interviewFormatting">
            <hr></hr>
            <h4>We interviewed Osiris to learn a little more about the incredible artist behind these mural masterpieces.</h4>
            <p className="q">You have such a unique style, what brought about your interest in creating murals?</p>
              <p className="a">My background is in traditional studio painting. So when I started painting murals as a scenic artist in the film industry, I was immediately drawn to the craft as it was incredibly different from what I was used to. I thoroughly enjoy being outdoors, interacting with people while I work, and the visceral feeling of being able to paint a massive surface in a week or so, as opposed to the months or years that an oil painting might take to create.</p>
             <br></br>
              <p className="q">What's your favorite mural in Charlotte?</p>
             <p className="a">It probably has to be the second piece that I created at Camp North End titled Everybody Hurts And That's OK. It's the first full-color rendering of the human form that I've done in about three years. So it was nice to have the challenge again.</p>
             <br></br>
              <p className="q">What's your favorite that you've created?</p>
              <p className="a">My favorite piece as a whole production (so far) would probably be the final wall that I painted for Novel Stonewall Station here in Charlotte depict a female figure surrounded by lotus flowers. I enjoyed this one as it incorporated an additional creative video collaboration between the model, the videographer, and myself. But as a solo piece, by far, my favorite is the one mentioned above at Camp North End.</p>
              <br></br>
              <p className="q">What inspires your art in Charlotte?</p>
              <p className="a">I'm inspired by my creative community here. Not just muralists, but other artists, dancers, poets, and general creatives. I love being inspired by the creativity, ingenuity, and drive that makes up the Charlotte art scene</p>
              <br></br>
              <p className="q">What kind of paint do you use?</p>
              <p className="a">For murals, I primarily use Montana Colors 94 line of aerosol paint. But I'll supplement this with exterior grade latex paints from Sherwin Williams when a job calls for it.</p>
          </div>
          </div>
          {/* <a href="https://www.instagram.com/osirisrain/" className="fa fa-instagram" alt="image of osirisRain"></a> */}
          <p>Be sure to checkout Osiris' full collection on instagram.</p>
          <a href="https://www.instagram.com/osirisrain/"><button className="instaBtn" onClick="window.location.href='https://www.instagram.com/osirisrain/';"><i className="fab fa-instagram"></i></button></a>

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
