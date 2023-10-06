import React from "react";

export default function Navbar(props) {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src={props.logoSrc}
              alt={props.brandName}
              width="30"
              height="24"
              className="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="right collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.homeText}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.blogText}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
              <li>
                <button className="donate">Donate</button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <img src={process.env.PUBLIC_URL + "/img/logo1.png"} alt="" />
      <ul>
        <a href="/">
          <li>Home </li>
        </a>
        <a href="/">
          <li>About </li>
        </a>
        <a href="/">
          <li>Blog </li>
        </a>
        <a href="/">
          <li>Gallery </li>
        </a>
      </ul>
      <button class="donate"> Donate </button>
    </div>
  );
}
