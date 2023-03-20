import { Button, FormGroup, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { grey, yellow } from "@mui/material/colors";

function Contact() {
  const style = {
    grid: {
      bgcolor: grey[200],
    },
    textField: {
      mb: 5,
    },
  };

  return (
    <Grid container spacing={2} sx={style.grid} justifyContent="center">
      <Grid item xs={12} mt={"5%"} mb={"2%"}>
        <Typography variant="h4" textAlign="center" color={"black"}>
          Cómo podemos ayudarte?
        </Typography>
      </Grid>
      <Grid item xs={6} mb={"5%"}>
        <FormGroup>
          <TextField
            id="outlined-basic"
            label="Nombre y Apellido"
            variant="outlined"
            sx={style.textField}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={style.textField}
          />
          <TextField
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
            sx={style.textField}
          />
          <TextField
            id="outlined-multiline-static"
            label="Mensaje"
            multiline
            rows={4}
          />
        </FormGroup>
        <Button variant="contained" sx={{ bgcolor: yellow[700], mt: 3 }}>
          Enviar Informacion
        </Button>
      </Grid>
    </Grid>
  );
}

export default Contact;
