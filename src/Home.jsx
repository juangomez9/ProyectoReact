import React from "react";
import BarraOpciones from "./components/OptionsBar";
import Notices from "./components/Notices";
import CardCategories from "./components/CardCategories";
import FeaturedProducts from "./components/FeaturedProducts";

function Home() {
  return (
    <>
      <Notices />
      <BarraOpciones />
      <CardCategories />
      <FeaturedProducts />
    </>
  );
}

export default Home;
