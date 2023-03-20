import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Item from "./Item";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function FeaturedProducts() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProductos(docs);
    });
  }, []);

  const prods = productos.slice(0, 12);

  console.log(prods);

  const style = {
    grid: {
      bgcolor: grey[50],
    },
  };

  return (
    <Grid
      container
      xs={12}
      spacing={2}
      ml={0}
      sx={style.grid}
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography
          mb={7}
          mt={5}
          variant="h4"
          color={"black"}
          align="center"
          fontWeight={"bold"}
        >
          Productos Destacados
        </Typography>
      </Grid>
      <Grid container xs={10} spacing={2} display="flex" mb={"5%"}>
        {prods.map((item) => (
          <Grid item xs={2}>
            <Item
              sx={style.items}
              id={item.id}
              img={item.imagen}
              nombre={item.nombre}
              categoria={item.categoria}
              stock={item.stock}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default FeaturedProducts;
