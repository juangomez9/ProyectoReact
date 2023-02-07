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

const style = {
  box: {
    flexGrow: 1,
  },
  text: {
    flexGrow: 1,
    ml: 3,
  },
  menu: {
    mr: "43%",
  },
};

function NavBar() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClose = (e) => setAnchor(null);
  const handleAnchor = (e) => setAnchor(e.currentTarget);

  return (
    <Box sx={style.box}>
      <AppBar position="static">
        <Toolbar>
          <AirportShuttleIcon />
          <Typography variant="h6" component="div" sx={style.text}>
            Distribuidora San Jose
          </Typography>
          <Button color="inherit" onClick={handleAnchor} sx={style.menu}>
            Opciones
          </Button>
          <Menu open={open} anchorEl={anchor} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Quienes Somos</MenuItem>
            <MenuItem onClick={handleClose}>Productos</MenuItem>
            <MenuItem onClick={handleClose}>Contacto</MenuItem>
          </Menu>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
