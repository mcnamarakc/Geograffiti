import React from "react";
//import artists from "./data/artists.json";
import ArtistsCard from "../../components/App/ArtistsCard.js"
import "./Bio.css";
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


// class Artists extends React.Component {
//   state = {
//     artists: artists
//   }

function Artists() {
    return (
      <div>
        <h1 className="text-center">More Local Artists</h1>
        <hr />
        <ArtistsCard />
      </div>
  );
}
export default Artists;

