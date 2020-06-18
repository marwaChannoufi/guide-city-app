import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpeg";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              style={{
                width: "70px",
                height: "60px",
                borderRadius: "50%",
                border: "1px solid white"
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon" /> */}

            <i
              className="fa fa-ioxhost"
              style={{ fontSize: "50px", color: "var(--mainLightGrey)" }}
            />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link text-white text-uppercase ml-5"
                  to="/"
                >
                  Home&nbsp;
                  <i className="fa fa-home" />
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white text-uppercase ml-5"
                  to="/news"
                >
                  news
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white text-uppercase ml-5"
                  to="/contacts"
                >
                  contact-us
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
