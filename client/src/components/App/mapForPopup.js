import React from "react";
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import "./styles/mapPopup.css";
import API from "../../lib/API";


class PopupMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: 16,
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
        </Marker>
      </Map>
      </div>
      
    );
  }
}

export default PopupMap;