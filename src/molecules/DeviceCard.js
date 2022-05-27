import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { FolderOpen, Input } from '@mui/icons-material';

const DeviceCard = ({ device, stamps, level }) => (
  <Card variant='outlined'>
    {console.log(Object.values(stamps))}
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
        {device.name} | {device.description} <br />
        {stamps && Object.values(stamps)} | {level}
      </Typography>
    </CardContent>
  </Card>
);

export default DeviceCard;
