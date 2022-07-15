import React, { Suspense, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

const ContactTab = React.lazy(() => import("../../components/ContactTab"));

export default function AboutUs() {

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
    <div>
      {/* <!-- Breadcrumb Area Start --> */}
      <div
        class="breadcrumb-area bg-img bg-overlay jarallax"
        style={{ backgroundImage: 'url("img/bg-img/16.jpg")' }}
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="breadcrumb-content text-center">
                <h2 class="page-title">About Us</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About Us Area Start --> */}
      <section class="roberto-about-us-area section-padding-100-0">
        <div class="container">
          <div class="row align-items-center">
            {/* <div class="col-12 col-lg-6">
                        <div class="about-thumbnail pr-lg-5 mb-100 wow fadeInUp" data-wow-delay="100ms">
                            <img src="img/bg-img/19.jpg" alt="" />
                        </div>
                    </div> */}
            <div
              class="col-12 col-lg-6 about-us-thumbnail mb-100 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="single-thumb">
                    <ReactPlayer
                      url={videoName}
                      controls
                      playing={true}
                      width="100%"
                    />
                  </div>
                  {/* <div class="single-thumb">
                                    <img src="img/bg-img/14.jpg" alt="" />
                                </div> */}
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              {/* <!-- Section Heading --> */}
              <div class="section-heading wow fadeInUp" data-wow-delay="300ms">
                <h6>Testimonials</h6>
                <h2>20 Years Of Experience</h2>
              </div>
              <div
                class="about-content mb-100 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <p>
                  We welcome whole tourist from Pakistan at DJani Resort located
                  in the vicinity of District Astore, Gilgit-Baltistan near
                  Pakorah Village. A special Eid package is being offered with
                  25% discount on room rents from 22 of July up to 25th of July
                  2021.
                </p>
                <p>
                  D-Jani Resort is the most beautiful and attractive resort
                  recently opened with full of amenities like beautiful and full
                  space Parking site, best Restaurant with different types of
                  local and non-local foods along with breakfast, facility of
                  Hot water, fast wifi network facility, full carpeted and
                  paneled rooms with best ventilation and lighting system ,
                  aesthetical tracking and camping sites, good-looking
                  surroundings with Lush green fields, plantation, fresh and eye
                  soothing river view side. The offer is being given for very
                  limited time so come first and serve first. It is committment
                  from our side that when you visit first time surely you will
                  have wish on your heart to come again. Waiting to welcome and
                  host you here in this natural and wonderful environment.
                </p>
                <img
                  src={require("../../assets/mess/signature.png")}
                  alt=""
                  className="wow fadeInUp"
                  data-wow-delay="500ms"
                  style={{ width: "170px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service Area Start --> */}
      <section class="roberto-service-area section-padding-70-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <!-- Section Heading --> */}
              <div
                class="section-heading text-center wow fadeInUp"
                data-wow-delay="100ms"
              >
                <h6>Ultimate Solutions</h6>
                <h2>Our Hotel &amp; Room</h2>
              </div>
            </div>
          </div>

          <div class="row">
            {/* <!-- Single Service Area --> */}
            <div class="col-12 col-md-6 col-lg-4">
              <div
                class="single-service-area mb-100 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <img
                  src={require("../../assets/mess/241752588_368587118154202_3150070996364842603_n.jpg")}
                  alt=""
                  style={{ height: "350px", width: "350px" }}
                />
                <div class="service-title d-flex align-items-center justify-content-center">
                  <h5>Restaurant &amp; Bar</h5>
                </div>
              </div>
            </div>
            {/* <!-- Single Service Area --> */}
            <div class="col-12 col-md-6 col-lg-4">
              <div
                class="single-service-area mb-100 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <img
                  src={require("../../assets/mess/233732192_347614050251509_9197189036710540032_n.jpg")}
                  alt=""
                  style={{ height: "350px", width: "350px" }}
                />
                <div class="service-title d-flex align-items-center justify-content-center">
                  <h5>Hiking &amp; Fitness</h5>
                </div>
              </div>
            </div>
            {/* <!-- Single Service Area --> */}
            <div class="col-12 col-md-6 col-lg-4">
              <div
                class="single-service-area mb-100 wow fadeInUp"
                data-wow-delay="700ms"
              >
                <img
                  src={require("../../assets/mess/287048229_542191120793800_8919223752245953714_n.jpg")}
                  alt=""
                  style={{ height: "350px", width: "350px" }}
                />
                <div class="service-title d-flex align-items-center justify-content-center">
                  <h5>Bone Fire &amp; Party</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: "-40px" }}>
        <ContactTab />
      </div>
    </div>
  );
}
