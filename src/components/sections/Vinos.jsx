import { Grid } from '@mui/icons-material'
import React from 'react'
import { StockProductos } from '../../data/Stock'

function Vinos() {
  return (
    <>
    <Grid container xs={12}>
        {StockProductos.map((prod)=>{     })}
    </Grid>
    </>
  )
}

export default Vinos