import React from 'react'
import { Button } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

function CartWidget() {
  return (
    <div>
        <Button color="inherit" size='large' variant="outlined" startIcon={<AddShoppingCart/>}>5</Button>
    </div>
  )
}

export default CartWidget