import React from "react";
import "./styles/ArtCard.css";

function ArtCard(props) {
    return (
        <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-5 img-container">
            <img src={props.image} className="card-img" alt={props.name} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.occupation}</p>
              <p className="card-text"><small className="text-muted">{props.location}</small></p>
            </div>
          </div>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span>
      </div>
    )
}

export default ArtCard;