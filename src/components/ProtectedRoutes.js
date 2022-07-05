import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let loginCheck = localStorage.getItem("login");
    if (!loginCheck) {
      navigate("/login");
    }
  });

  return <Component />;
}
