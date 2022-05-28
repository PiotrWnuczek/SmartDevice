import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Box, Grid, Typography } from '@mui/material';
import MainLayout from 'pages/MainLayout';
import DeviceCard from 'molecules/DeviceCard';

const BoardView = ({ devices }) => (
  <MainLayout navbar={
    <Box sx={{ display: 'flex', m: 2 }}>
      <Typography variant='h6'>
        NavBar
      </Typography>
    </Box>
  }>
    <Grid sx={{ p: 2 }} container spacing={2}>
      {devices && devices.map(device =>
        <Grid item xs={12} key={device.name}>
          <DeviceCard device={device} />
        </Grid>
      )}
    </Grid>
  </MainLayout>
);

const mapStateToProps = (state) => ({
  devices: state.firestore.ordered.devices,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['devices']),
)(BoardView);
