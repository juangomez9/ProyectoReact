import React, { useEffect } from "react";
import { StockProductos } from "../data/Stock";
import ItemDetail from "./ItemDetail";
import { grey } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const {id} = useParams();
  const [productos, setProductos] = useState();

  function getDatos() {
    return new Promise((resolve, reject) => {
      if (StockProductos.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const productoFilter = StockProductos.filter((prod)=> prod.id === id);
        resolve(productoFilter);
      }, 2000);
    });
  }
  
  async function fechingData() {
    try {
      const datosStock = await getDatos();
      setProductos(datosStock)
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

  return (
    <Grid sx={style.box} container spacing={2}>
      <Grid mt={3} item md={12}>
        <Typography textAlign={"center"} variant="h4" color={"black"}>
          Productos
        </Typography>
      </Grid>
      <ItemDetail productos={StockProductos} />
      <Grid mb={3} sx={style.gridButton} item xs={12}>
      </Grid>
    </Grid>
  );
}

export default ItemDetailContainer;
