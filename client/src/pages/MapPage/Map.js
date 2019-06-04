import React from "react";
import ReactDOM from "react-dom";
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import "./MapPage.css";


class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 35.2271,
      lng: -80.843124,
      zoom: 13
    }
  }

//   componentDidMount =() => {
//       this.map
//   }

  render() {
    const position = [this.state.lat, this.state.lng];
    // const { Map: LeafletMap } = window.ReactLeaflet;
    return (
        // <h1>hello</h1>
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

// window.addEventListener ("DOMContentLoaded",(event) => {
//     ReactDOM.render(<SimpleExample />, document.getElementById('container'))
// })



export default Map;