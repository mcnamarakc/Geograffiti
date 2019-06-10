import React, { Component } from 'react';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import "./ApiService.css";

class ApiService extends Component {
    static contextType = AuthContext;

    state = {
        isLoading: true,
        error: "",
        apiKey: null
    }

    componentDidMount() {
        this.getApiKey();
    }

    getApiKey = () => {
        API.ApiKey.getKey(this.context.authToken)
            .then(response => response.data)
            .then(data => {
                const apiKey = data.apiKey || "No API Key for this account";
                return this.setState({ apiKey: apiKey })
            })
            .catch(err => {
                if (err.response.status === 401) {
                    return this.setState({ error: "Unauthorized. Please login." });
                }

                console.log(err);
            })
            .finally(() => this.setState({ isLoading: false }));
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
            .finally(() => this.setState({ isLoading: false }));
    }

    deleteApiKey = () => {
        console.log('delete key')
        API.ApiKey.revokeKey(this.context.authToken)
            .then(response => {
                console.log(response);
                return this.setState({ apiKey: "No API Key for this account" })
            })
            .catch(err => {
                if (err.response.status === 401) {
                    console.log({ error: "Unauthorized. Please login." });
                }

                console.log(err);
            })
            .finally(() => this.setState({ isLoading: false }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header apiTitle">Geograffiti Api</h5>
                    <div className="card-body">
                        <h5 className="card-title">Click below to get your Geograffiti API key!</h5>
                        <p className="card-text">Read our documentation below for information on Endpoints and Responses</p>

                        <div className='row'>
                            <div className='col'>
                                {this.state.isLoading
                                    ? <div className='alert alert-success'>Loading...</div>
                                    : this.state.error
                                        ? <div className='alert alert-danger'>{this.state.error}</div>
                                        : <div>
                                            <p className="apiFont"><em>{this.state.apiKey}</em></p>
                                        </div>}
                            </div>
                            <div className="col">
                                {/* <button onClick={() => this.getApiKey()} className="btn btn-secondary">GET KEY</button> */}
                                <button onClick={() => this.requestApiKey()} className="btn btn-secondary">REQUEST KEY</button>
                                <button onClick={() => this.deleteApiKey()} className="btn btn-secondary">DELETE KEY</button>
                            </div>
                    </div>
                </div>

                
                </div>

                <div className="container" id="apiDoc">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h3 style={{ color: "white" }}>Geograffiti Api Documentation</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApiService;
