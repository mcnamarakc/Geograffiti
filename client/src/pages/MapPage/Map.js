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

const MyPopupMarkerBrew = ({ content, position }) => (
  <Marker position={position}>
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
          brewMarkers: [],
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></>})
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
              return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p></>})
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
            return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p></>})
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
            return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p></>})
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
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></>})
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
        <LeafletMap center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <MyMarkersList markers={this.state.markers}/>
          <MyMarkersListBrew markers={this.state.brewMarkers}/>
        </LeafletMap>
        <button onClick={this.renderNodaMarkers} type="button" className="btn btn-secondary">Noda</button>
        <button onClick={this.renderMidwoodMarkers} type="button" className="btn btn-secondary">Plaza Midwood</button>
        <button onClick={this.renderAllMuralMarkers} type="button" id="allMuralMarkersMapBtn" className="btn btn-secondary">Show all</button>
        <button onClick={this.renderBreweries} type="button" id="allBreweryMarkersMapBtn" className="btn btn-secondary">Add Breweries</button>
        <button onClick={this.removeBreweries} type="button" id="removeBreweryMarkersMapBtn" className="btn btn-secondary">Remove Breweries</button>
      </div>

    );
  }
}

export default Map;