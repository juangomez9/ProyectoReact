import React from "react";
import Carousel from "react-material-ui-carousel";
import Alfajores from "../assets/Alfajores.png";
import Alimentos from "..//assets/Alimentos.png";
import Armadores from "../assets/Armadores.png";
import Chocolates from "../assets/Chocolates.png";
import Cigarrillos from "../assets/Cigarrillos.png";
import Enlatados from "../assets/Enlatados.png";
import Filtros from "../assets/Filtros.png";
import Galletas from "../assets/Galletas.png";
import Golosinas from "../assets/Golosinas.png";
import Sedas from "../assets/Sedas.png";
import Snacks from "../assets/Snacks.png";
import Tabaco from "../assets/Tabaco.png";
import Tostadas from "../assets/Tostadas.png";
import Turrones from "../assets/Turrones.png";
import Vinos from "../assets/Vinos.png";
import Yerbas from "../assets/Yerbas.png";
import ItemCardCategories from "./ItemCardCategories";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";;

function CategoriesCarousel() {
  const items = [
    {
      card1: {
        nombre: "Alfajores",
        img: Alfajores,
      },
      card2: {
        nombre: "Alimentos",
        img: Alimentos,
      },
      card3: {
        nombre: "Chocolates",
        img: Chocolates,
      },
      card4: {
        nombre: "Cigarrillos",
        img: Cigarrillos,
      },
      card5: {
        nombre: "Enlatados",
        img: Enlatados,
      },
      card6: {
        nombre: "Filtros",
        img: Filtros,
      },
      card7: {
        nombre: "Galletas",
        img: Galletas,
      },
      card8: {
        nombre: "Golosinas",
        img: Golosinas,
      },
    },
    {
      card1: {
        nombre: "Sedas",
        img: Sedas,
      },
      card2: {
        nombre: "Snacks",
        img: Snacks,
      },
      card3: {
        nombre: "Tabaco",
        img: Tabaco,
      },
      card4: {
        nombre: "Tostadas",
        img: Tostadas,
      },
      card5: {
        nombre: "Turrones",
        img: Turrones,
      },
      card6: {
        nombre: "Vinos",
        img: Vinos,
      },
      card7: {
        nombre: "Yerbas",
        img: Yerbas,
      },
      card8: {
        nombre: "Armadores",
        img: Armadores,
      },
    },
  ];

  const style = {
    grid: {
      bgcolor: grey[50],
    }
  }

  return (
    <Grid sx={style.grid} container xs={12}>
      <Grid sx={style.grid} item xs={2}></Grid>
      <Grid sx={style.grid} item xs={8}>
        <Carousel>
          {items.map((item, i) => (
            <ItemCardCategories key={i} item={item} />
          ))}
        </Carousel>
      </Grid>
      <Grid sx={style.grid} item xs={2}></Grid>
    </Grid>
  );
}

export default CategoriesCarousel;
