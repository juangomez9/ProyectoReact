import React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

function ItemList({ productos }) {
  const style = {
    gridProductos: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <>
      <Grid
        sx={style.gridProductos}
        mt={2}
        container
        p={2}
        spacing={2}
        mb={"5%"}
      >
        {productos?.map((prod) => (
          <Grid key={prod.id} item xs={2}>
            <Item
              key={prod.id}
              id={prod.id}
              img={prod.imagen}
              nombre={prod.nombre}
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
