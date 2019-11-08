import React from 'react';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

function ButtonExample() {
  return (
    /** Um Box pode ser utilizado para substituir qualquer tag html estilizada, ele possui todas as propriedades CSSs*/
    <Box
      margin={2}
      padding={2}
      border="1px solid black"
      component="div"
    >
      <Button
        variant="contained"
        color="primary"
      >
        Estou dentro de um box
      </Button>
    </Box>
  );
}

export default ButtonExample;
