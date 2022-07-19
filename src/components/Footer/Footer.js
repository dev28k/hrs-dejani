import React from "react";
import { isMobile } from "react-device-detect";
import Col from "react-bootstrap/Col";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-area section-padding-0-0">
      {/* <!-- Main Footer Area --> */}
      <div className="main-footer-area">
        <div className="container">
          <div className="row align-items-baseline justify-content-between">
            {/* <!-- Single Footer Widget Area --> */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-footer-widget mb-80">
                {/* <!-- Footer Logo --> */}
                <img
                  style={isMobile ? {marginLeft: '25%', marginTop: '10%', marginBottom: '-10%' } : { marginTop: "20%" }}
                  src={require("../../assets/bg-img/logoDejnaiFooter.png")}
                  alt=""
                  width="155px"
                />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-footer-widget mb-80">
                {/* <!-- Widget Title --> */}
                <h5 className="widget-title">Contact</h5>

                {/* <!-- Single Blog Area --> */}
                <div className="latest-blog-area row col-md-12">
                  <h4 style={{ color: "#3DC4B9" }}>+92 355 4226006</h4>
                  <span>
                    <a href="mailto:dejaniresort@gmail.com"><span style={{ color: "#3DC4B9" }}>dejaniresort@gmail.com</span></a>
                  </span>
                  <span>
                    Astore Pakora,Deosai Rd Gb Gilgit, Gilgit-Baltistan-14300
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Single Footer Widget Area --> */}
            <div className="col-12 col-sm-6 col-lg-3" style={{marginTop: '-10%'}}>
              <div className="single-footer-widget mb-80">
                {/* <!-- Widget Title --> */}
                <h5 className="widget-title">Social Connections</h5>

                {/* <!-- Single Blog Area --> */}
                <div className="latest-blog-area row col-md-12 col-md-6">
                  <a
                    style={{ width: "33%" }}
                    className="col-md-4"
                    href="https://api.whatsapp.com/send?phone=923554226006"
                  >
                    <FaWhatsapp color="green" size="25" />
                  </a>
                  <a
                    style={{ width: "33%" }}
                    className="col-md-4"
                    href="https://www.instagram.com/dejani_resort"
                  >
                    <FaInstagram color="#E1306C" size="25" />
                  </a>
                  <a
                    style={{ width: "33%" }}
                    className="col-md-4"
                    href="https://www.facebook.com/DeJani-Resort-Deosia-102902428056007"
                  >
                    <FaFacebook color="blue" size="25" />
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Single Footer Widget Area --> */}
            <div className="col-12 col-sm-4 col-lg-2" style={{marginTop: '-10%'}}>
              <div className="single-footer-widget mb-80">
                {/* <!-- Widget Title --> */}
                <h5 className="widget-title">Links</h5>

                {/* <!-- Footer Nav --> */}
                <ul className="footer-nav">
                  <li>
                    <a href="/about">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/rooms">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/blogs">
                      <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copywrite-content">
            <div class="row align-items-center">
              <div class="col-12 col-md-8">
                {/* <!-- Copywrite Text --> */}
                <div class="copywrite-text">
                  <p>
                    Copyright &copy; All rights reserved. | Developed by:
                    Digital Brains
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                {/* <!-- Social Info --> */}
                <div class="social-info">
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
