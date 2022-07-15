import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let loginCheck = localStorage.getItem("login");
    if (loginCheck) {
      navigate("/dashboard");
    }
  });

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // setEmail(event.target[0].value)
    // setPassword(event.target[1].value)
    var obj = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    console.log(obj);
    userLogin(obj);
  }

  async function userLogin(values) {
    const response = await axios.post(
      "https://dejaniresort.herokuapp.com/login",
      { email: values.email, password: values.password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status == 200) {
      localStorage.setItem("login", true);
      localStorage.setItem("user", values.email);
      alert("Login Successful");
      navigate("/dashboard");
    } else if (response.status == 201) {
      alert("Check Credentails");
    }

    console.log(response.status);
  }

  return (
    <div
      className="col-md-12"
      style={{ backgroundImage: 'url("img/bg-img/7.jpg")' }}
    >
      <div className="cont">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-md-12 login-title">ADMIN PANEL</div>

            <div className="col-md-12 login-form">
              <div className="col-md-12 login-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
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
                    <div className="col-lg-6 login-btm login-button">
                      <center>
                        <button
                          type="submit"
                          className="roberto-btn w-50 btn-outline-primary"
                          disabled={!validateForm()}
                        >
                          Login
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
