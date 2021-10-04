import React from "react";
import Header from "../Header/Header";

import "./Banner.css";

const Banner = () => {
  return (
    
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center ">
          <div className="col-md-7">
            <h1 className="title mt-3">
              WE CREATE SUCCESS
            </h1>
            <h2 className="text-white  mt-3">University Of Programming Hero</h2>
            <p className="text-white  mt-3">
            This is one of the best programming academy. It is the best programming community.
            </p>
            <button className="mt-3 about-btn rounded">Learn More</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
