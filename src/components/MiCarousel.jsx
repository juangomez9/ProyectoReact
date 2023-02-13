import { Button, Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";

function MiCarousel() {
  const items = [
    {
      papel1: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
      papel2: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
    },
    {
      papel1: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
      papel2: {
        name: "Mayorista Online",
        description: "Compra por mayor productos de kiosco y almacen",
      },
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const style = {
    box: {
      display: "flex",
      height: "350px",
    },
    paper: {
      height: "200px",
      width: "40%",
      textAlign: "center",
      p: 3,
      m: 8,
      bgcolor: blue[100],
    },
    text: {
      m: 5,
    },
  };

  return (
    <Box sx={style.box}>
      <Paper elevation={3} sx={style.paper}>
        <Typography variant="h3" color="text.primary">
          {props.item.papel1.name}
        </Typography>
        <Typography sx={style.text} variant="h5" color="text.primary">
          {props.item.papel1.description}
        </Typography>
        <Button variant="contained" className="CheckButton">
          Tienda
        </Button>
      </Paper>
      <Paper elevation={3} sx={style.paper}>
        <Typography variant="h3" color="text.primary">
          {props.item.papel2.name}
        </Typography>
        <Typography sx={style.text} variant="h5" color="text.primary">
          {props.item.papel2.description}
        </Typography>
        <Button variant="contained" className="CheckButton">
          Tienda
        </Button>
      </Paper>
    </Box>
  );
}

export default MiCarousel;
