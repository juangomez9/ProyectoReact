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
  };

  const productoFilter = productos && productos.filter((prod) => prod.id == id);

  return (
    <>
      <Grid container xs={12} mb={"30%"}>
        <Grid item>
          {productoFilter &&
            productoFilter.map((prod) => (
              <Card key={prod.id} elevation={4} sx={style.card}>
                <CardMedia
                  align="center"
                  sx={{ height: 150 }}
                  title="productos"
                >
                  <img src={prod.imagen} width={"150px"}></img>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                  >
                    {prod.categoria}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                    mb={0}
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
                    Stock: {prod.stock}
                  </Typography>
                </CardContent>
                <CardActions sx={style.cardActions}>
                  <ItemCount
                    stock={prod.stock}
                    id={prod.id}
                    precio={prod.precio}
                    nombre={prod.nombre}
                    img={prod.imagen}
                  />
                </CardActions>
              </Card>
            ))}
        </Grid>
      </Grid>
    </>
  );
}

export default ItemDetail;
