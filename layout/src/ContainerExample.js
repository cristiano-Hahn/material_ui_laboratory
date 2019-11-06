import React from 'react';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core';

function ContainerExample() {
  return (
    <Container
      /** largura do container */
      maxWidth="sm"
    >
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
        >
          Estou dentro de um container small
        </Button>
      </Box>
    </Container>
  );
}

export default ContainerExample;
