import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import MiCarousel from "./components/MiCarousel";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { blue } from "@mui/material/colors";

function App() {
  return (
    <div>
      <Grid sx={{bgcolor: blue[50]}} container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid sx={{ bgcolor: blue[300] }} item xs={12}>
          <MiCarousel />
        </Grid>
        <Grid sx={{p: 4}} item xs={12}>
          <ItemListContainer greeting="Ofertas" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
