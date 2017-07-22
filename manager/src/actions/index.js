import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';
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
      .then(user=>console.log(user));

  }
}
export { emailChanged, passwordChanged };