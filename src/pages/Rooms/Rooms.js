import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dejaniresort.herokuapp.com/roomList")
      .then(function (response) {
        // handle success
        setData(response.data);
        // console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [data]);

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
                <h2 class="page-title">Our Room</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Room
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Rooms Area Start --> */}
      <div class="roberto-rooms-area section-padding-100-0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8">
              {/* <!-- Single Room Area --> */}
              {data.map((item) => {
                // console.log(item.services)
                var img = `data:image/jpeg;base64,${item.imageLink}`;
                // console.log(item._id);
                return (
                  <div
                    class="single-room-area d-flex align-items-center mb-50 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    {/* <!-- Room Thumbnail --> */}
                    <div class="room-thumbnail">
                      {/* <img src="img/bg-img/44.jpg" alt="" /> */}
                      <img
                        src={img}
                        style={{ width: "365px", height: "288px" }}
                      />
                    </div>
                    {/* <!-- Room Content --> */}
                    <div class="room-content">
                      <h2>Luxury Room</h2>
                      <h5>{item.class}</h5>
                      <h4>
                        {item.fare} Pkr <span>/ Day</span>
                      </h4>
                      <div class="room-feature">
                        {/* <h6>Size: <span>30 ft</span></h6> */}
                        <h6>
                          Capacity: <span>Max persion {item.capacity}</span>
                        </h6>
                        <h6 style={{ marginLeft: "0.5" }}>
                          Bed: <span>{item.beds} beds</span>
                        </h6>
                        <h6>
                          Services: <span>{item.services}</span>
                        </h6>
                      </div>

                      <button
                        class="btn view-detail-btn"
                        onClick={() => {
                          // console.log(item)
                          navigate("/room", {
                            state: item,
                          });
                        }}
                      >
                        View Details{" "}
                        <i
                          class="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* <!-- Pagination --> */}
              {/* <nav
                class="roberto-pagination wow fadeInUp mb-100"
                data-wow-delay="1000ms"
              >
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next <i class="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav> */}
            </div>

            <div class="col-12 col-lg-4">
              {/* <!-- Hotel Reservation Area --> */}
              <div class="hotel-reservation--area mb-100">
                <form action="#" method="post">
                  <div class="form-group mb-30">
                    <label for="checkInDate">Date</label>
                    <div class="input-daterange" id="datepicker">
                      <div class="row no-gutters">
                        <div class="col-6">
                          <input
                            type="text"
                            class="input-small form-control"
                            id="checkInDate"
                            name="checkInDate"
                            placeholder="Check In"
                          />
                        </div>
                        <div class="col-6">
                          <input
                            type="text"
                            class="input-small form-control"
                            name="checkOutDate"
                            placeholder="Check Out"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mb-30">
                    <label for="guests">Guests</label>
                    <div class="row">
                      <div class="col-6">
                        <select name="adults" id="guests" class="form-control">
                          <option value="adults">Adults</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                        </select>
                      </div>
                      <div class="col-6">
                        <select
                          name="children"
                          id="children"
                          class="form-control"
                        >
                          <option value="children">Children</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mb-50">
                    <div class="slider-range">
                      <div class="range-price">Max Price: $0 - $3000</div>
                      <div
                        data-min="0"
                        data-max="3000"
                        data-unit="$"
                        class="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                        data-value-min="0"
                        data-value-max="3000"
                        data-label-result="Max Price: "
                      >
                        <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
                        <span
                          class="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                        ></span>
                        <span
                          class="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="roberto-btn w-100">
                      Check Available
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
