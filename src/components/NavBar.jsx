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
    pr: 10
  },
  inicio: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  carrito: {
    display: "flex",
    justifyContent: "end",
  },
  menuItem: {
    color: "black",
  },
  buttons: {
    ml: 5,
    color: "black",
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
              <Link to="/">
                <Button sx={{ color: "black" }}>Inicio</Button>
              </Link>
              <Link to="/catalogo">
                <Button sx={style.buttons}>Catalogo</Button>
              </Link>
              <Button
                endIcon={<ExpandMoreIcon />}
                sx={style.buttons}
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
                  <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                    Alimentos
                  </MenuItem>
                </Link>
                <Link to={`/categoria/${"Chocolates"}`}>
                  <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                    Chocolates
                  </MenuItem>
                </Link>
                <Link to={`/categoria/${"Kiosco"}`}>
                  <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                    Kiosco
                  </MenuItem>
                </Link>
                <Link to={`/categoria/${"Tabaqueria"}`}>
                  <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                    Tabaqueria
                  </MenuItem>
                </Link>
                <Link to={`/categoria/${"Vinos"}`}>
                  <MenuItem sx={style.menuItem} onClick={handleCloseCategory}>
                    Vinos
                  </MenuItem>
                </Link>
              </Menu>
            </Grid>
            <Grid item xs={12} md={2} sx={style.carrito}>
              <Link to={"/cart"}>
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
