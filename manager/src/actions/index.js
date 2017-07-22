import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
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
    dispatch({  type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch( (error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

export { emailChanged, passwordChanged, loginUser };