// import React from "react";
import "./styles/ArtCard.css";
import Popup from "./mapPopup";
import React, { Component } from 'react';


class ArtCard extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showPopup: false,
      lat: 0,
      lng: 0
     };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,

    });
  }

  
  render() {
    return (
      <div className="card mb-3">
        <div className="row no-gutters justify-content-around container-fluid">
          {/* <div className="col-xs-3 col-sm-4 col-md-4 col-lg-5 img-container"> */}
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 img-container">
            <img src={this.props.image} className="card-img" alt={this.props.title} />
          </div>
          {/* <div className="col-xs-4 col-sm-5 col-md-6 col-lg-7"> */}
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div className="card-body">
              <h3 className="card-title">{this.props.title}</h3>
              <hr></hr>
              <h6 className="card-text">Artist: {this.props.artist}</h6>
              <p className="card-text">{this.props.description}</p>
              <p className="card-text"><small className="text-muted">{this.props.location}</small></p>
            </div>
          </div>
          <div>
            <span onClick={this.togglePopup.bind(this)} className="remove">map</span>

            {this.state.showPopup ?
              <Popup
                latitude={this.props.latitude}
                longitude={this.props.longitude}
                text='Click "Close Button" to hide popup'
                closePopup={this.togglePopup.bind(this)}
              />
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}

  export default ArtCard;


