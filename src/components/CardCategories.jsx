import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import Alimentos from "../assets/Alimentos.png";
import Chocolates from "../assets/Chocolates.png";
import Tabaco from "../assets/Tabaco.png";
import Vinos from "../assets/Vinos.png";
import Kiosco from "../assets/Kiosco.png";
import { Link } from "react-router-dom";

function CardCategories() {
  const items = [
    {
      nombre: "Alimentos",
      img: Alimentos,
      link: `/categoria/${"Alimentos"}`
    },
    {
      nombre: "Chocolates",
      img: Chocolates,
      link: `/categoria/${"Chocolates"}`
    },
    {
      nombre: "Tabaco",
      img: Tabaco,
      link: `/categoria/${"Tabaqueria"}`
    },
    {
      nombre: "Kiosco",
      img: Kiosco,
      link: `/categoria/${"Kiosco"}`
    },
    {
      nombre: "Vinos",
      img: Vinos,
      link: `/categoria/${"Vinos"}`
    },
  ];

  const style = {
    box1: {
      display: "flex",
      justifyContent: "center",
      height: "170px",
      alignItems: "end",
    },
    paper: {
      display: "block",
      height: "80%",
      width: "200px",
      textAlign: "center",
      p: 1,
      m: 2,
      bgcolor: grey[50],
    },
    box: {
      bgcolor: grey[50],
    },
  };

  return (
    <Box sx={style.box}>
      <Box>
        <Typography
          pt={5}
          mb={3}
          textAlign={"center"}
          variant="h4"
          color={"black"}
          fontWeight={"bold"}
        >
          Categorias
        </Typography>
      </Box>
      <Box sx={style.box1}>
        {items.map((item, i) => (
          <Link to={item.link} key={i}>
            <Paper component={Button} elevation={3} sx={style.paper}>
              <img src={item.img}></img>
              <Typography>{item.nombre}</Typography>
            </Paper>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default CardCategories;
