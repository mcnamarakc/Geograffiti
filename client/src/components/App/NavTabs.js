import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavTabs.css";

function NavTabs() {
  return (
        <div className="nav nav-tabs">
          <p className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
        </Link>
          </p>
          <br></br>
          <p className="nav-item">
            <Link
              to="/map"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              Map
        </Link>
          </p>
          <p className="nav-item">
            <Link
              to="/art"
              className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
            >
              Art
        </Link>
          </p>
          <p className="nav-item">
            <Link
              to="/bio"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Bio
        </Link>
          </p>
          <p className="nav-item">
            <Link
              to="/contact/learn"
              className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
            >
              Learn
        </Link>
          </p>
        </div>
  );
}

export default NavTabs;