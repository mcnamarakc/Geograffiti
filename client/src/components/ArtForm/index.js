import React from "react";
import "./style.css";

const ArtForm = ({latitude, longitude, address, type, title, neighborhood, image, artistName, artistBio, description, handleInputChange, handleFormSubmit, missing}) => {
  console.log(missing)
  return (
    <form className="form">
      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Latitude:</label>
        <input
          className={missing.latitude ? "form-control is-invalid" : "form-control"}
          value={latitude}
          name="latitude"
          onChange={handleInputChange}
          type="number"
          placeholder="latitude (required)"
        />
        {missing.latitude
          ? <div className="invalid-feedback">
              Please enter a latitude
          </div>
          : ""
        }
      </div>
      
      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Longitude:</label>
        <input
          className={missing.longitude ? "form-control is-invalid" : "form-control"}
          value={longitude}
          name="longitude"
          onChange={handleInputChange}
          type="number"
          placeholder="longitude (required)"
        />
        {missing.longitude
          ? <div className="invalid-feedback">
            Please enter a longitude
          </div>
          : ""
        }
      </div>
      
      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Address:</label>
        <input
          className="form-control"
          value={address}
          name="address"
          onChange={handleInputChange}
          type="text"
          placeholder="address"
        />
      </div>
      
      <div className="form-item">
        <label htmlFor="type" style={{color: "white"}}>Type:</label>
        <input
          value={type}
          onChange={handleInputChange}
          name="type"
          list="types"
          type="text"
          className={missing.type ? "form-control is-invalid" : "form-control"}
          placeholder="Type (required)"
          id="type"
        />
        <datalist id="types">
          {["mural", "sculpture", "other"].map(type => (
            <option value={type} key={type} />
          ))}
        </datalist>
        {missing.type
          ? <div className="invalid-feedback">
            Please enter a type
          </div>
          : ""
        }
      </div>
      
      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Title:</label>
        <input
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
          type="text"
          placeholder="title"
        />
      </div>

      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Neighborhood:</label>
        <input
          value={neighborhood}
          onChange={handleInputChange}
          name="neighborhood"
          list="neighborhoods"
          type="text"
          className={missing.neighborhood ? "form-control is-invalid" : "form-control"}
          placeholder="neighborhood (required)"
          id="neighborhood"
        />
        <datalist id="neighborhoods">
          {["NODA", "UPTOWN"].map(neighborhood => (
            <option value={neighborhood} key={neighborhood} />
          ))}
        </datalist>
        {missing.neighborhood
          ? <div className="invalid-feedback">
            Please enter a neighborhood
          </div>
          : ""
        }
      </div>

      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Image URL:</label>
        <input
          className="form-control"
          value={image}
          name="image"
          onChange={handleInputChange}
          type="url"
          placeholder="image"
        />
      </div>

      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Artist Name:</label>
        <input
          className="form-control"
          value={artistName}
          name="artistName"
          onChange={handleInputChange}
          type="text"
          placeholder="artistName"
        />
      </div>

      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Artist Bio:</label>
        <input
          className="form-control"
          value={artistBio}
          name="artistBio"
          onChange={handleInputChange}
          type="text"
          placeholder="artistBio"
        />
      </div>

      <div className="form-item">
        <label htmlFor="type" style={{ color: "white" }}>Description:</label>
        <textarea
          className="form-control"
          value={description}
          name="description"
          onChange={handleInputChange}
          placeholder="description"
        />
      </div>

      <button onClick={handleFormSubmit} className="btn btn-secondary">Submit</button>
    </form>
  );
}

export default ArtForm;
