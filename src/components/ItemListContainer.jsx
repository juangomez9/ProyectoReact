import React from "react";
import Tarjeta from "./Tarjeta";
import { Grid, Typography } from "@mui/material";
import {StockProductos} from "../datos/Stock";

const style = {
  text: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    m: 1
  }
}

function ItemListContainer({ greeting }) {
  console.table(StockProductos)
  return (
    <section>
      <Grid container spacing={2} sx={{ p: 4 }}>
        <Grid item xs={12} md={12}>
          <Typography sx={style.text} textAlign={"center"} variant="h4" color="text.primary">
            {greeting}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
        </Grid>
        <Grid item xs={12} md={2}>
          <Tarjeta />
        </Grid>
        <Grid item xs={12} md={2}>
          <Tarjeta />
        </Grid>
        <Grid item xs={12} md={2}>
          <Tarjeta />
        </Grid>
        <Grid item xs={12} md={2}>
          <Tarjeta />
        </Grid>
        <Grid item xs={12} md={2}>
        </Grid>
      </Grid>
    </section>
  );
}

export default ItemListContainer;
