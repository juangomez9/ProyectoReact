import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Typography } from "@mui/material";

const style = {
    span: {
        margin: 1,
    },
    button: {
      ml: 8,
    }
}

function ItemCount() {
  const [count, setCount] = useState(0);

  const agregar = () => setCount(count + 1)
  const quitar = () => setCount(count - 1)

  return (
    <div>
      <Button sx={style.button} disabled={count <= 0} onClick={quitar}><HorizontalRuleIcon/></Button>
      <Typography sx={style.span} component="span">{count}</Typography>
      <Button onClick={agregar}><AddIcon/></Button>
    </div>
  );
}

export default ItemCount;
