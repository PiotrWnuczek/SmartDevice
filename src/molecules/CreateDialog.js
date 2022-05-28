import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createDevice } from 'store/devicesActions';
import { Formik } from 'formik';
import { Box, Dialog, Button, Avatar } from '@mui/material';
import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { DialogTitle, DialogActions, DialogContent } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import TextInput from 'atoms/TextInput';

const CreateDialog = ({ createDevice }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <ListItem
        sx={{ textTransform: 'uppercase' }}
        onClick={() => setOpen(true)}
        button
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <AddCircle />
          </Avatar>
        </ListItemAvatar>
        <ListItemText secondary='Add' />
      </ListItem>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Device</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              key: '',
              name: '',
              description: '',
            }}
            onSubmit={(values) => {
              createDevice(values);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit} id='create'>
                <TextInput
                  onChange={handleChange}
                  value={values.key}
                  label='Key'
                  name='key'
                  type='text'
                  autoFocus
                  required
                />
                <TextInput
                  onChange={handleChange}
                  value={values.name}
                  label='Name'
                  name='name'
                  type='text'
                  required
                />
                <TextInput
                  onChange={handleChange}
                  value={values.description}
                  label='Description'
                  name='description'
                  type='text'
                />
              </form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button
            variant='outlined'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant='outlined'
            type='submit'
            form='create'
          >
            Add Device
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
};

const mapDispatchToProps = (dispatch) => ({
  createDevice: (data) => dispatch(createDevice(data)),
});

export default connect(null, mapDispatchToProps)
  (CreateDialog);
