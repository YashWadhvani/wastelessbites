import React from "react";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <img src="../public/img/logo1.png" alt="" />
          <ul>
            <a href="/html/index.html">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="">
              <li>Blog</li>
            </a>
            <a href="">
              <li>Gallery</li>
            </a>
          </ul>
        </div>

        <div className="about-us">
          <pre>Small helps together makes better life</pre>
          <button>
            <a href="#">DONATE</a>
          </button>
        </div>
      </div>

      {/* MAIN PAGE */}

      {/* intro */}

      <div className="intro">
        <img src="../../public/aboutImg/._intro.jpg" alt="" />
        <pre>Welcome to wasteless bites Organisation</pre>
        <p>
          Charite is the world's #1 fundraising site forcharitable <br />{" "}
          causes. Raise money for over 1.5 million charities.
        </p>
        <div className="lastpara">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud <br />
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <button>Read More</button>
      </div>

      {/* intro */}

      {/* our mission  */}

      <div className="mision">
        <div className="title">
          <p>Our Mission </p>
        </div>

        <div className="cards">
          <div className="card1">
            <img src="../public/aboutImg/._food-donation.png" alt="" />
            <div className="card-title">
              <p>Charity For Education</p>
            </div>
            <div className="card-info">
              <pre>
                There are many variations of lorem passagei of Lorem Ipsum
                available but the majority have
              </pre>
            </div>
            <a href="#">Read More</a>
          </div>

          <div className="card2">
            <img src="../public/aboutImg/._grocery-cart.png" alt="" />
            <div className="card-title">
              <p>Charity For Education</p>
            </div>
            <div className="card-info">
              <pre>
                There are many variations of lorem passagei of Lorem Ipsum
                available but the majority have
              </pre>
            </div>
            <a href="#">Read More</a>
          </div>

          <div className="card3">
            <img src="../public/aboutImg/._recipe-book.png" alt="" />
            <div className="card-title">
              <p>Charity For Education</p>
            </div>
            <div className="card-info">
              <pre>
                There are many variations of lorem passagei of Lorem Ipsum
                available but the majority have
              </pre>
            </div>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      {/* our mission  */}

      {/* Team  */}

      <div className="Team">
        <div className="team-title">Our Team</div>

        <div className="yash">
          <img src="../public/aboutImg/._yash.jpg" alt="" />
          <div className="card-body">
            <div className="teamcard-title">
              <p> Yash Wadhwani </p>
            </div>
            <div className="yashprofile">
              <a href="#">
                <img src="../public/aboutImg/._github (2).png" alt="" />
              </a>
              <a href="#">
                <img src="../public/aboutImg/._linkedin (2).png" alt="" />
              </a>
              <a href="https://www.instagram.com/yashwadhvani75/?img_index=1">
                <img src="../public/aboutImg/._instagram (2).png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="varun">
          <img src="../public/aboutImg/._varun.jpeg" alt="" />
          <div className="card-body">
            <div className="teamcard-title">
              <p> Varun Jethani </p>
            </div>
            <div className="varunprofile">
              <a href="#">
                <img src="../public/aboutImg/._github (2).png" alt="" />
              </a>
              <a href="#">
                <img src="../public/aboutImg/._linkedin (2).png" alt="" />
              </a>
              <a href="https://www.instagram.com/varun_jethani2444/">
                <img src="../public/aboutImg/._instagram (2).png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="jay">
          <img src="../public/aboutImg/._me.jpeg" alt="" />
          <div className="card-body">
            <div className="teamcard-title">
              <p> Jay Haryani </p>
            </div>
            <div className="jayprofile">
              <a href="#">
                <img src="../public/aboutImg/._github (2).png" alt="" />
              </a>
              <a href="#">
                <img src="../public/aboutImg/._linkedin (2).png" alt="" />
              </a>
              <a href="#">
                <img src="../public/aboutImg/._instagram (2).png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
