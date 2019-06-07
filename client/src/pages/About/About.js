import React from "react";
import API from "../../lib/API";
import NavTabs from "../../components/App/NavTabs";
import AOS from "aos";
import "./About.css";

class About extends React.Component {

    componentDidMount() {
        AOS.init();
    }

    render() {
    return (
        <div>
            <NavTabs />
            <div className="container-fluid aboutHolder pb-5">
                <div className="row">
                    <div className="col-12 titleFront">
                        <h2>Geograffiti</h2>
                    </div>
                    <div className="col-12 titleBack">
                        <h2>Behind</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-5">
                        <br></br>
                        <br></br>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h1>Who are we?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" data-aos="zoom-out-up" data-aos-duration="2000">
                        <img className="aboutPic" src="https://pawhurr.github.io/images/Me.jpg" alt="Paul Whurr"></img>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h1>Paul Whurr</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <a className="portfolio" href="https://pawhurr.github.io/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <a href="https://github.com/Pawhurr" target="_blank" rel="noopener noreferrer"><div className="github"></div></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <a className="linkedin" href="https://www.linkedin.com/in/paul-whurr/" target="_blank" rel="noopener noreferrer"><img src="../../images/In-2C-28px-R.png" alt="LinkedIn Link"></img></a>
                    </div>
                </div>

            </div>
        </div>
    )}
}

export default About;