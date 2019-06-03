import React from "react";
import "./styles/ArtCard.css";

function ArtCard(props) {
    return (
        <div className="card mb-3">
        <div className="row no-gutters justify-content-around container-fluid">
          {/* <div className="col-xs-3 col-sm-4 col-md-4 col-lg-5 img-container"> */}
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 img-container">
            <img src={props.image} className="card-img" alt={props.title} />
          </div>
          {/* <div className="col-xs-4 col-sm-5 col-md-6 col-lg-7"> */}
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.artist}</p>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><small className="text-muted">{props.location}</small></p>
            </div>
          </div>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span>
      </div>
    )
}

export default ArtCard;