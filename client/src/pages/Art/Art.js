import React from "react";
import friends from "../../friends.json";
import ArtCard from "../../components/App/ArtCard";
import NavTabs from "../../components/App/NavTabs";


class Art extends React.Component {
  state = {
    friends
  };

  render() {
    return (
      <div>
        <NavTabs />
        <h1>Art</h1>
        {this.state.friends.map(friend => (
          <ArtCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            />
        ))}
      </div>
    );
  }
}

export default Art;