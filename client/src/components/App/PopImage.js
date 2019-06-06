import React from "react";
import "./styles/PopImage.css";


function PopImage(props) {

    return (
        <div className="row popImg">
            <div className="col-12 popImgInner">
                <img className="popImgPic" src={props.image} alt={props.title}></img>
                <button onClick={props.closeImage}><span className="fas fa-search-minus closeImage"></span></button>
            </div>
        </div>
    );
}


export default PopImage;