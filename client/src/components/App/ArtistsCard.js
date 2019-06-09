import React, { Component } from "react";
import "../../pages/Bio/Bio.css";
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Center from 'react-center';


class ArtistsCard extends Component {
    render() {
        return (
            <div className="artistCarousel" id="carousel">
            <Center>
            <Carousel showThumbs={false} width='750px' dynamicHeight> 
                <div>
                    <img className="carouselImage" src="http://charlottemagazine-images.dashdigital.com/DentistMuralEliz-11.jpg?ver=1488381046" alt="Matt Hooker"/>
                    <h5 className="legend">Matt Hooker -- Artist guy. I also like motorcycles, cars and music made before 1985.</h5>
                </div> 
                <div>
                    <img className="carouselImage" src="http://charlottemagazine-images.dashdigital.com/DentistMuralEliz-14.jpg?ver=1488381066" alt="Matt Moore"/>
                    <h5 className="legend">Matt Moore -- Since 2014, Hooker and Moore have been covering Charlotte with their murals.</h5>
                </div>
                <div>
                    <img className="carouselImage" src="http://blog.christopherrecord.com/wp-content/uploads/2009/09/noda_0082-copy-copy.jpg" alt="William Puckett" />
                    <h5 className="legend">William Puckett -- Whether you're driving under the Matheson Avenue bridge, grabbing a cup of coffee and a pastry from Amelie's or stopping by the venerable Jack Beagle's for a drink the murals by local artist Will Puckett are a familiar site for Charlotte locals</h5>
                </div>
                <div>
                    <img className="carouselImage" src="https://www.charlottefive.com/wp-content/uploads/2018/07/Nick_Napoletano_by_Alex_Cason-1496-768x512.jpg" alt="Nick Napolentano" />
                    <h5 className="legend">Nick Napolentano -- A painter, muralist, and designer known for hyperrealist works brimming with allegory and symbolism.</h5>
                </div>
                
            </Carousel>
            </Center>
            </div>
        )
            
            
            // <div className="card mb-3">
            //     <div className="row no-gutters justify-content-around container-fluid">
            //         <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 img-container">
            //             <img alt={props.name} className="card-img" src={props.image} />
            //         </div>
            //         <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
            //             <div className="card-body">
            //                 <h5 className="card-title">{props.name}</h5>
            //                 <p className="card-text">{props.bio} </p>
            //                 <a href={props.instagram} className="fa fa-instagram" />
            //             </div>
            //         </div>
            //     </div>
            // </div>
    }
}

export default ArtistsCard;