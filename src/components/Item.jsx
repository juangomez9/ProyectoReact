import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import ItemCount from "./ItemCount";

const style = {
  card: {
    bgcolor: yellow[50],
  },
  cardActions: {
    justifyContent: "space-around",
    display: "flex",
  },
  button: {
    bgcolor: yellow[700],
    color: "black",
  },
  span: {
    textDecoration: "line-through",
  },
};

function Item({ id, img, nombre, precio, descripcion, categoria, stock }) {
  return (
    <Card key={id} elevation={4} sx={style.card}>
      <CardMedia sx={{ height: 270 }} image={img} title="productos"></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h10" component="div" align="center">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Precio: ${precio} <br /> {descripcion} <br /> {categoria} <br /> Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions sx={style.cardActions}>
        <Button sx={style.button} variant="contained" size="small">
          Comprar
        </Button>
        <ItemCount />
      </CardActions>
    </Card>
  );
}

export default Item;
