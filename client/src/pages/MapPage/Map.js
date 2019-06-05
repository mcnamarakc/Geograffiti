import React from "react";
import ReactDOM from "react-dom";
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import "./MapPage.css";
import API from "../../lib/API";

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <>{items}</>
}


class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 35.2271,
      lng: -80.843124,
      zoom: 13,
      markers: [],
      nbhood: ""
    }
  }


  renderNodaMarkers = event => {
    event.preventDefault();
    API.ArtPage.getNeighborhood("NODA")
      .then(res => {
        this.setState({
          nbhood: "NODA",
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></>})
          })
        })
      })
      .catch(err => console.log(err));

  }

  renderMidwoodMarkers = event => {
    event.preventDefault();
    API.ArtPage.getNeighborhood("Plaza-Midwood")
      .then(res => {
        this.setState({
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></>})
          })
        })
      })
      .catch(err => console.log(err));

  }

  renderAllMuralMarkers = event => {
    event.preventDefault();
    API.ArtPage.getArt()
      .then(res => {
        this.setState({
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></>})
          })
        })
        console.log(this.state.nbhood)
      })
      .catch(err => console.log(err));
  }

  renderMidwoodMarkers = event => {
    event.preventDefault();
    API.ArtPage.getNeighborhood("Plaza-Midwood")
      .then(res => {
        this.setState({
          nbhood: "Plaza-Midwood",
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">{!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></>})
          })
        })
        console.log(this.state.nbhood)
      })
      .catch(err => console.log(err));

  }


  render() {
    const position = [this.state.lat, this.state.lng];

    console.log(this.state.markers)
    return (
      <div>
        
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <LeafletMap center={position} zoom={this.state.zoom}>
              <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              <MyMarkersList markers={this.state.markers}/>
              </LeafletMap>
            </div>
            <div className="col-1"></div>
          </div>
          </div>
          <div className="row">
          <div className="col-12"><p className="neighborhoodHeader">Neighborhoods:</p></div>
          </div>
          <div className="row">
          <div className="col-12">
          <button onClick={this.renderNodaMarkers} type="button" id="nodaMapBtn" className="btn btn-secondary">Noda</button>
          <button onClick={this.renderMidwoodMarkers} type="button" id="midwoodMapBtn" className="btn btn-secondary">Plaza Midwood</button>
          <button onClick={this.renderAllMuralMarkers} type="button" id="allMuralMarkersMapBtn" className="btn btn-secondary">Show all</button>
          </div>
          </div>
      </div>

    );
  }
}

export default Map;