import React from "react";
import API from "../../lib/API";
import NavTabs from "../../components/App/NavTabs";
import AOS from "aos";
import "./About.css";
import PortfolioCard from "../../components/App/PorfolioCard";

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
                        <h1>Geograffiti</h1>
                    </div>
                    <div className="col-12 titleBack">
                        <h1>Behind</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-5">
                        <br></br>
                        <br></br>
                        <p>Geograffiti was born from five creative minds with a mutual love for art.  Our goal is to bring that love of art to the public in the most public of places.</p>
                        <br></br>
                        <p>Based in Charlotte, North Carolina, the Geograffiti team is surrounded by neighborhoods rich with public art and murals done by many local and international artists.  Whether emblazoned across the side of the newest Charlotte brewery or found tucked away down a side street during an evening stroll in NoDa, you may never know when you can run across some an excellent piece of modern street art. </p>
                        <br></br>
                        <p>Bridging the gap between the art lover and where to find it comes Geograffiti.  Perfect for the Charlotte tourist who wants to immerse themselves in local street art or the hometown Charlottean looking for an afternoon of enrichment, Geograffiti gathers together the imagery you would love to see and means at which to find it.</p>
                        <br></br>
                        <p>Geograffiti is urban art exploration.</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <h1>Who are we?</h1>
                    </div>
                </div>
                <PortfolioCard 
                    name= "Lara Eller"
                    imgLink="https://media.licdn.com/dms/image/C4E03AQEtuX5KTfxYqQ/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=kCeDDzdLceKAAad4HBqocuqhBvZXo4LVL1dGFSWH-JE"
                    portfolio="https://lara-e.github.io/Bootstrap-Portfolio/"
                    gitLink="https://github.com/Lara-E"
                    linkedInLink="https://www.linkedin.com/in/lara-eller-298351182/"
                />
                <PortfolioCard 
                    name= "Devin Price"
                    imgLink="https://media.licdn.com/dms/image/C4D03AQGKZ7JFfBL7QA/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=jr2eB0wgPg0zh2fq5zm6iLrplKKNIrB7azMJ3qrlAEM"
                    portfolio="https://devingprice.github.io/portfolio.html"
                    gitLink="https://github.com/devingprice"
                    linkedInLink="https://www.linkedin.com/in/devin-price-b7a761188/"
                />
                <PortfolioCard 
                    name= "Kathleen McNamara"
                    imgLink="https://media.licdn.com/dms/image/C4E03AQHwceBH6ZpwHg/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=NPBA_Wg9vG53xCssXmiZNdE9wQcuhGFdXkgIsSpHm4s"
                    portfolio="https://mcnamarakc.github.io/Bootstrap-Portfolio/"
                    gitLink="https://github.com/mcnamarakc"
                    linkedInLink="https://www.linkedin.com/in/kathleen-c-mcnamara/"
                />
                <PortfolioCard 
                    name= "Justin Summers"
                    imgLink="https://media.licdn.com/dms/image/C4E03AQHxN_uUMly7nw/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=eG58-aD1lutrqEI3Uq8dyh1qsRi3P36rHH_4ROI97fM"
                    portfolio="https://dumpstro.github.io/Basic-Portfolio/index.html"
                    gitLink="https://github.com/dumpstro"
                    linkedInLink="https://www.linkedin.com/in/justin-summers-77a390134/"
                />
                <PortfolioCard 
                    name= "Paul Whurr"
                    imgLink="https://pawhurr.github.io/images/Me.jpg"
                    portfolio="https://pawhurr.github.io/"
                    gitLink="https://github.com/Pawhurr"
                    linkedInLink="https://www.linkedin.com/in/paul-whurr/"
                />
                

            </div>
        </div>
    )}
}

export default About;