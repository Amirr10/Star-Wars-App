import React from 'react'
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainView = () => {
  return (
    <Grid container item xs={8}>
      <Grid container pt={5}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default MainView;