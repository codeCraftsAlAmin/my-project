import React from "react";
import { Link } from "react-router-dom";
import herImg from "/public/images/hero.jpg";

const HeroSec = ({ myData }) => {
  console.log(myData);
  return (
    <div className="container">
      <div className="grid grid_two_columns">
        <div className="her_sec_data">
          <p>Welcome to</p>
          <h1>{myData.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            atque temporibus veniam doloribus libero ad error omnis voluptates
            animi! Suscipit sapiente.
          </p>
          <Link className="show_btn" to={"/products"}>
            Show more
          </Link>
        </div>

        <div className="hero_section_img">
          <img src={herImg} alt="" className="img_style" />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
