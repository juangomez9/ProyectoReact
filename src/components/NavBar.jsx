import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CartWidget from "./CartWidget";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const style = {
  box: {
    flexGrow: 1,
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mr: 2.3,
  },
  text: {
    display: "flex",
    justifyContent: "star",
    alignItems: "center",
  },
  carrito: {
    display: "flex",
    justifyContent: "end",
  },
};

function NavBar() {
  const [anchorAlmacen, setAnchorAlmacen] = useState(null);
  const [anchorChocolates, setAnchorChocolates] = useState(null);
  const [anchorKiosco, setAnchorKiosco] = useState(null);
  const [anchorTabaqueria, setAnchorTabaqueria] = useState(null);
  const [anchorVinos, setAnchorVinos] = useState(null);
  const [anchorContacto, setAnchorContacto] = useState(null);

  const openAlmacen = Boolean(anchorAlmacen);
  const openChocolates = Boolean(anchorChocolates);
  const openKiosco = Boolean(anchorKiosco);
  const openTabaqueria = Boolean(anchorTabaqueria);
  const openVinos = Boolean(anchorVinos);
  const openContacto = Boolean(anchorContacto);

  const handleCloseAlmacen = (e) => setAnchorAlmacen(null);
  const handleAnchorAlmacen = (e) => setAnchorAlmacen(e.currentTarget);
  const handleCloseChocolates = (e) => setAnchorChocolates(null);
  const handleAnchorChocolates = (e) => setAnchorChocolates(e.currentTarget);
  const handleCloseKiosco = (e) => setAnchorKiosco(null);
  const handleAnchorKiosco = (e) => setAnchorKiosco(e.currentTarget);
  const handleCloseTabaqueria = (e) => setAnchorTabaqueria(null);
  const handleAnchorTabaqueria = (e) => setAnchorTabaqueria(e.currentTarget);
  const handleCloseVinos = (e) => setAnchorVinos(null);
  const handleAnchorVinos = (e) => setAnchorVinos(e.currentTarget);
  const handleCloseContacto = (e) => setAnchorContacto(null);
  const handleAnchorContacto = (e) => setAnchorContacto(e.currentTarget);

  return (
    <Box sx={style.box}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={1} md={1} sx={style.menu}>
              <AirportShuttleIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item xs={2} md={2} sx={style.text}>
              <Typography variant="h6" component="div">
                Distribuidora San Jose
              </Typography>
            </Grid>
            <Grid item xs={1} md={1} sx={style.menu}>
              <Button
                endIcon={<ExpandMoreIcon />}
                color="inherit"
                onClick={handleAnchorAlmacen}
              >
                Almacen
              </Button>
              <Menu
                open={openAlmacen}
                anchorEl={anchorAlmacen}
                onClose={handleCloseAlmacen}
              >
                <MenuItem onClick={handleCloseAlmacen}>Alimentos</MenuItem>
                <MenuItem onClick={handleCloseAlmacen}>
                  Barras de Cereal
                </MenuItem>
                <MenuItem onClick={handleCloseAlmacen}>Enlatados</MenuItem>
                <MenuItem onClick={handleCloseAlmacen}>Tostadas</MenuItem>
                <MenuItem onClick={handleCloseAlmacen}>Yerbas</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={1} md={1} sx={style.menu}>
              <Button
                endIcon={<ExpandMoreIcon />}
                color="inherit"
                onClick={handleAnchorChocolates}
              >
                Chocolates
              </Button>
              <Menu
                open={openChocolates}
                anchorEl={anchorChocolates}
                onClose={handleCloseChocolates}
              >
                <MenuItem onClick={handleCloseChocolates}>Felfort</MenuItem>
                <MenuItem onClick={handleCloseChocolates}>Georgalos</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={1} md={1} sx={style.menu}>
              <Button
                endIcon={<ExpandMoreIcon />}
                color="inherit"
                onClick={handleAnchorKiosco}
              >
                Kiosco
              </Button>
              <Menu
                open={openKiosco}
                anchorEl={anchorKiosco}
                onClose={handleCloseKiosco}
              >
                <MenuItem onClick={handleCloseKiosco}>Alfajores</MenuItem>
                <MenuItem onClick={handleCloseKiosco}>Galletas</MenuItem>
                <MenuItem onClick={handleCloseKiosco}>Golosinas</MenuItem>
                <MenuItem onClick={handleCloseKiosco}>Snacks</MenuItem>
                <MenuItem onClick={handleCloseKiosco}>Turrones</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={1} md={1} sx={style.menu}>
              <Button
                endIcon={<ExpandMoreIcon />}
                color="inherit"
                onClick={handleAnchorTabaqueria}
              >
                Tabaqueria
              </Button>
              <Menu
                open={openTabaqueria}
                anchorEl={anchorTabaqueria}
                onClose={handleCloseTabaqueria}
              >
                <MenuItem onClick={handleCloseTabaqueria}>Armadores</MenuItem>
                <MenuItem onClick={handleCloseTabaqueria}>Cigarrillos</MenuItem>
                <MenuItem onClick={handleCloseTabaqueria}>Filtros</MenuItem>
                <MenuItem onClick={handleCloseTabaqueria}>Tabacos</MenuItem>
                <MenuItem onClick={handleCloseTabaqueria}>Sedas</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={1} md={1} sx={style.menu}>
              <Button
                endIcon={<ExpandMoreIcon />}
                color="inherit"
                onClick={handleAnchorVinos}
              >
                Vinos
              </Button>
              <Menu
                open={openVinos}
                anchorEl={anchorVinos}
                onClose={handleCloseVinos}
              >
                <MenuItem onClick={handleCloseVinos}>Etnia</MenuItem>
                <MenuItem onClick={handleCloseVinos}>Quara</MenuItem>
                <MenuItem onClick={handleCloseVinos}>Fuego Negro</MenuItem>
                <MenuItem onClick={handleCloseVinos}>Valle de Luna</MenuItem>
                <MenuItem onClick={handleCloseVinos}>
                  Fincas las Margaritas
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={1} md={1} sx={style.menu}>
              <Button
                endIcon={<ExpandMoreIcon />}
                color="inherit"
                onClick={handleAnchorContacto}
              >
                Contacto
              </Button>
              <Menu
                open={openContacto}
                anchorEl={anchorContacto}
                onClose={handleCloseContacto}
              >
                <MenuItem onClick={handleCloseContacto}>
                  Preguntas Frecuentes
                </MenuItem>
                <MenuItem onClick={handleCloseContacto}>Nosotros</MenuItem>
                <MenuItem onClick={handleCloseContacto}>Contacto</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={2} md={2} sx={style.carrito}>
              <Button
                sx={{ mr: 1 }}
                startIcon={<AccountCircleIcon />}
                color="inherit"
              >
                Ingresar
              </Button>
              <CartWidget />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
