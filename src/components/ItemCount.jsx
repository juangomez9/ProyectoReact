import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { yellow } from "@mui/material/colors";

function ItemCount() {
  const [count, setCount] = useState(0);

  const agregar = () => setCount(count + 1)
  const quitar = () => setCount(count - 1)

  const style = {
    box: {
      display: "flex"
    },
    button: {
      minWidth: 10,
      color: "black",
    },
    span: {
      mr: 1,
      ml: 1,
      color: "black",
      bgcolor: yellow[700],
    }
}

  return (
    <div sx={style.box}>
      <Button sx={style.button} variant="outlined" size="small" disabled={count <= 0} onClick={quitar}><HorizontalRuleIcon fontSize="30" /></Button>
      <Button sx={style.span} size="small" variant="contained" component="span">Agregar al carrito: {count}</Button>
      <Button sx={style.button} variant="outlined" size="small" onClick={agregar}><AddIcon fontSize="30" /></Button>
    </div>
  );
}

export default ItemCount;