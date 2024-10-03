import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <ul className="nav_list">
        <li>
          <Link to={"/"} className="nav_link home_link">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="nav_link">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="nav_link">
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/products"} className="nav_link">
            Products
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="nav_link">
            <FiShoppingCart className="cart_trolly" />
            <span className="cart_total_item">10</span>
          </Link>
        </li>
      </ul>

      {/* two buttons for open and close for menu */}
      {/* <div className="mbl_nav_btn">
        <CiMenuBurger className="mbl_nav_icon" name="menu_outline" />
        <IoCloseSharp
          className="mbl_nav_icon close_outline"
          name="close_outline"
        />
      </div> */}
    </div>
  );
};

export default Nav;
