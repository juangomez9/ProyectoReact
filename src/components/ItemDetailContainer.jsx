import React, { useEffect } from "react";
import { StockProductos } from "../data/Stock";
import ItemDetail from "./ItemDetail";
import { grey } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ItemDetailContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState();

  function getDatos() {
    return new Promise((resolve, reject) => {
      if (StockProductos.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(StockProductos);
      }, 2000);
    });
  }

  async function fechingData() {
    try {
      const datosStock = await getDatos();
      setProductos(datosStock);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fechingData();
  }, []);

  const style = {
    box: {
      bgcolor: grey[200],
    },
  };

  const productoFilter = StockProductos.filter((prod) => prod.id === id);

  return (
    <Grid sx={style.box} container spacing={3}>
      <Grid alignItems={"center"} item xs={12}>
        <Typography m={5} variant="h4" color={"black"} align="center">
          Detalles del producto
        </Typography>
      </Grid>
      <Grid item xs={5}></Grid>
      <Grid item xs={2}>
        <ItemDetail productos={StockProductos} />
        <Grid item xs={5}></Grid>
      </Grid>
    </Grid>
  );
}

export default ItemDetailContainer;
