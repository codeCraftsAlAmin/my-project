import { userProducts } from "../context/productscontext";
import HeroSec from "../layouts/HeroSec";

const About = () => {
  const { myName } = userProducts();

  const data = {
    name: "Thapa Store",
  };
  return (
    <>
      {myName}
      <HeroSec myData={data} />
    </>
  );
};

export default About;
