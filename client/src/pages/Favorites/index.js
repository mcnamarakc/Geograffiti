import React, { Component } from "react";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import ArtCard from "../../components/App/ArtCard";
import NavTabs from "../../components/App/NavTabs";

class Favorites extends Component {
  static contextType = AuthContext;

  state = {
    error: "",
    favorites: []
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = () => {
    API.Favorites.get(this.context.authToken)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        return this.setState({ favorites: data.favorites })
      })
      .catch(err => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <NavTabs />
        
        <ul>
          {this.state.favorites.map(art =>
            (
              <div className="zoomUp" key={art.id}>
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
                  favorited={true}
                  deleteCb={this.getFavorites}
                />
              </div>
              
              // <li key={fav.id}>
              // {fav.id}
              // <img src={fav.image} alt="" style={{height: "200px"}}/>
              // <button onClick={() => this.deleteFavorite(fav.id)} style={{color:"white"}}>X</button>
              // </li>
            )
          )}
        </ul>
        
      </div>
    );
  }
}

export default Favorites;
