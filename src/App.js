import "./App.css";
import Card from "../src/components/Card";
import Navbar from "../src/components/Navbar";
// import About from "../src/components/About";
// import { Donation } from "../src/components/Donation";
// import { Login } from "../src/components/Login";
// import { SignUp } from "../src/components/SignUp";
// import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Router> */}
      <div className="container">
        <Navbar
          homeText="Home"
          blogText="Blogs"
          aboutText="About Us"
          brandName="WastelessBites"
          logoSrc={process.env.PUBLIC_URL + "/img/logo1.png"}
        />

        <div className="line1">Recognise The Value Of Food </div>
        <div className="underline">
          <p></p>
        </div>
        <pre className="line2">
          Food waste has a big impact on world climate. Stop wasting <br />
          food and start saving the planet.
        </pre>
        <button className="Readmore"> Donate </button>
      </div>

      <div className="mission">Our Mission</div>
      <div className="missionContainer">
        <Card
          title="Donation"
          info="Our donation feature is designed to provide a seamless and convenient
          way for you to contribute to causes you care about,support
          organizations doing meaningful work, and help those in need."
          imgSrc="./img/donation.jpg"
        />
        <Card
          title="Inventory"
          info="Our inventory feature enables users to monitor their groceries and ingredients, minimizing food waste by ensuring timely usage before items expire. Efficient food management at your fingertips."
          imgSrc="./img/inventory.jpg"
        />
        <Card
          title="Meal Planning"
          info="Our donation feature is designed to provide a seamless and convenient
          way for you to contribute to causes you care about,support
          organizations doing meaningful work, and help those in need."
          imgSrc="./img/recipe.jpg"
        />
      </div>

      {/* ---- Diffrence ---- */}
      <div className="diffrence">
        <div className="diff-title">
          <p>How we are making a Diffrence</p>
        </div>

        <div className="image1">
          <img
            src={
              process.env.PUBLIC_URL +
              "/img/homeless-winter-city-man-asking-food.jpg"
            }
            alt=""
          />
        </div>
        <div className="image2">
          <img src="./img/breakfast.jpeg" alt="" />
        </div>
        <div className="image3">
          <img src="./img/photo.jpeg" alt="" />
        </div>
        <div className="diff-info">
          <p>
            Our website empowers users to reduce food waste through efficient
            meal planning, creative recipes, and food storage tips. Together,
            we've saved thousands of pounds of food, cut carbon emissions, and
            built strong local partnerships. Join our community and make a
            positive impact on the environment and your community today!
          </p>
          <button className="Read-more"> Read More </button>
        </div>

        {/* ---- Diffrence ---- */}

        {/* /* ----  Form ---- */}

        <div className="form-title">
          <pre>Let's Create Something Great Together!</pre>
        </div>

        <div className="form-image">
          <div className="form-image1">
            <img src="./img/formimage1.jpg" alt="" />
          </div>
          <div className="form-image2">
            <img src="./img/formimage2.jpg" alt="" />
          </div>
        </div>

        <div className="form">
          <form>
            <label htmlFor="fname"></label>
            <input type="name1" id="fname" placeholder="First Name" />

            <label htmlFor="lname"></label>
            <input type="name2" id="lname" placeholder="Last Name" />

            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="Email Address" />
          </form>
          <input type="submit" value="Submit" />
        </div>

        {/* <div className="footer">
      <img src="/img/footer-bg.png" alt="">
      <div className="face"><a href="#"><img src="/img/icons8-facebook-94.png" alt=""></a></div> */}
        {/* <div className="insta"><a href="#"><img src="/img/icons8-instagram-94.png" alt=""></a></div>
      <div className="linked"><a href="#"><img src="/img/icons8-linkedin-94.png" alt=""></a></div> 
      </div>
      </div> */}

        {/* /* ----  Form ---- */}
      </div>

      {/* <Donation /> */}
      {/* <Footer /> */}
      {/* <About /> */}

      {/* <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/donation" element={<Donation />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
