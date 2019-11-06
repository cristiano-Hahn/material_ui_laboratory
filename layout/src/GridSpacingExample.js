import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function GridSpacingExample() {
  return (
    <Grid
      container
      spacing={5}
      justify="space-around"
    >
      <Grid item>
        <Button
          variant="contained"
          color="primary"
        >
          Item 1 do grid
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
        >
          Item 2 do grid
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
        >
          Item 3 do grid
        </Button>
      </Grid>
    </Grid>
  );
}

export default GridSpacingExample;
