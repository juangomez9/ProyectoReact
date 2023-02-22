import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Paper } from "@mui/material";

function ItemCardCategories(props) {
  const style = {
    box1: {
      display: "flex",
      justifyContent: "center",
      height: "170px",
      alignItems: "end",
    },
    box2: {
      display: "flex",
      justifyContent: "center",
      height: "170px",
    },
    paper: {
      display: "block",
      height: "80%",
      width: "20%",
      textAlign: "center",
      p: 1,
      m: 1,
      bgcolor: grey[50],
    },
    text: {
      m: 2,
    },
  };

  return (
    <Box>
      <Box mb={-2}>
        <Typography
          sx={style.text}
          textAlign={"center"}
          variant="h4"
          color={"black"}
        >
          Categorias
        </Typography>
      </Box>
      <Box sx={style.box1}>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card1.img} />
          <Typography>{props.item.card1.nombre}</Typography>
        </Paper>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card2.img} />
          <Typography>{props.item.card2.nombre}</Typography>
        </Paper>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card3.img} />
          <Typography>{props.item.card3.nombre}</Typography>
        </Paper>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card4.img} />
          <Typography>{props.item.card4.nombre}</Typography>
        </Paper>
      </Box>
      <Box sx={style.box2}>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card5.img} />
          <Typography>{props.item.card5.nombre}</Typography>
        </Paper>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card6.img} />
          <Typography>{props.item.card6.nombre}</Typography>
        </Paper>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card7.img} />
          <Typography>{props.item.card7.nombre}</Typography>
        </Paper>
        <Paper component={Button} elevation={3} sx={style.paper}>
          <img src={props.item.card8.img} />
          <Typography>{props.item.card8.nombre}</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default ItemCardCategories;
