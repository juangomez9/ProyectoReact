import React from "react";
import BarraOpciones from "./components/OptionsBar";
import Oferts from "./components/FeaturedProducts";
import Notices from "./components/Notices";
import CardCategories from "./components/CardCategories";

function Home() {
  return (
    <>
      <Notices />
      <BarraOpciones />
      <CardCategories />
      <Oferts />
    </>
  );
}

export default Home;
