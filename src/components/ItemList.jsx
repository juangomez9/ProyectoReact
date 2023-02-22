import React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid"

function ItemList({ productos }) {
  return (
    <>
      <Grid container p={2} spacing={2}>
        {productos?.map((prod) => (
          <Grid item xs={2}>
            <Item
              key={prod.id}
              id={prod.id}
              img={prod.img}
              nombre={prod.nombre}
              precio={prod.precio}
              descripcion={prod.descripcion}
              stock={prod.stock}
              categoria={prod.categoria}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ItemList;
