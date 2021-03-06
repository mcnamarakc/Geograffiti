import React from "react";
import API from "../../lib/API";
import ArtCard from "../../components/App/ArtCard";
import NavTabs from "../../components/App/NavTabs";
import AOS from "aos";
import DropList from "../../components/App/DropList";
import "./Art.css";
import AuthContext from '../../contexts/AuthContext';

class Art extends React.Component {
  static contextType = AuthContext;

  constructor() {
    super();

    this.state = {
      showMenu: false,
      art: [],
      neighborhoods: [],
      artists: [],
      search: "",
      favorites: []
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

    this.context.authToken
      ? this.getArtWithFavorites()
      : this.returnArt((art) => {
        this.setState({art})
      });
  };

  returnArt = (cb) => {
    API.ArtPage.getArt()
      .then(res => cb(res.data))
      .catch(err => console.log(err));
  }

  getArtWithFavorites = () => {
    API.Favorites.get(this.context.authToken)
      .then(favRes => {
        const favorites = favRes.data.favorites;
        console.log(favorites)
        this.returnArt((artArray) => {
          console.log(artArray)
          let art = artArray.map(item => {
            const inFavorites = favorites.find(function(elem){
              return elem.id === item.id;
            })
            return inFavorites ? {...item, favorited: true} : item;
          })
          console.log(art)
          
          this.setState({favorites, art})
        })
      })
      .catch(err => {
        console.log(err);
        this.returnArt((art) => {
          this.setState({art})
        })
      });
  }

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
        <div className="row justify-content-around art-row">
          <div className="col-3 dropdowner pt-1">
            <h3 className="dropTitle">Search by neighborhood</h3>
            {this.state.neighborhoods.map(neighborhoods => (
            <DropList
              id={neighborhoods.id}
              key={neighborhoods.id}
              listItem={(neighborhoods.neighborhood==="NODA") ? "NoDa" : neighborhoods.neighborhood}
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
          <div className="col-3 artbtn pt-1" onClick={this.handleSubmit}><h3 className="dropTitle">Display all art</h3>
            {/* <button className="btn btn-info a</button> */}
          </div>
          <div className="col-3 dropdowner pt-1">
            <h3 className="dropTitle">Search by artist</h3>
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
          <div className="zoomUp">
            <ArtCard
              id={art.id}
              key={art.id}
              title={!art.title ? "Unknown" : art.title}
              image={art.image}
              artist={!art.artistName ? "Unknown" : art.artistName}
              description={art.description}
              location={(art.neighborhood==="NODA") ? "NoDa" : art.neighborhood}
              latitude={art.latitude}
              longitude={art.longitude}
              favorited={art.favorited}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Art;