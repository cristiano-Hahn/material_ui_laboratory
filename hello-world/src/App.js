import React from 'react';
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      {/** O CssBaseLine serve principalmente para unificar todos os navegadores e deixar tudo padronizado. */}
      <CssBaseline/>
      <Button
        variant="contained"
        color='primary'
      >
        Hello World!
      </Button>
     
    </div>
  );
}

export default App;
