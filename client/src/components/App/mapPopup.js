import React from 'react';
import "./styles/mapPopup.css";
import Map from "../../pages/MapPage/Map";


class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                    <div className="mapPopUp"><Map /></div>
                </div>
            </div>
        );
    }
}

export default Popup;