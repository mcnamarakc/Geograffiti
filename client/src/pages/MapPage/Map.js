import React from "react";
import L from "leaflet";
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet'
import "./MapPage.css";
import API from "../../lib/API";
import Purple from "./images/marker-icon-violet.png"

const customMarker = L.icon({ iconUrl: Purple })

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

const MyPopupMarkerBrew = ({ content, position }) => (
  <Marker position={position} icon={customMarker}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersListBrew = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarkerBrew key={key} {...props} />
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
      brewMarkers: [],
      nbhood: ""
    }
  }


  renderNodaMarkers = event => {
    event.preventDefault();
    API.ArtPage.getNeighborhood("NODA")
      .then(res => {
        this.setState({
          nbhood: "NODA",
          brewMarkers: [],
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></> })
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
          brewMarkers: [],
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></> })
          })
        })
        console.log(this.state.nbhood)
      })
      .catch(err => console.log(err));
  }

  removeBreweries = event => {
    event.preventDefault();
    this.setState({
      brewMarkers: []
    })
  }

  renderBreweries = event => {
    event.preventDefault();
    if (this.state.nbhood === "NODA") {
      API.Business.getNeighborhoodBrewery("NODA")
        .then(res => {
          console.log(res.data)
          this.setState({
            brewMarkers: res.data.map(brew => {
              return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p></> })
            })
          })
          console.log(this.state.brewMarkers)
        })
        .catch(err => console.log(err));
    }
    else if (this.state.nbhood === "Plaza-Midwood") {
      API.Business.getNeighborhoodBrewery("Plaza-Midwood")
        .then(res => {
          console.log(res.data)
          this.setState({
            brewMarkers: res.data.map(brew => {
              return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p></> })
            })
          })
          console.log(this.state.brewMarkers)
        })
        .catch(err => console.log(err));
    }
    else {
      API.Business.getBrewery()
        .then(res => {
          console.log(res.data)
          this.setState({
            brewMarkers: res.data.map(brew => {
              return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p></> })
            })
          })
          console.log(this.state.brewMarkers)
        })
        .catch(err => console.log(err));
    }
  }

  renderAllMuralMarkers = event => {
    event.preventDefault();
    API.ArtPage.getArt()
      .then(res => {
        this.setState({
          nbhood: "",
          brewMarkers: [],
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></> })
          })
        })
        console.log(this.state.nbhood)
      })
      .catch(err => console.log(err));
  }


  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div>
        <div id="mapPageContent" className="container">
          <div className="row">
            <div className="col-2 directionsContainer"><p>Route:</p></div>
            <div className="col-8">
              <LeafletMap center={position} zoom={this.state.zoom}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <MyMarkersList markers={this.state.markers} />
                <MyMarkersListBrew markers={this.state.brewMarkers} />
              </LeafletMap>
            </div>
            <div className="col-2 artListContainer">
              <p>Art in {this.state.nbhood}:</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12"><p className="neighborhoodHeader">Neighborhoods:</p></div>
        </div>
        <div className="row">
          <div className="col-12">
            <button onClick={this.renderNodaMarkers} type="button" id="nodaMapBtn" className="btn btn-secondary"><div className="murals">Noda</div></button>
            <button onClick={this.renderMidwoodMarkers} type="button" id="midwoodMapBtn" className="btn btn-secondary"><div className="murals">Plaza Midwood</div></button>
            <button onClick={this.renderAllMuralMarkers} type="button" id="allMuralMarkersMapBtn" className="btn btn-secondary"><div className="murals">Show all Art</div></button>
            <button onClick={this.renderBreweries} type="button" id="allBreweryMarkersMapBtn" className="btn btn-secondary"><div className="breweries">Add Breweries</div></button>
            <button onClick={this.removeBreweries} type="button" id="removeBreweryMarkersMapBtn" className="btn btn-secondary"><div className="breweries">Remove Breweries</div></button>
          </div>
        </div>
      </div>

    );
  }
}

export default Map;

