import { Box } from "@mui/system";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { yellow } from "@mui/material/colors";

const style = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: yellow[700],
    height: "100px"
  },
  div: {
    ml: 5,
  },
};

function BarraOpciones() {
  return (
    <Box sx={style.box}>
      <Box sx={style.div}>
        <Button>
          <LocalShippingIcon sx={{ fontSize: 70, color: "black" }} />
          <Typography
            sx={{ ml: 3, textTransform: "capitalize" }}
            component={"span"}
            color={"black"}
          >
            Envios <br /> todo sobre nuestros envios <br /> Haz click aqui
          </Typography>
        </Button>
      </Box>
      <Box sx={style.div}>
        <Button>
          <InventoryIcon sx={{ fontSize: 70, color: "black" }} />
          <Typography
            sx={{ ml: 3, textTransform: "capitalize" }}
            component={"span"}
            color={"black"}
          >
            Productos <br /> Realiza tu pedido ahora <br /> Haz click aqui
          </Typography>
        </Button>
      </Box>
      <Box sx={style.div}>
        <Button>
          <AttachEmailIcon sx={{ fontSize: 70, color: "black" }} />
          <Typography
            sx={{ ml: 3, textTransform: "capitalize" }}
            component={"span"}
            color={"black"}
          >
            Contacto <br /> Contacta a nuestros vendedores <br /> Haz click aqui
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default BarraOpciones;
