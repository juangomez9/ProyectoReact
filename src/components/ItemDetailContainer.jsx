import React, { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { grey } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [productos, setProductos] = useState();

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProductos(docs);
    });
  }, []);

  const style = {
    box: {
      bgcolor: grey[200],
    },
  };

  return (
    <Grid sx={style.box} container spacing={3}>
      <Grid alignItems={"center"} item xs={12}>
        <Typography m={5} variant="h4" color={"black"} align="center">
          Detalles del producto
        </Typography>
      </Grid>
      <Grid item xs={5}></Grid>
      <Grid item xs={2}>
        <ItemDetail productos={productos} />
        <Grid item xs={5}></Grid>
      </Grid>
    </Grid>
  );
}

export default ItemDetailContainer;
