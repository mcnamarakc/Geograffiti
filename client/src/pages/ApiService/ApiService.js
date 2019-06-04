import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import Secret from '../Secret/Secret'


// function getApiKey() {
//    [Code for ApiKey generation here]
//};

// function postApiKey() {
//     [Code for ApiKeyPost goes here]
// };

// class ApiService extends Component {
//     static contextType = AuthContext;

//     state = {
//         isLoading: true,
//         error: ""
//     };

//     componentDidMount() {
//         API.Secrets.getAll(this.context.authToken)
//           .then(response => response.data)
//           .then(secrets => this.setState({ secrets }))
//           .catch(err => {
//             if (err.response.status === 401) {
//               return this.setState({ error: "Unauthorized. Please login." });
//             }
    
//             console.log(err);
//           })
//           .finally(() => this.setState({ isLoading: false }));
//     };

//     handleApiKeySubmit = event => {
//         event.preventDefault();

//         getApiKey()
//     };

//     render() {
//         return (
//             <div>    
//                 <div className="card">
//                     <h5 className="card-header">Geograffiti Api</h5>
//                     <div className="card-body">
//                         <h5 className="card-title">Click below to get your Geograffiti API key!</h5>
//                         <p className="card-text">Read our documentation below for information on Endpoints and Responses</p>
//                         <a href="#" className="btn btn-primary">Get API Key</a>
//                     </div>
//                 </div>
//                 <div className="container" id="apiDoc">
//                     <div className="row">
//                         <div className="col-md-6 offset-md-3">
//                             <h3>Geograffiti Api Documentation</h3>
//                         </div>
//                 </div>
//                 </div>
//             </div>
//         )

// }

function ApiService() {
    return (
        <div>
            <div className="card">
                <h5 className="card-header">Geograffiti Api</h5>
                <div className="card-body">
                    <h5 className="card-title">Click below to get your Geograffiti API key!</h5>
                    <p className="card-text">Read our documentation below for information on Endpoints and Responses</p>
                    <button type="button" className="btn btn-secondary">Get API Key</button>
                </div>
            </div>
            <div className="container" id="apiDoc">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h3>Geograffiti Api Documentation</h3>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ApiService;