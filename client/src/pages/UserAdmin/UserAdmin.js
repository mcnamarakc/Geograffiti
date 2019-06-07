import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
};

class UserAdmin extends Component {
    static contextType = AuthContext;

    state = {
        isLoading: true,
        error: "",
        email: "",
        password: "",
        apiKey: null,
        requestsRemaining: "",
        authToken: this.context.authToken
    }

    componentDidMount() {
        this.getUser();
        console.log(this.state.authToken)
        console.log(this.state)
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { email } = this.state;
        if (!emailIsValid(email)) {
            alert("Please enter a valid email address")
        } else {
            this.updateUser(email);
                // .then(response => response.data)
                // .then(response => {
                //     console.log(response)
                // })
                // .catch(err => {
                //     let message;
    
                //     switch (err.response.status) {
                //         case 401:
                //             message = 'Sorry, that email is not valid. Please try again.';
                //             break;
                //         case 500:
                //             message = 'Server error. Please try again later.';
                //             break;
                //         default:
                //             message = 'Unknown error.';
                //     }

                //     this.setState({ error: message });
                // });
            this.setState({
                email: email
            })
                
        }
    }
    



    getUser = () => {
                    API.Users.getMe(this.context.authToken)
                        .then(response => {
                            console.log(response.data)
                            const email = response.data.email;
                            const password = response.data.password;
                            const apiKey = response.data.apiKey;
                            const requestsRemaining = response.data.requestsRemaining;
                            
                            return this.setState({
                                email: email,
                                password: password,
                                apiKey: apiKey,
                                requestsRemaining: requestsRemaining
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }

    updateUser = () => {
                    const email = this.state.email;
                    const authToken =this.context.authToken;
                    console.log(email);

                    API.Users.updateUser(authToken, email)
                        .then(response => {
                            console.log(response);
                        })
                        .catch(err => console.log(err))
                };

        render() {
            return (
                <div className='userDash'>
                    <div className='row-justify-content-center'>
                        <div className='col'>
                            <div className="card">
                                <div className="card-header">
                                    Profile for {this.state.email}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Change Email</h5>
                                    <form className='LoginForm' onSubmit={this.handleSubmit}>
                                        <div className='input-group mb-3'>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input
                                                className={`form-control ${this.state.error.email ? "is-invalid" : ""}`}
                                                id='email'
                                                type='email'
                                                name='email'
                                                placeholder='email@provider.com'
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                            />
                                            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )

        }






    }

    export default UserAdmin;