import React from "react";
// import ReactLeaflet from "leaflet";
// import ReactDOM from "react-dom";
import "./MapPage.css";
import NavTabs from "../../components/App/NavTabs";
import Map from "./Map.js";





function MapPage() {
  return (
    <div>
      <NavTabs />
      {/* <h1>MAP</h1> */}
      <div id="container">
        <Map />
      </div>
      {/* <div className="info-box">
        <div id="info">
          <p>Draw your route using the draw tools on the right. To get the most accurate route match, draw points at
                regular intervals.</p>
        </div>
        <div id="directions"></div>
      </div> */}

    </div>
  );
}

export default MapPage;