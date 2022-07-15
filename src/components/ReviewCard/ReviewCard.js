import React from "react";
import "./reviewcard.css";

export default function ReviewCard() {
  return (
    <div
      className="col-md-12"
      style={{ backgroundColor: "rgb(231, 230, 251)" }}
    >
      <div
        className="section-heading text-center wow fadeInUp"
        data-wow-delay="100ms"
      >
        <h6 style={{ fontWeight: "bold" }}>Reviews</h6>
      </div>
      <ul className="cards">
        <li style={{ height: "400px" }}>
          <a href="" className="card">
            <img
              src={require("../../assets/mess/238833008_351454389867475_4034623207188339493_n.jpg")}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src={require("../../assets/bg-img/149071.png")}
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Ali</h3>
                  <span className="card__status">1 hour ago</span>
                </div>
              </div>
              <p className="card__description" style={{color: '#0E2737'}}>
                best rooms and the organic environment
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="" className="card" style={{ height: "400px" }}>
            <img
              src={require("../../assets/mess/review.jpg")}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src={require("../../assets/bg-img/149071.png")}
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Haider Ali</h3>
                  <span className="card__status">3 hours ago</span>
                </div>
              </div>
              <p className="card__description" style={{color: '#0E2737'}}>
                I have visited Astore multiple times before and lack of good
                accommodation options was a big problem. De Jani has solved it.
                Rooms are cozy and washrooms are good.
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="" className="card" style={{ height: "400px" }}>
            <img
              src={require("../../assets/mess/review1.jpg")}
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src={require("../../assets/bg-img/149071.png")}
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Azeem</h3>
                  <span className="card__status">2 months ago</span>
                </div>
              </div>
              <p className="card__description" style={{color: ''}}>
                Beautiful Views and Peaceful Atmosphere
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
