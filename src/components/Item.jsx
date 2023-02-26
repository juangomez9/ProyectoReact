import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";

const style = {
  card: {
    bgcolor: "white",
  },
  cardActions: {
    justifyContent: "center",
  },
  button: {
    bgcolor: yellow[700],
    color: "black",
  },
};

function Item({ id, img, nombre, categoria, stock }) {
  return (
    <Card key={id} elevation={4} sx={style.card}>
      <CardMedia sx={{ height: 270 }} image={img} title="productos"></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h10" component="div" align="center">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Categoria: {categoria}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions sx={style.cardActions}>
        <Link to={`/item/${id}`}>
          <Button sx={style.button} variant="contained" size="small">
            Detalles del producto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Item;
