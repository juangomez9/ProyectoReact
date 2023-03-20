import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { CartContext } from "./context/ShoppingCartContext";

function CartWidget() {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <Button
        sx={{ color: "black" }}
        size="large"
        variant="outlined"
        startIcon={<AddShoppingCart />}
      >
        {quantity}
      </Button>
    </>
  );
}

export default CartWidget;
