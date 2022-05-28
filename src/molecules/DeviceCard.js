import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { FolderOpen, Input } from '@mui/icons-material';

const DeviceCard = ({ device, controller }) => (
  <Card variant='outlined'>
    <CardHeader
      title='DeviceName'
      avatar={
        <Avatar>
          <FolderOpen />
        </Avatar>
      }
      action={
        <IconButton
          onClick={() => console.log('click')}
        >
          <Input />
        </IconButton>
      }
    />
    <CardContent>
      <Typography>
        {device.name} | {device.key} | {device.description} <br />
        {controller && Object.values(controller.stamps)} | {controller && controller.level}
      </Typography>
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
