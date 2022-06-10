import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Typography, LinearProgress, Avatar } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import { FolderOpen } from '@mui/icons-material';
import DeviceChart from 'atoms/DeviceChart';

const DeviceCard = ({ device, controller }) => (
  <Card
    sx={{ borderRadius: 2 }}
    variant='outlined'
  >
    <CardHeader
      title={'Name: ' + device.name + ' | Key: ' + device.key}
      subheader={'Description: ' + device.description}
      avatar={<Avatar>
        <FolderOpen />
      </Avatar>}
    />
    <CardContent>
      <Typography>Activations Chart:</Typography>
      {controller && <DeviceChart
        stamps={Object.values(controller.stamps)}
      />}
      <Typography>Liquid Level:</Typography>
      {controller && <LinearProgress
        sx={{ mt: 2, height: 5, borderRadius: 5 }}
        variant='determinate'
        value={controller.level}
      />}
    </CardContent>
  </Card>
);

const mapStateToProps = (state, props) => ({
  controller: state.firebase.data[props.device.key],
});

export default compose(
  connect(mapStateToProps),
  firebaseConnect(props => [props.device.key]),
)(DeviceCard);
