import React from "react";
import L from "leaflet";
import { Map as LeafletMap, Marker, Popup, TileLayer, Polyline } from 'react-leaflet'
import "./MapPage.css";
import API from "../../lib/API";
import Purple from "./images/marker-icon-violet.png";

const customMarker = L.icon({ iconUrl: Purple });

let queryArr = [];

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position} >
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
    <Popup >{content}</Popup>
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
      nbhood: "",
      routePoint: [],
      startRoute: "Click on Markers to Calculate Route",
      calculate: "",
      delete: "",
      directions: []
    }
  }


  renderNodaMarkers = event => {
    event.preventDefault();
    queryArr = [];
    API.ArtPage.getNeighborhood("NODA")
    .then(res => {
        this.setState({
          nbhood: "NODA",
          lat: 35.2456,
          lng: -80.8018,
          zoom: 15,
          brewMarkers: [],
          routePoint: [],
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /><p className="route" onClick={(event) => this.addPoints([item.latitude, item.longitude], item.latitude, item.longitude, event)}>Add to route</p></> })
          })
        })
        console.log(this.state.nbhood)
      })
      .catch(err => console.log(err));
  }

  renderMidwoodMarkers = event => {
    event.preventDefault();
    queryArr = [];
    API.ArtPage.getNeighborhood("Plaza-Midwood")
      .then(res => {
        this.setState({
          nbhood: "Plaza-Midwood",
          lat: 35.2239,
          lng: -80.8018,
          zoom: 15,
          brewMarkers: [],
          routePoint: [],
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /><p className="route" onClick={(event) => this.addPoints([item.latitude, item.longitude], item.latitude, item.longitude, event)}>Add to route</p></> })
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
              return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p><p className="route" onClick={(event) => this.addPoints([brew.latitude, brew.longitude], brew.latitude, brew.longitude, event)}>Add to route</p></> })
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
              return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p><p className="route" onClick={(event) => this.addPoints([brew.latitude, brew.longitude], brew.latitude, brew.longitude, event)}>Add to route</p></> })
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
              return ({ position: [brew.latitude, brew.longitude], key: brew.id, content: <><p><b>{brew.businessName}</b></p><p>{brew.description}</p><p className="route" onClick={(event) => this.addPoints([brew.latitude, brew.longitude], brew.latitude, brew.longitude, event)}>Add to route</p></> })
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
          lat: 35.2271,
          lng: -80.843124,
          zoom: 13,
          brewMarkers: [],
          markers: res.data.map(item => {
            return ({ position: [item.latitude, item.longitude], key: item.id, content: <><p className="popup-title">Title: {!item.title ? "Unknown" : item.title}</p><img className="popup-image" src={item.image} /></> })
          })
        })
        console.log(this.state.markers)
      })
      .catch(err => console.log(err));
  }

  addPoints = (route, lat, lon, event) => {
    event.preventDefault();
    queryArr.push("'" + lat + "," + lon + "'");
    console.log(queryArr)
    this.setState({
      startRoute: "",
      routePoint: [...this.state.routePoint, route],
      calculate: "Get Route",
      delete: "Delete Route"
    })
  }

  deleteRoute = event => {
    event.preventDefault();
    queryArr = [];
    this.setState({
      routePoint: [],
      calculate: "",
      delete: "",
      startRoute: "Click on Markers to Calculate Route",
      directions: []
    })
  }

  getRoute = event => {
    event.preventDefault();
    this.setState({
      routePoint: []
    })
    API.Route.getRoute(queryArr)
      .then(res => {
        console.log(res)
        for (var j = 0; j < res.data.route.legs.length; j++) {
          for (var i = 0; i < res.data.route.legs[j].maneuvers.length; i++) {
            this.setState({
              routePoint: [...this.state.routePoint, [res.data.route.legs[j].maneuvers[i].startPoint.lat, res.data.route.legs[j].maneuvers[i].startPoint.lng]],
              directions: [...this.state.directions, "\r\n -" + res.data.route.legs[j].maneuvers[i].narrative + "\r\n"],
              calculate: "",
              delete: ""
            })
          }
        }
      })

      .catch(err => console.log(err))
  }




  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div>
        {/* {this.state.narrative.map()} */}
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="mapPageContent" className="container">
                <div className="row">
                  <div className="col-4 directionsContainer"><p>Route:</p><h3>{this.state.startRoute}</h3><p onClick={this.getRoute}>{this.state.calculate}</p>,<p onClick={this.deleteRoute}>{this.state.delete}</p><p>{this.state.directions.map(item => <p>{item}</p>)}</p></div>
                  <div className="col-8">
                    <LeafletMap center={position} zoom={this.state.zoom}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                      />
                      <MyMarkersList markers={this.state.markers} />
                      <MyMarkersListBrew markers={this.state.brewMarkers} />
                      <Polyline color="red" positions={this.state.routePoint} />
                    </LeafletMap>
                  </div>
                  {/* <div className="col-0 artListContainer">
                    <p>Art in {this.state.nbhood}:</p>
                  </div> */}
                </div>
              </div>
              <div className="row">
                <div className="col-12"><p className="neighborhoodHeader">Neighborhoods:</p></div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button onClick={this.renderNodaMarkers} type="button" id="nodaMapBtn" className="btn btn-secondary"><div className="murals">NoDa</div></button>
                  <button onClick={this.renderMidwoodMarkers} type="button" id="midwoodMapBtn" className="btn btn-secondary"><div className="murals">Plaza Midwood</div></button>
                  <button onClick={this.renderAllMuralMarkers} type="button" id="allMuralMarkersMapBtn" className="btn btn-secondary"><div className="murals">Show all Art</div></button>
                  <button onClick={this.renderBreweries} type="button" id="allBreweryMarkersMapBtn" className="btn btn-secondary"><div className="breweries">Add Breweries</div></button>
                  <button onClick={this.removeBreweries} type="button" id="removeBreweryMarkersMapBtn" className="btn btn-secondary"><div className="breweries">Remove Breweries</div></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;

