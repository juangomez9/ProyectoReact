import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
import ItemList from "./ItemList";
import { useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {
  const { categoria } = useParams();
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
    gridProductos: {
      display: "flex",
      justifyContent: "space-around",
    },
  };

  const catFilter = productos && productos.filter((prod) => prod.categoria == categoria);

  return (
    <Grid sx={style.box} container spacing={2}>
      <Grid mb={1} mt={5} item xs={12} md={12}>
        <Typography textAlign={"center"} variant="h4" color={"black"}>
          Catalogo de Productos
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {categoria ? (
          <ItemList productos={catFilter} />
        ) : (
          <ItemList productos={productos} />
        )}
      </Grid>
    </Grid>
  );
}

export default ItemListContainer;
