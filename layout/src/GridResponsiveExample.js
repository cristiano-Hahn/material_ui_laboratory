import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core';

function GridResponsiveExample() {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12} lg={4}>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
          >
            Item 1 do grid
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
      <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
          >
            Item 2 do grid
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
          >
            Item 3 do grid
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default GridResponsiveExample;
