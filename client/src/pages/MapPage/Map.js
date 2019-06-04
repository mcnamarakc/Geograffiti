import React from "react";
import ReactDOM from "react-dom";
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import "./MapPage.css";
import API from "../../lib/API";


class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 35.2271,
      lng: -80.843124,
      zoom: 13,
      markers: []
    }
  }



// class Pins extends React.Component {
//   state = {

//   }
// }

renderNodaMarkers = event => {
  event.preventDefault();
  API.ArtPage.getNeighborhood("NODA")
  .then(res => {
    this.setState({
      markers: res.data.map(item => {
        return {position:[item.latitude, item.longitude]}
      })
    })
  })
  .catch(err => console.log(err));
    
}

  render() {
    const position = [this.state.lat, this.state.lng];
    console.log(this.state.markers)
    return (
      <div>
        <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker markers={this.state.markers} >
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
      <button onClick={this.renderNodaMarkers} type="button" className="btn btn-secondary">Noda</button>
      <button onClick={this.renderMidwoodMarkers} type="button" className="btn btn-secondary">Plaza Midwood</button>
      </div>
      
    );
  }
}

export default Map;