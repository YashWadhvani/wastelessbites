import React from "react";
import PropTypes from "prop-types";

export default function Mission(props) {
  return (
    <>
      <div className="mission">{props.title}</div>
      <div className="card">
        <img src="./img/donation.jpg" alt="" className="card-img" />
        <div className="card-body">
          <p className="card-title">Donation</p>
          <pre className="card-info">
            Our donation feature is designed to provide a seamless and
            convenient way for you to contribute to causes you care
            about,support organizations doing meaningful work, and help those in
            need.
          </pre>
          <div className="cardbtn">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 448 512"
                style={{ fill: "#ffffff" }}
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  Mission.propTypes = {
    title: PropTypes.string.isRequired,
  };
}
