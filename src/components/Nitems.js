import React, { Component } from "react";
import "./Nitems.css";

class Nitems extends Component {
  render() {
    const { title, description, urlToImage, newsUrl, author, date, source } =
      this.props;
    const newdate = new Date(date).toLocaleTimeString();

    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <div
          className="card mb-4"
          style={{
            minWidth: "18rem",
            minHeight: "29rem",
            maxWidth: "18rem",
            maxHeight: "29rem",
          }}
        >
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: 1, left: "900px" }}
          >
            {source}
          </span>
          <img
            src={urlToImage}
            className="card-img-top"
            style={{
              objectFit: "cover",
              minHeight: "11rem",
              maxHeight: "11rem",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span style={{ color: "grey", fontSize: "0.9rem" }}>
              By {author} on {newdate}
            </span>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read In Detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nitems;
