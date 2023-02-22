import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemCardMiCaruosel from "./ItemCardMiCaruosel";
import { deepOrange, red } from "@mui/material/colors";

function MiCarousel() {
  const items = [
    {
      papel1: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
      papel2: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
    },
    {
      papel1: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
      papel2: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
    },
  ];

  const style = {
    grid: {
      display: "block",
      bgcolor: deepOrange[400]
    }
  }

  return (
    <Grid sx={style.grid} container xs={12}>
        <Carousel>
          {items.map((item, i) => (
            <ItemCardMiCaruosel key={i} item={item} />
          ))}
        </Carousel>
    </Grid>
  );
}

export default MiCarousel;
