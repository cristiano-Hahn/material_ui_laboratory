import React from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Hidden } from '@material-ui/core';

function HiddenExample() {
  return (
    <Grid
      container
      spacing={5}
      justify="space-around"
    >
      
      <Hidden smDown>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
          >
            Item do grid que só aparece em telas grandes
          </Button>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default HiddenExample;
