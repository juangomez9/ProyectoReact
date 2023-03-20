import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";

function NavBarFooter() {
  const style = {
    grid: {
        bgcolor: yellow[700],
      display: "flex",
      justifyContent: "center"
    },
  };

  return (
    <Grid container spacing={2} sx={style.grid}>
      <Grid
        item
        xs={2}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        alignSelf={"start"}
        mb={5}
      >
        <Typography mt={3} mb={2} variant="h5" color={"black"}>
          Estamos Para Vos
        </Typography>
        <Link to="/">
          <Typography variant="h6" color={"black"}>Home</Typography>
        </Link>
        <Link to="/catalogo">
          <Typography variant="h6" color={"black"}>Catalogo</Typography>
        </Link>
        <Link to="/cart">
          <Typography variant="h6" color={"black"}>Carrito</Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        mb={5}
      >
        <Typography mt={3} mb={2} variant="h5" color={"black"}>
          Nuestras Categorias
        </Typography>
        <Link  to={`/categoria/${"Alimentos"}`}>
          <Typography variant="h6" color={"black"}>Alimentos</Typography>
        </Link>
        <Link  to={`/categoria/${"Chocolates"}`}>
          <Typography variant="h6" color={"black"}>Chocolates</Typography>
        </Link>
        <Link to={`/categoria/${"Kiosco"}`}>
          <Typography variant="h6" color={"black"}>Kiosco</Typography>
        </Link>
        <Link to={`/categoria/${"Tabaqueria"}`}>
          <Typography variant="h6" color={"black"}>Tabaqueria</Typography>
        </Link>
        <Link to={`/categoria/${"Vinos"}`}>
          <Typography variant="h6" color={"black"}>Vinos</Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        alignSelf={"start"}
        mb={5}
      >
        <Typography mt={3} mb={2} variant="h5" textAlign={"center"} color={"black"}>
          Somos Distri San Jose
        </Typography>
        <Link to="/catalogo">
          <Typography variant="h6" color={"black"}>Nosotros</Typography>
        </Link>
        <Link to="/contacto">
          <Typography variant="h6" color={"black"}>Contacto</Typography>
        </Link>
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        alignSelf={"start"}
        mb={5}
      >
        <Typography mt={3} mb={2} variant="h5" color={"black"}>
          Explora Nuestras Marcas
        </Typography>
        <Link to="http://www.galletitastrio.com.ar/" target={"_blank"}>
          <Typography variant="h6" color={"black"}>Trio</Typography>
        </Link>
        <Link to="https://www.felfort.com.ar/" target={"_blank"}>
          <Typography variant="h6" color={"black"}>Felfort</Typography>
        </Link>
        <Link to="https://bodegaetnia.com/" target={"_blank"}>
          <Typography variant="h6" color={"black"}>Etnia</Typography>
        </Link>
        <Link to="https://dos-hermanos.com/" target={"_blank"}>
          <Typography variant="h6" color={"black"}>Dos Hermanos</Typography>
        </Link>
        <Link to="https://www.riskydit.com.ar/" target={"_blank"}>
          <Typography variant="h6" color={"black"}>Risky-D</Typography>
        </Link>
        <Link to="http://alfajoresvimar.com/" target={"_blank"}>
          <Typography variant="h6" color={"black"}>Vimar</Typography>
        </Link>
        <Link to="https://www.arcor.com/ar/" target={"_blank"}>
          <Typography variant="h6" color={"black"}>Misky</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default NavBarFooter;
