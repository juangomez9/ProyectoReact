import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CartWidget from "./CartWidget";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const style = {
  box: {
    flexGrow: 1,
  },
  toolbar: {
    bgcolor: yellow[700],
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pr: 20
  },
  inicio: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    color: "black",
    p: 0,
  },
  carrito: {
    display: "flex",
    justifyContent: "end",
  },
};

function NavBar() {
  const [anchorCategory, setAnchorCategory] = useState(null);
  const openCategory = Boolean(anchorCategory);

  const handleCloseCategory = (e) => setAnchorCategory(null);
  const handleAnchorCategory = (e) => setAnchorCategory(e.currentTarget);

  return (
    <Box sx={style.box}>
      <AppBar position="static">
        <Toolbar sx={style.toolbar}>
          <Grid container spacing={12}>
            <Grid item xs={12} md={3} sx={style.inicio}>
              <AirportShuttleIcon sx={{ fontSize: 40, color: "black" }} />
              <Link to="/">
                <Typography sx={{ color: "black" }} variant="h6">
                  Distribuidora San Jose
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} md={7} sx={style.menu}>
              <Link to="/catalogo">
              <Button sx={{ color: "black" }}>Catalogo</Button>
              </Link>
              <Button
                endIcon={<ExpandMoreIcon />}
                sx={{ color: "black" }}
                onClick={handleAnchorCategory}
              >
                Categorias
              </Button>
              <Menu
                open={openCategory}
                anchorEl={anchorCategory}
                onClose={handleCloseCategory}
              >
                <Link to={`/categoria/${"Alimentos"}`}>
                  <MenuItem onClick={handleCloseCategory}>Alimentos</MenuItem>
                </Link>
                <Link to={`/categoria/${"Chocolates"}`}>
                  <MenuItem onClick={handleCloseCategory}>Chocolates</MenuItem>
                </Link>
                <Link to={`/categoria/${"Kiosco"}`}>
                  <MenuItem onClick={handleCloseCategory}>Kiosco</MenuItem>
                </Link>
                <Link to={`/categoria/${"Tabaqueria"}`}>
                  <MenuItem onClick={handleCloseCategory}>Tabaqueria</MenuItem>
                </Link>
                <Link to={`/categoria/${"Vinos"}`}>
                  <MenuItem onClick={handleCloseCategory}>Vinos</MenuItem>
                </Link>
              </Menu>
            </Grid>
            <Grid item xs={12} md={2} sx={style.carrito}>
              <Button sx={{ color: "black" }} startIcon={<AccountCircleIcon />}>
                Ingresar
              </Button>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
