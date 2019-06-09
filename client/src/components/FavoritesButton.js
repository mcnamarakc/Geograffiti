import React from 'react';
import API from '../lib/API';
import AuthContext from '../contexts/AuthContext';


class FavoriteButton extends React.Component{
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      favorited: props.favorited || false
    }
  }

  add = () => {
    API.Favorites.post(this.context.authToken, this.props.id)
      .then(()=> {
        console.log('favorited', this.props.id)
        this.setState({favorited: true})
      })
      .catch(err => {
        if (err.response.status === 401) {
          console.log({ error: "Unauthorized. Please login." });
        }
        console.log(err);
      })
  }

  remove = () => {
    API.Favorites.delete(this.context.authToken, this.props.id).then(()=> {
      this.setState({favorited: false})
      if(this.props.cb) {
        this.props.cb()
      }
    })
  }

  render(){
    return (
      <button className="favoriteBtn" onClick={() => this.state.favorited ? this.remove() : this.add()}>
        <i className={this.state.favorited ? "fas fa-heart" : "far fa-heart"}></i>
      </button>
    )
  }
};

export default FavoriteButton;
