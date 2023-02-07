import React from "react";
import Tarjeta from "./Tarjeta";
import { Grid } from "@mui/material";

function ItemListContainer(props) {
  return (
    <div>
      <Grid container spacing={2} sx={{ p: 4 }}>
        <Grid item xs={12} md={12}>
          <h2 align="center">Bienvenido a {props.greeting}</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={12} md={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={12} md={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={12} md={3}>
          <Tarjeta />
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemListContainer;
