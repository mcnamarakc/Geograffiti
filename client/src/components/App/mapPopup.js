import React from 'react';
import "./styles/mapPopup.css";
import PopupMap from "./mapForPopup";


class Popup extends React.Component {


    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close map</button>
                    <div className="mapPopUp">
                        <PopupMap
                        latitude={this.props.latitude}
                        longitude={this.props.longitude}
                        />
                        </div>
                </div>
            </div>
        );
    }
}

export default Popup;