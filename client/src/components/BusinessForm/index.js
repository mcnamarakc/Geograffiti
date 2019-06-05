import React from "react";

const BusinessForm = ({ latitude, longitude, address, type, businessName, neighborhood, description, handleInputChange, handleFormSubmit }) => {
  return (
    <form className="form">
      <div>
        <input
          className="form-control"
          value={latitude}
          name="latitude"
          onChange={handleInputChange}
          type="number"
          placeholder="latitude"
        />
      </div>

      <div>
        <input
          className="form-control"
          value={longitude}
          name="longitude"
          onChange={handleInputChange}
          type="number"
          placeholder="longitude"
        />
      </div>

      <div>
        <input
          className="form-control"
          value={address}
          name="address"
          onChange={handleInputChange}
          type="text"
          placeholder="address"
        />
      </div>

      <div>
        <label htmlFor="type" style={{ color: "white" }}>Type:</label>
        <input
          value={type}
          onChange={handleInputChange}
          name="type"
          list="types"
          type="text"
          className="form-control"
          placeholder="Type"
          id="type"
        />
        <datalist id="types">
          {["mural", "sculpture", "other"].map(type => (
            <option value={type} key={type} />
          ))}
        </datalist>
      </div>

      <div>
        <label htmlFor="type" style={{ color: "white" }}>Neighborhood:</label>
        <input
          value={neighborhood}
          onChange={handleInputChange}
          name="neighborhood"
          list="neighborhoods"
          type="text"
          className="form-control"
          placeholder="neighborhood"
          id="neighborhood"
        />
        <datalist id="neighborhoods">
          {["NODA", "UPTOWN"].map(neighborhood => (
            <option value={neighborhood} key={neighborhood} />
          ))}
        </datalist>
      </div>

      <div>
        <input
          className="form-control"
          value={businessName}
          name="businessName"
          onChange={handleInputChange}
          type="text"
          placeholder="businessName"
        />
      </div>

      <div>
        <textarea
          className="form-control"
          value={description}
          name="description"
          onChange={handleInputChange}
          placeholder="description"
        />
      </div>

      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}

export default BusinessForm;
