import React from "react";
import LinkLink from "../../images/In-2C-28px-R.png";
import LinkGit from "../../images/GitHub_Logo.png";

function PortfolioCard(props) {

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <img className="aboutPic" src={props.imgLink} alt="Paul Whurr"></img>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <h2>{props.name}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <a className="portfolio" href={props.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <a href={props.gitLink} target="_blank" rel="noopener noreferrer"><img className="github" src={LinkGit} alt="GitHub Link"></img></a>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12">
                    <a className="linkedin" href={props.linkedInLink} target="_blank" rel="noopener noreferrer"><img src={LinkLink} alt="LinkedIn Link"></img></a>
                </div>
            </div>
        </div>

    )
}

export default PortfolioCard;