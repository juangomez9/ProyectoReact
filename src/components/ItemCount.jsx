import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { yellow } from "@mui/material/colors";
import { CartContext } from "./context/ShoppingCartContext";

function ItemCount({ stock, id, precio, nombre, img }) {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, precio, nombre, img }];
      }
    });
  };

  const style = {
    box: {
      display: "flex",
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
    },
  };

  return (
    <div sx={style.box}>
      <Button
        sx={style.button}
        variant="outlined"
        size="small"
        disabled={count <= 1}
        onClick={substractQty}
      >
        <HorizontalRuleIcon fontSize="30" />
      </Button>
      <Button
        sx={style.span}
        size="small"
        variant="contained"
        component="span"
        onClick={() => addToCart()}
      >
        Agregar al carrito: {count}
      </Button>
      {count >= stock ? (
        <Button
          sx={style.button}
          variant="outlined"
          size="small"
          onClick={addQty}
          disabled={true}
        >
          <AddIcon fontSize="30" />
        </Button>
      ) : (
        <Button
          sx={style.button}
          variant="outlined"
          size="small"
          onClick={addQty}
        >
          <AddIcon fontSize="30" />
        </Button>
      )}
    </div>
  );
}

export default ItemCount;
