import React from "react";
import "./MapPage.css";
import NavTabs from "../../components/App/NavTabs";


function MapPage() {
  return (
    <div>
      <NavTabs />
      <h1>MAP</h1>
      <div id='map'></div>
      <div className="info-box">
        <div id="info">
          <p>Draw your route using the draw tools on the right. To get the most accurate route match, draw points at
                regular intervals.</p>
        </div>
        <div id="directions"></div>
      </div>

    </div>
  );
}

export default MapPage;