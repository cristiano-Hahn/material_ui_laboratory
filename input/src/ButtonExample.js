import React from 'react';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { Grid, MenuItem, Select, InputLabel, ButtonGroup, IconButton, Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function ButtonExample() {

  const [color, setColor] = React.useState("primary");
  const [variant, setVariant] = React.useState("text");
  const [size, setSize] = React.useState("medium");

  return (
    /** Um Box pode ser utilizado para substituir qualquer tag html estilizada, ele possui todas as propriedades CSSs*/
    <Box
      padding={2}
    >
      <Grid container >
        <Grid item xs={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <InputLabel  id="label-cor">Cor do componente (color)</InputLabel>
              <Select
                labelId="label-cor"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <MenuItem value={"primary"}>primary</MenuItem>
                <MenuItem value={"secondary"}>secondary</MenuItem>
                <MenuItem value={"default"}>default</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabel  id="label-variant">Tipo do componente (variant)</InputLabel>
              <Select
                labelId="label-variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                <MenuItem value={"text"}>text</MenuItem>
                <MenuItem value={"outlined"}>outlined</MenuItem>
                <MenuItem value={"contained"}>contained</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabel  id="label-variant">Tamanho (size)</InputLabel>
              <Select
                labelId="label-variant"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <MenuItem value={"small"}>small</MenuItem>
                <MenuItem value={"medium"}>medium</MenuItem>
                <MenuItem value={"large"}>large</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={6} direction="column" spacing={4}>
          <Grid item>
            <Button variant={variant} color={color} size={size}>
              Botão normal
            </Button>
          </Grid>
          <Grid item>
            <ButtonGroup size="small" >
                <Button variant={variant} color={color} size={size}>Botão 1 agrupado</Button>
                <Button variant={variant} color={color} size={size}>Botão 2 agrupado</Button>
                <Button variant={variant} color={color} size={size}>Botão 3 agrupado</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <IconButton variant={variant} color={color} size={size}>
              <DeleteIcon/> 
            </IconButton>
          </Grid>
          <Grid item>
            <Fab variant={variant} color={color} size={size}>
              <DeleteIcon size={size}/> 
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ButtonExample;
