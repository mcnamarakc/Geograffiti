import React from "react";
import API from "../../lib/API";
import ArtCard from "../../components/App/ArtCard";
import NavTabs from "../../components/App/NavTabs";
import AOS from "aos";
import Dropdown from "../../components/App/dropdown";

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

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }


  componentDidMount() {
    AOS.init();
    API.ArtPage.getArt()
    .then(
  }


  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  handleSubmit = event => {
    event.preventDefault();
    API.ArtPage.getArt()
      .then(res => this.setState({ art: res.data }))
      .catch(err => console.log(err));
  };

  handleNeighborhood = event => {
    event.preventDefault();
    API.ArtPage.getNeighborhood("NODA")
      .then(res => this.setState({ art: res.data }))
      .catch(err => console.log(err));
  };

  handleArtist = event => {
    event.preventDefault();
    API.ArtPage.getArtist("William Puckett")
      .then(res => this.setState({ art: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavTabs />
        <h1>Art</h1>
        <button className="btn btn-info" onClick={this.handleSubmit}>GO ART!</button>
        <div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <button onClick={this.handleNeighborhood}> NODA </button>
                  <button onClick={this.handleArtist}> William Puckett </button>
                  <button> Menu item 3 </button>
                </div>
              )
              : (
                <button onClick={this.showMenu}>
                  GO ART AGAIN!
              </button>
              )
          }
        </div>
        {this.state.art.map(art => (
          <div data-aos="fade-left">
            <ArtCard
              id={art.id}
              key={art.id}
              title={!art.title ? "Unknown" : art.title}
              image={art.image}
              artist={!art.artistName ? "Unknown" : art.artistName}
              description={art.description}
              location={art.neighborhood}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Art;