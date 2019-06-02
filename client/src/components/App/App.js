import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../../pages/Login/Login';
import Secret from '../../pages/Secret/Secret';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import MapPage from "../../pages/MapPage/MapPage";
import Art from "../../pages/Art/Art";
import Bio from "../../pages/Bio/Bio";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }
    }
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />
            <Switch>
              <Route path='/login' component={Login} />
              <PrivateRoute path='/secret' component={Secret} />
              <Route exact path='/' component={Home} />
              <Route exact path="/map" component={MapPage} />
              <Route exact path="/art" component={Art} />
              <Route path="/bio" component={Bio} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
