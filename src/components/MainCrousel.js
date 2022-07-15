import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const SlideShow = React.lazy(() => import("./SlideShow"));
const Gallery = React.lazy(() => import("./Gallery/Gallery"));

export default function MainCrousel() {
  const navigate = useNavigate();
  const [videoName, setVideoName] = useState("");

  useEffect(() => {
    var link = [];
    axios
      .get("https://dejaniresort.herokuapp.com/video")
      .then(function (response) {
        // handle success
        link = response.data[0].imageLink.split("/");
        console.log(link);
        setVideoName("https://dejaniresort.herokuapp.com/vid/" + link[3]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    // console.log(videoName)
  }, [videoName]);

  return (
    <Suspense>
      <SlideShow />
      <section
        className="roberto-about-area section-padding-100-0"
        style={{ backgroundColor: "rgb(231, 230, 251)" }}
      >
        {/* <!-- Hotel Search Form Area --> */}
        <div className="hotel-search-form-area">
          <div className="container-fluid">
            <div
              className="hotel-search-form"
              style={{ backgroundColor: "rgba(38, 185, 170, 0.79)" }}
            >
              <form
              //  action="#" method="post"
              >
                <div className="row justify-content-between align-items-end">
                  <div className="col-6 col-md-2 col-lg-3">
                    <label
                      for="checkIn"
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      Check In
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="checkIn"
                      name="checkin-date"
                    />
                  </div>
                  <div className="col-6 col-md-2 col-lg-3">
                    <label
                      for="checkOut"
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      Check Out
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="checkOut"
                      name="checkout-date"
                    />
                  </div>
                  <div className="col-4 col-md-1">
                    <label
                      for="room"
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      Room
                    </label>
                    <select name="room" id="room" className="form-control">
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                    </select>
                  </div>
                  {/* <div className="col-4 col-md-1">
                                <label for="adults" style={{color: '#fff', fontWeight: 'bold'}}>Adult</label>
                                <select name="adults" id="adults" className="form-control">
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                </select>
                            </div> */}
                  <div className="col-4 col-md-2 col-lg-1">
                    <label
                      for="children"
                      style={{ color: "#fff", fontWeight: "bold" }}
                    >
                      Beds
                    </label>
                    <select
                      name="children"
                      id="children"
                      className="form-control"
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="form-control roberto-btn w-100"
                      onClick={() => {
                        navigate("/rooms");
                      }}
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container mt-100">
          <div className="row align-items-center">
            <div className="col-md-5">
              {/* <!-- Section Heading --> */}
              <div
                className="section-heading wow fadeInUp"
                data-wow-delay="100ms"
              >
                {/* <h6>About Us</h6> */}
                <h2>
                  Welcome to <br />
                  Dejani Resort Astore
                </h2>
              </div>
              <div className="about-us-content mb-100">
                <p
                  className="wow fadeInUp"
                  data-wow-delay="300ms"
                  style={{ color: "#000" }}
                >
                  Astore ( Deosai) is situated at an average elevation of 4,114
                  meters form the sea level and considered as second highest
                  plateau in the world.
                  <br /> <span style={{ color: "#40C3B2" }}>DeJani Resort</span>
                  , despite having harsh environment, and the poor
                  infrastructure of District Astore Valley aims to provide
                  luxury environment for tourists.
                </p>
                <p className="wow fadeInUp" data-wow-delay="400ms">
                  Manager:{" "}
                  <img
                    src={require("../assets/mess/signature.png")}
                    alt=""
                    className="wow fadeInUp"
                    data-wow-delay="500ms"
                    style={{ width: "170px" }}
                  />
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <div
                className="about-us-thumbnail mb-100 wow fadeInUp"
                data-wow-delay="700ms"
              >
                <div className="row no-gutters">
                  {/* <div className="col-12">
                                <div className="single-thumb">
                                    <ReactPlayer url={video1}
                                        controls={true}
                                        playing={true}
                                        width="100%"
                                        volume={5}
                                        muted
                                     />
                                </div>
                            </div> */}

                  <div>
                    <Gallery />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div
                className="about-us-thumbnail mb-100 wow fadeInUp"
                data-wow-delay="700ms"
              >
                <div className="row no-gutters">
                  <div className="col-12">
                    <div className="single-thumb">
                      <ReactPlayer
                        url={videoName}
                        controls={true}
                        playing={true}
                        width="100%"
                        volume={5}
                        muted
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              {/* <!-- Section Heading --> */}
              <div className="about-us-content mb-100">
                <p
                  className="wow fadeInUp"
                  data-wow-delay="300ms"
                  style={{ color: "#000" }}
                >
                  Highly experienced management, quality restaurant and food,
                  best rooms and the organic environment makes our guests stay
                  memorable and wonderful. <br />
                  Amenities are..
                  <br />
                  1. Restaurant
                  <br />
                  2. Parking
                  <br />
                  3. River view
                  <br />
                  4. Bone fire 🔥
                  <br />
                  5. Fishing site 🎣
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
