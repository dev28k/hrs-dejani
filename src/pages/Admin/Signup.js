import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // setName(event.target[0].value)
    // setEmail(event.target[1].value)
    // setPassword(event.target[2].value)
    var obj = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    console.log(obj);
    userRegister(obj);
  }

  const userRegister = async (value) => {
    // console.log(value)
    const response = await axios.post("http://localhost:8081/register", value, {
      headers: { "Content-Type": "application/json" },
    });

    console.log(response.data);
  };

  return (
    <div
      className="col-md-12"
      style={{ backgroundImage: 'url("img/bg-img/7.jpg")' }}
    >
      <div className="cont">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-md-12 login-title">Registration</div>

            <div className="col-md-12 login-form">
              <div className="col-md-12 login-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      i
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                      {/* <!-- Error Message --> */}
                    </div>
                    <div className="col-md-6 login-btm login-button">
                      <center>
                        <button
                          type="submit"
                          className="roberto-btn w-50 btn-outline-primary"
                          disabled={!validateForm()}
                        >
                          Register
                        </button>
                      </center>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
