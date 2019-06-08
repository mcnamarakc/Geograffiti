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

  postFavorite = (id) => {
    API.Favorites.post(this.context.authToken, id)
      .then(data => {
        return console.log(data);
      })
      .catch(err => {
        if (err.response.status === 401) {
          console.log({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
      .finally(() => this.getFavorites());
  }

  deleteFavorite = (id) => {
    // API.Favorites.delete(this.context.authToken, id)
    //   .then(data => {
    //     console.log(data);
    //     //return this.setState({ apiKey: data.apiKey })
    //   })
    //   .catch(err => {
    //     if (err.response.status === 401) {
    //       console.log({ error: "Unauthorized. Please login." });
    //     }

    //     console.log(err);
    //   })
    //   .finally(() => this.getFavorites());

  }

  render() {
    return (
      <div>
        <NavTabs />
        <button onClick={()=> this.postFavorite(1)}>Add 1</button>
        <button onClick={() => this.postFavorite(2)}>Add 2</button>
        <button onClick={() => this.postFavorite(3)}>Add 3</button>

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
