import React from "react";

export default function Card(props) {
  return (
    <div class="card">
      <img src="./img/donation.jpg" alt="" class="card-img" />
      <div class="card-body">
        <p class="card-title">{props.title}</p>
        <p class="card-info">
          Our donation feature is designed to provide a seamless and convenient
          way for you to contribute to causes you care about,support
          organizations doing meaningful work, and help those in need.
        </p>
        <div class="cardbtn">
          <a href="/">
            <img src={process.env.PUBLIC_URL + "/img/right-arrow.png"} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
