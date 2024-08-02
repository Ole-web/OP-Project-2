import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Link to="/">
            <img className="header_icon" src="pictures/Logo2.jpg" />
          </Link>
          <Link to="/movie/popular" style={{ textDecoration: "none" }}>
            <span>Popular</span>
          </Link>
          <Link to="movie/top_rated" style={{ textDecoration: "none" }}>
            <span>Top Rated</span>
          </Link>
          <Link to="movie/upcoming" style={{ textDecoration: "none" }}>
            <span>Upcoming</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default header;
