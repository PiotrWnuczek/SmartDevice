import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Card, CardHeader, CardContent, Avatar } from '@mui/material';
import { FolderOpen, Input } from '@mui/icons-material';

const DeviceCard = ({ device }) => (
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
        DeviceDescription
      </Typography>
    </CardContent>
  </Card>
);

export default DeviceCard;
