import React from "react";
// import { Location } from "./Location";
// import { StyleRounded } from "./StyleRounded";
import "../stylesheets/donation.css";

export const Donation = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Blog</div>
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="text-wrapper-2">DONATE</div>
          </div>
          <div className="text-wrapper-3">Home</div>
          <div className="text-wrapper-4">About</div>
          <div className="text-wrapper-5">Gallery</div>
          {/* <StyleRounded className="people-person" color="black" /> */}
          <div className="overlap-2">
            <img className="element" alt="Element" src="1-1.png" />
            <img className="formimage" alt="Formimage" src="formimage2-1.png" />
            <div className="text-wrapper-6">Giving Back, Filling Bowls.</div>
          </div>
        </div>
        <div className="text-wrapper-7">NGO’s</div>
        <div className="overlap-group-2">
          <div className="rectangle-2" />
          <p className="element-BHK-sq-ft">
            <span className="span">
              3 BHK 2165 Sq-ft Flat/Apartment For Rent in{" "}
            </span>
            <a
              href="https://www.magicbricks.com/Vaishnodevi-Circle-in-Ahmedabad-Overview"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-8">
                Vaishnodevi Circle, Ahmedabad
              </span>
            </a>
          </p>
          <img
            className="homeless-winter-city"
            alt="Homeless winter city"
            src="homeless-winter-city-man-asking-food-1.png"
          />
          <div className="rectangle-3" />
          <div className="text-wrapper-9">Contact Number</div>
          <div className="ellipse" />
          {/* <Location className="transport-travel" color="white" /> */}
        </div>
      </div>
    </div>
  );
};
