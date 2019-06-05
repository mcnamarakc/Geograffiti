import React from "react";
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// import "./MapPage.css";
import API from "../../lib/API";


class PopupMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    //   lat: 35.2271,
    //   lng: -80.843124,
      zoom: 13,
      markers: []
    }
  }


  render() {
    const position = [this.props.latitude, this.props.longitude];
    
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      </div>
      
    );
  }
}

export default PopupMap;