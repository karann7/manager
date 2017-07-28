import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, email, phone, shift}) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, email, shift });
  return {
    type: EMPLOYEE_CREATE,
    payload: { name, email, phone, shift}
  };
};