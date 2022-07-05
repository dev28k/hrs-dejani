import React from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";

export default function Navbarr() {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Room",
        link: "/rooms",
      },
      {
        text: "About Us",
        link: "/about",
      },
      {
        text: "Contact",
        link: "/contact",
      },
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: " ",
      },
    ],
    logo: {
      img: require("../assets/bg-img/logoDejani.png"),
      link: "/",
    },
    style: {
      barStyles: {
        background: "rgb(0 203 182 / 83%)",
      },
      sidebarStyles: {
        background: "#15C4B4",
        buttonColor: "black",
      },
      logoStyles: {
        marginLeft: "3%",
      },
      linkStyles: {
        color: "#0E2737",
      },
    },
  };
  return <Navbar {...props} />;
}
