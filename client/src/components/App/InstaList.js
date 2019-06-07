import React from "react";
import "../../pages/Bio/Bio.css"
import Center from 'react-center';

function InstaList() {
    return (
        <Center>
            <div className="instaContainer">"
                <ul className="list-group flex-md-row">
                    <li className="list-group-item">
                        <a href="https://www.instagram.com/hookermedia/"><button className="instaBtn" onClick="window.location.href='https://www.instagram.com/hookermedia/';"><i className="fab fa-instagram"></i></button></a>
                        <p className="instaName">Matt Hooker</p>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.instagram.com/puckmcgruff/"><button className="instaBtn" onClick="window.location.href='https://www.instagram.com/puckmcgruff/';"><i className="fab fa-instagram"></i></button></a>
                        <p className="instaName">Matt Moore</p>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.instagram.com/mr_puckett/"><button className="instaBtn" onClick="window.location.href='https://www.instagram.com/mr_puckett/';"><i className="fab fa-instagram"></i></button></a>
                        <p className="instaName">William Puckett</p>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.instagram.com/napoletanoart/"><button className="instaBtn" onClick="window.location.href='https://www.instagram.com/napoletanoart/';"><i className="fab fa-instagram"></i></button></a>
                        <p className="instaName">Nick Napoletano</p>
                    </li>
                </ul>
            </div>
        </Center>
        
        
    );
};

export default InstaList;