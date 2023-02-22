import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import { StockProductos } from "../data/Stock";

function ItemDetail(productos) {
  const { id } = useParams();

  const productoFilter = StockProductos.filter(
    (producto) => producto.id === id
  );

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

  return (
    <>
      {productoFilter.map((prod) => (
        <Card elevation={4} sx={style.card}>
          <CardMedia
            sx={{ height: 270 }}
            image={prod.img}
            title="productos"
          ></CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h10"
              component="div"
              align="center"
            >
              {prod.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Precio: ${prod.precio}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Descripcion: {prod.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Categoria: ${prod.categoria}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Stock: ${prod.stock}
            </Typography>
          </CardContent>
          <CardActions sx={style.cardActions}>
            <Button sx={style.button} variant="contained" size="small">
              Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default ItemDetail;
