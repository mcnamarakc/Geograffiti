import React from "react";
import friends from "../../friends.json";
import API from "../../lib/API";
import ArtCard from "../../components/App/ArtCard";
import NavTabs from "../../components/App/NavTabs";


class Art extends React.Component {
  state = {
    art: []
  };

  // loadArt = () => {
  //   API.ArtPage.getArt()
  //   .then(res => this.setState({ art: res.data }))
  //   .catch(err => console.log(err));
  // };

  handleSubmit = event => {
    event.preventDefault();
    API.ArtPage.getArt()
    .then(res => this.setState({ art: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavTabs />
        <h1>Art</h1>
        <button className="btn btn-info" onClick={this.handleSubmit}>GO ART!</button>
        {this.state.art.map(art => (
          <ArtCard
            id={art.id}
            key={art.id}
            name={art.title}
            image={art.image}
            occupation={art.artistName}
            location={art.neighborhood}
            />
        ))}
      </div>
    );
  }
}

export default Art;