import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  CLEAR_FORM
} from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', email: '', shift: 'Monday'};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]:action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case CLEAR_FORM:
      console.log('The form should be cleared');
      return INITIAL_STATE;
    default: 
      return state;
  }
};