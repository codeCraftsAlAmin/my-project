import React from "react";
import HeroSec from "../layouts/HeroSec";
import Services from "../layouts/Services";

const Home = () => {
  const data = {
    name: "Thapa E-Commerce",
  };
  return (
    <>
      <HeroSec myData={data} />
      <Services />
    </>
  );
};

export default Home;
