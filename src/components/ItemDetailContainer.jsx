import React, { useEffect } from "react";
import { StockProductos } from "../data/Stock";
import ItemDetail from "./ItemDetail";
import { grey } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();

  const style = {
    box: {
      bgcolor: grey[200],
    },
  };

const productoFilter = StockProductos.filter((prod) => prod.id === id);

  return (
    <Grid sx={style.box} height={"100vh"} container spacing={3}>
      <Grid item mt={"10%"} xs={5}></Grid>
      <Grid item mt={"10%"} xs={2}>
      <ItemDetail productos={StockProductos} />
      <Grid item mt={"10%"} xs={5}></Grid>
      </Grid>
    </Grid>
  );
}

export default ItemDetailContainer;
