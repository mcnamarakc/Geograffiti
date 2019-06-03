import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "./SignUp.css"

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
};


class SignUp extends Component {
    //Setting component's initial state
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0,15)
        }
        
        //Updating Input's State
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        let userEmail = this.state.email;

        if (!emailIsValid(userEmail)) {
            alert("Please enter a valid email address")
        } else if (this.state.password.length < 6) {
            alert("Enter a password longer than 6 characters")
        } else {
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            });
        }
    };
    
    render() {
        return (
            <div>
                <h2>Geograffeti</h2>
                <div class="card h-100 text-center">
                    <div class="card-header">
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active" href="/login">login</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Register  at Geograffiti</h5>
                        <form>
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="firstName" 
                                    placeholder="John"
                                    value = {this.state.firstName}
                                    name="firstName"
                                    onChange= {this.handleInputChange}      
                                />
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="lastName" 
                                    placeholder="Doe"
                                    value = {this.state.lastName}
                                    name ="lastName"
                                    onChange = {this.handleInputChange}   
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="email" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"
                                    value = {this.state.email} 
                                    name ="email"
                                    onChange = {this.handleInputChange}
                                />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="password" 
                                    placeholder="Password"
                                    value = {this.state.password}
                                    name ="password" 
                                    onChange = {this.handleInputChange}
                                />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I promise to be cool</label>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    }



export default SignUp;

