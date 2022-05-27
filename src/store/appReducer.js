import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import usersReducer from 'store/usersReducer';

const appReducer = combineReducers({
  users: usersReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default appReducer;
