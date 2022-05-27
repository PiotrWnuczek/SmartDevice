import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { firebaseConnect } from 'react-redux-firebase';
import { Box, Grid, Typography } from '@mui/material';
import MainLayout from 'pages/MainLayout';
import DeviceCard from 'molecules/DeviceCard';

const BoardView = ({ devices, device }) => (
  <MainLayout navbar={
    <Box sx={{ display: 'flex', m: 2 }}>
      <Typography variant='h6'>
        NavBar
      </Typography>
    </Box>
  }>
    <Grid sx={{ p: 2 }} container spacing={2}>
      {devices && devices.map(item =>
        <Grid item xs={12} key={item.name}>
          <DeviceCard
            device={item}
            stamps={device && device.stamps}
            level={device && device.level}
          />
        </Grid>
      )}
    </Grid>
  </MainLayout>
);

const mapStateToProps = (state) => ({
  devices: state.firestore.ordered.devices,
  device: state.firebase.data.device,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['devices']),
  firebaseConnect(['device']),
)(BoardView);
