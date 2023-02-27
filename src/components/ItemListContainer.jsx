import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { StockProductos } from "../data/Stock";
import { useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
import ItemList from "./ItemList";
import { useState } from "react";

function ItemListContainer() {
  const { categoria } = useParams();
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
    gridProductos: {
      display: "flex",
      justifyContent: "space-around"
    }
  };

  const catFilter = StockProductos.filter(
    (prod) => prod.categoria == categoria
  );

  return (
    <Grid sx={style.box} container spacing={2}>
      <Grid mb={1} mt={5} item xs={12} md={12}>
        <Typography textAlign={"center"} variant="h4" color={"black"}>
          Productos
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {categoria ? 
          <ItemList productos={catFilter} />
         : 
          <ItemList productos={StockProductos} />
        }
      </Grid>
    </Grid>
  );
}

export default ItemListContainer;
