import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import logo_img from "/public/images/logo.png";

const Header = () => {
  return (
    <div className="main_header">
      <NavLink to={"/"}>
        <img src={logo_img} alt="" />
      </NavLink>
      <Nav />
    </div>
  );
};

export default Header;
