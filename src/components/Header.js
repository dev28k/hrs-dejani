import React, { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setShow(!show);
  }, []);

  return (
    <div>
      {loading ? (
        <div id="preloader">
          <div className="loader"></div>
        </div>
      ) : null}
      {/* <!-- Header Area Start --> */}
      <header className="header-area">
        {/* <!-- Search Form --> */}
        <div className="search-form d-flex align-items-center">
          <div className="container">
            <form action="index.html" method="get">
              <input
                type="search"
                name="search-form-input"
                id="searchFormInput"
                placeholder="Type your keyword ..."
              />
              <button type="submit">
                <i className="icon_search"></i>
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Top Header Area Start --> */}

        <div className="top-header-area" style={{ backgroundColor: "#0e2737" }}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="top-header-content">
                  <a href="#">
                    <i className="icon_phone"></i> <span>+92 355 4226006</span>
                  </a>
                  <a href="#">
                    <i className="icon_mail"></i>{" "}
                    <span>dejaniresort@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="col-6">
                <div className="top-header-content">
                  {/* <!-- Top Social Area --> */}
                  <div className="top-social-area ml-auto">
                    <a href="https://api.whatsapp.com/send?phone=923554226006">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com/DeJani-Resort-Deosia-102902428056007">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    {/* <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a> */}
                    <a href="https://www.instagram.com/dejani_resort">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
