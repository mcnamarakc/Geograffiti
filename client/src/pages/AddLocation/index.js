import React, { Component } from "react";
import FormTab from "../../components/FormTab";
import ArtForm from "../../components/ArtForm";
import BusinessForm from "../../components/BusinessForm";
import API from "../../lib/API";
import AuthContext from '../../contexts/AuthContext';

const initialValues = {
  latitude: "",
  longitude: "",
  address: "",
  type: "",
  title: "",
  neighborhood: "",
  image: "",
  artistName: "",
  artistBio: "",
  description: "",
  businessName: ""
}
const tabs = ['Art', 'Business']

class AddLocation extends Component {
  static contextType = AuthContext;

  state = {
    tab: 'Art',
    values: initialValues,
    submitted: null,
    missing: {}
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let missingRequired = false;
    let missing = {};
    Object.entries(this.state.values)
      .filter(([key, value]) => ["latitude", "longitude", "type", "neighborhood"].includes(key))
      .map(([key,value]) => {
        if (value.length < 1) {
          missing[key] = true;
          missingRequired = true;
        }
      })
    this.setState({missing: missing});
    if (missingRequired) { return;}

    if(this.state.tab === 'Art'){
      let data = this.state.values;
      delete data["businessName"];
      console.log(data);
      API.Submit.art(this.context.authToken, data)
        .then(response => response.data)
        .then(data => console.log(data))
        .catch(err => {
          if (err.response.status === 401) {
            return this.setState({ submitted: false });
          }

          console.log(err);
        })
        .finally(() => this.setState({ values: initialValues }));
    } else if (this.state.tab === 'Business') {
      const data = Object.keys(this.state.values)
        .filter(key=> !["title", "image", "artistName", "artistBio"].includes(key))
        .map(key => this.state.values[key]);
      console.log(data);
      API.Submit.business(this.context.authToken)
        .then(response => response.data)
        .then(data => console.log(data))
        .catch(err => {
          if (err.response.status === 401) {
            return this.setState({ submitted: false });
          }

          console.log(err);
        })
        .finally(() => this.setState({ values: initialValues }));
    }
  };

  changeTab = (newTab) => {
    this.setState({
      tab: newTab
    });
  };

  render() {
    return (
      <div>
        <FormTab currentTab={this.state.tab} tabs={tabs} changeTab={this.changeTab}/>
        { this.state.submitted
          ? <div className='alert alert-success'>Submitted</div>
          : this.state.submitted === null
            ? ""
            : <div className='alert alert-danger'>Submission failed. Unauthorized. Please login.</div>
        }
        { this.state.tab === "Art" 
          ? <ArtForm {...this.state.values} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} missing={this.state.missing}/>
          : <BusinessForm {...this.state.values} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} missing={this.state.missing}/>
        }
      </div>
    );
  }
}

export default AddLocation;
