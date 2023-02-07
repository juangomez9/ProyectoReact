import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const style = {
  button: {
    justifyContent: "center"
  }
}


function Tarjeta() {
  return (
    <Card sx={{ bgcolor: blue[500] }}>
      <CardMedia sx={{ height: 140 }} image="vite.svg" title="productos" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Producto
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Productos Comestibles
        </Typography>
      </CardContent>
      <CardActions sx={style.button}>
        <Button variant="contained" size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default Tarjeta;
