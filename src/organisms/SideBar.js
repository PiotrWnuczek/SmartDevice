import React from 'react';
import { connect } from 'react-redux';
import { signoutUser } from 'store/usersActions';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, Avatar, List, ListItem, Typography } from '@mui/material';
import { ListItemText, ListItemAvatar } from '@mui/material';
import { AddCircle, Dashboard, Logout } from '@mui/icons-material';

const SideBar = ({ signoutUser, auth, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { text: 'Board', icon: <Dashboard />, path: '/board' },
    { text: 'New', icon: <AddCircle />, path: '/new' }
  ];

  return (
    <Drawer {...props}>
      <List>
        <ListItem sx={{ mb: 12 }}>
          <Typography variant='h5'>
            INTERNET OF THINGS
          </Typography>
        </ListItem>
        {menu.map(item =>
          <ListItem
            sx={{ textTransform: 'uppercase' }}
            key={item.text}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            button
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {item.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={item.text} />
          </ListItem>
        )}
      </List>
      <List>
        <ListItem
          sx={{ textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          onClick={signoutUser}
          button
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <Logout />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary='Sign Out' />
        </ListItem>
      </List>
    </Drawer>
  )
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

const mapDispatchToPorps = (dispatch) => ({
  signoutUser: () => dispatch(signoutUser()),
});

export default connect(mapStateToProps, mapDispatchToPorps)
  (SideBar);
