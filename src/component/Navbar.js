import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-title navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  {props.home}
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li> */}
            </ul>
            {/* switch  */}
            <div
              className={`form-check form-switch mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggle}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.text}
              </label>
            </div>
            {/* {props.searchbar ? (
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </nav>
    </div>
  );
}

// default props set here
Navbar.default = {
  title: "title is here",
  home: "home text is here ",
  about: "about text here ",
  searchbar: true,
};

// declere propstype here
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  searchbar: PropTypes.bool.isRequired,
};
