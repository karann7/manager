import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import firebase from 'firebase';

const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
}

const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch( error => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then( user => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
          });
      });
  }
}
export { emailChanged, passwordChanged, loginUser };