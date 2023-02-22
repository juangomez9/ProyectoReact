import { Button, Paper, Typography } from "@mui/material";
import { deepOrange, yellow } from "@mui/material/colors";
import { Box } from "@mui/system";

function ItemCardMiCaruosel(props) {
  const style = {
    box: {
      display: "flex",
      justifyContent: "space-around",
      height: "320px"
    },
    paper: {
      textAlign: "center",
      p: 3,
      mt: 6,
      mb: 3,
      opacity: 0.9,
      bgcolor: deepOrange[300],
    },
    text: {
      m: 5,
    },
    button: {
      bgcolor: yellow[700],
      color: "black",
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
        <Button sx={style.button} variant="contained" className="CheckButton">
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
        <Button sx={style.button} variant="contained" className="CheckButton">
          Tienda
        </Button>
      </Paper>
    </Box>
  );
}

export default ItemCardMiCaruosel;
