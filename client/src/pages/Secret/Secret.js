import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class Secret extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: "",
    apiKey: null
  }

  componentDidMount() {
    API.Secrets.getAll(this.context.authToken)
      .then(response => response.data)
      .then(secrets => this.setState({ secrets }))
      .catch(err => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  getApiKey = () => {
    console.log('get key')
    API.ApiKey.getKey(this.context.authToken)
      .then(response => response.data)
      .then(data => {
        console.log(data.apiKey);
        return this.setState({ apiKey: data.apiKey })
      })
      .catch(err => {
        if (err.response.status === 401) {
          console.log({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
  }

  requestApiKey = () => {
    console.log('requesting key')
    API.ApiKey.requestKey(this.context.authToken)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        return this.setState({ apiKey: data.apiKey })
      })
      .catch(err => {
        if (err.response.status === 401) {
          console.log({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
  }

  deleteApiKey = () => {
    console.log('delete key')
    API.ApiKey.revokeKey(this.context.authToken)
      .then(response => {
        console.log(response);
        return this.setState({ apiKey: null })
      })
      .catch(err => {
        if (err.response.status === 401) {
          console.log({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
  }

  testApiKey = apiKey => {
    console.log('test key')
    API.ApiKey.testKey(apiKey)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        if (err.response.status === 401) {
          console.log({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
  }

  render() {
    return (
      <div className='Secret'>
        <div className='row'>
          <div className='col'>
            {this.state.isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : this.state.error
                ? <div className='alert alert-danger'>{this.state.error}</div>
                : <div>
                  <p>Shh, the secret is...</p>
                  <p><em>{this.state.secrets[0].message}</em></p>
                </div>}
          </div>
          <div className="col">
            <button onClick={()=> this.getApiKey()}>GET KEY</button>
            <button onClick={() => this.requestApiKey()}>REQUEST KEY</button>
            <button onClick={() => this.deleteApiKey()}>DELETE KEY</button>
            <p style={{color:"white"}}>{this.state.apiKey}</p>
          </div>
          <div className="col">
            <button onClick={() => this.testApiKey(this.state.apiKey)}>Try Key</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
