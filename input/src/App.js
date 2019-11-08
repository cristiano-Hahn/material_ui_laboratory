import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Box } from '@material-ui/core';
import ButtonExample from './ButtonExample';

function App() {

  const boxDefaultProps = {
    margin:1,
    padding:1,
    border:"1px solid black",
    minHeight:40
  }

  return (
    <div className="App">
      {/** O CssBaseLine serve principalmente para unificar todos os navegadores e deixar tudo padronizado. */}
      <CssBaseline/>

      <Box {...boxDefaultProps} >
        <Typography variant="h6" > Exemplo de Botão</Typography>
        <ButtonExample/>
      </Box>

    </div>
  );
}

export default App;
