import React from "react";
import API from "../../lib/API";
import ArtCard from "../../components/App/ArtCard";
import NavTabs from "../../components/App/NavTabs";
import AOS from "aos";
import DropList from "../../components/App/DropList";
import "./Art.css";

class Art extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      art: [],
      neighborhoods: [],
      artists: [],
      search: ""
    };
  }


  componentDidMount() {
    AOS.init();
    API.ArtPage.getAllArtists()
    .then(res => this.setState({artists:res.data}))
    .catch(err => console.log(err));

    API.ArtPage.getAllNeighborhoods()
    .then(res => this.setState({neighborhoods:res.data}))
    .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();
    API.ArtPage.getArt()
      .then(res => this.setState({ art: res.data }))
      .catch(err => console.log(err));
  };

  handleNeighborhood = event => {
    event.preventDefault();
    API.ArtPage.getNeighborhood(this.state.search)
      .then(res => this.setState({ art: res.data }))
      .catch(err => console.log(err));
  };

  handleArtist = event => {
    event.preventDefault();
    API.ArtPage.getArtist(this.state.search)
      .then(res => this.setState({ art: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavTabs />
        <h1 className="arthead">Art</h1>
        <button className="btn btn-info artbtn" onClick={this.handleSubmit}><h3>All art</h3></button>
        <div className="row justify-content-around art-row">
          <div className="col-4 dropdowner pt-1">
            <h3>Search by neighborhood</h3>
            {this.state.neighborhoods.map(neighborhoods => (
            <DropList
              id={neighborhoods.id}
              key={neighborhoods.id}
              listItem={neighborhoods.neighborhood}
              count={neighborhoods.count}
              handleClick={(event) => {
                event.preventDefault();
                API.ArtPage.getNeighborhood(neighborhoods.neighborhood)
                .then(res => this.setState({ art: res.data}))
                .catch(err => console.log(err))
              }}
              />
              ))}
          </div>
          <div className="col-4 dropdowner pt-1">
            <h3>Search by artist</h3>
            {this.state.artists.map(artists => (
              <DropList
                id={artists.id}
                key={artists.id}
                listItem={artists.artistName}
                count={artists.count}
                handleClick={(event) => {
                  event.preventDefault();
                  API.ArtPage.getArtist(artists.artistName)
                  .then(res => this.setState({ art: res.data}))
                  .catch(err => console.log(err))
                }}
                />
            ))}
          </div>
        </div>
        {this.state.art.map(art => (
          <div data-aos="zoom-in-up">
            <ArtCard
              id={art.id}
              key={art.id}
              title={!art.title ? "Unknown" : art.title}
              image={art.image}
              artist={!art.artistName ? "Unknown" : art.artistName}
              description={art.description}
              location={art.neighborhood}
              latitude={art.latitude}
              longitude={art.longitude}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Art;