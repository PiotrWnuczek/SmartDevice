import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MainLayout from 'pages/MainLayout';
import DeviceCard from 'molecules/DeviceCard';

const BoardView = () => (
  <MainLayout navbar={
    <Box sx={{ display: 'flex', m: 2 }}>
      <Typography variant='h6'>
        NavBar
      </Typography>
    </Box>
  }>
    <Grid sx={{ p: 2 }} container spacing={2}>
      <Grid item xs={12}>
        <DeviceCard />
      </Grid>
      <Grid item xs={12}>
        <DeviceCard />
      </Grid>
    </Grid>
  </MainLayout>
);

export default BoardView;
