import React from "react";
import MiCarousel from "./components/MiCarousel";
import BarraOpciones from "./components/OptionsBar";
import CategoriesCarousel from "./components/CategoriesCaruosel";

function Home() {
  return (
    <>
      <MiCarousel />
      <BarraOpciones />
      <CategoriesCarousel />
    </>
  );
}

export default Home;
