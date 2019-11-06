import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BoxExample from './BoxExample';
import ContainerExample from './ContainerExample';
import GridSpacingExample from './GridSpacingExample';
import { Typography, Box } from '@material-ui/core';
import GridResponsiveExample from './GridResponsiveExample';

function App() {
  return (
    <div className="App">
      {/** O CssBaseLine serve principalmente para unificar todos os navegadores e deixar tudo padronizado. */}
      <CssBaseline/>

      <Box 
        margin={1}
        padding={1}
        border="1px solid black"
      >
        <Typography variant="h6" > Exemplo de Box</Typography>
        <BoxExample/>
      </Box>

      <Box 
        margin={1}
        padding={1}
        border="1px solid black"
      >
        <Typography variant="h6" > Exemplo de Container</Typography>
        <ContainerExample/>
      </Box>

      <Box 
        margin={1}
        padding={1}
        border="1px solid black"
      >
        <Typography variant="h6" > Exemplo de Grid com espaçamento</Typography>
        <GridSpacingExample/>
      </Box>

      <Box 
        margin={1}
        padding={1}
        border="1px solid black"
      >
        <Typography variant="h6" > Exemplo de Grid responsivo</Typography>
        <GridResponsiveExample/>
      </Box>
      

      

      
     
    </div>
  );
}

export default App;
