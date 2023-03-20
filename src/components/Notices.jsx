import { Button, Paper, Typography } from "@mui/material";
import { deepOrange, yellow } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Notices() {
  const style = {
    box: {
      display: "flex",
      justifyContent: "space-around",
      bgcolor: "rgb(210, 95, 70)",
    },
    paper: {
      textAlign: "center",
      minWidth: "40%",
      p: 2,
      mt: 3,
      mb: 3,
      opacity: 0.9,
      bgcolor: "rgb(173, 81, 61)",
    },
    text: {
      m: 5,
    },
    button: {
      bgcolor: yellow[700],
      color: "white",
      borderRadius: "35px",
      fontSize: "20px",
    },
  };

  return (
    <Box sx={style.box}>
      <Paper elevation={3} sx={style.paper}>
        <Typography variant="h4" fontWeight={"bold"} color="white">
          MAYORISTA ONLINE
        </Typography>
        <Typography sx={style.text} variant="body1" color="white">
          Compra por mayor productos de kiosco, almacen y vinos desde cualquier
          parte del pais. 3 cuotas <br /> sin interes. Todos los medios de pago.
          Descuentos por volumen y entrega gratis.
          <br /> Pago en entrega (CBA)
        </Typography>
        <Link to="/catalogo">
          <Button sx={style.button} variant="contained" className="CheckButton">
            + VER MAS
          </Button>
        </Link>
      </Paper>
      <Paper elevation={3} sx={style.paper}>
        <Typography variant="h4" fontWeight={"bold"} color="white">
          KIOSCO MAYORISTA
        </Typography>
        <Typography sx={style.text} variant="body1" color="white">
          Venta online, Ahorras tiempo, Ahorras dinero, Envio gratis, Precios
          online, <br /> Increibles descuentos, Ofertas semanales, Coutas sin
          interes, <br /> Stock online.
        </Typography>
        <Link to="/catalogo">
          <Button sx={style.button} variant="contained" className="CheckButton">
            + VER MAS
          </Button>
        </Link>
      </Paper>
    </Box>
  );
}

export default Notices;
