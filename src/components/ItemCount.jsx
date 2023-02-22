import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Typography } from "@mui/material";

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
    }
}

function ItemCount() {
  const [count, setCount] = useState(0);

  const agregar = () => setCount(count + 1)
  const quitar = () => setCount(count - 1)

  return (
    <div sx={style.box}>
      <Button sx={style.button} variant="outlined" size="small" disabled={count <= 0} onClick={quitar}><HorizontalRuleIcon fontSize="30" /></Button>
      <Typography sx={style.span} component="span">{count}</Typography>
      <Button sx={style.button} variant="outlined" size="small" onClick={agregar}><AddIcon fontSize="30" /></Button>
    </div>
  );
}

export default ItemCount;