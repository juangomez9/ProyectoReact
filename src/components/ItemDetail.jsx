import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Grid } from "@mui/material";

function ItemDetail({ productos }) {
  const { id } = useParams();

  const style = {
    card: {
      bgcolor: "white",
    },
    cardActions: {
      justifyContent: "space-around",
      display: "flex",
    },
    button: {
      bgcolor: yellow[700],
      color: "black",
    },
    gridContainer: {
      minHeight: "100vh",
    },
  };

  const productoFilter = productos.filter((prod) => prod.id == id);

  return (
    <>
      <Grid sx={style.gridContainer} container xs={12}>
        <Grid item>
          {productoFilter.map((prod) => (
            <Card key={prod.id} elevation={4} sx={style.card}>
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  Precio: ${prod.precio}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  Descripcion: {prod.descripcion}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  Categoria: {prod.categoria}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  Stock: {prod.stock}
                </Typography>
              </CardContent>
              <CardActions sx={style.cardActions}>
                <ItemCount />
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default ItemDetail;
