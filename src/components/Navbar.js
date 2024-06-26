import React, { Component } from "react";
import { Link } from "react-router-dom";
const   Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            News Buddy
          </Link>
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
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cat" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cat" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cat" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cat" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cat" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cat" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cat" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="about"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <form
              className="d-flex align-items-center"
              role="search"
              style={{ height: "40px" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "100%", borderRadius: "5px" }}
              />
              <button
                className="btn btn-outline-success me-3"
                type="submit"
                style={{
                  height: "30px",
                  padding: "6px 12px",
                  fontSize: "14px",
                  marginTop: "-2px",
                }}
              >
                Search
              </button>
            </form>
          </div>  
        </div>
      </nav>
    </div>
  );
}
export default Navbar;