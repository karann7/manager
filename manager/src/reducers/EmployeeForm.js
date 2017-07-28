import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', email: '', shift: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]:action.payload.value };
    default: 
      return state;
  }
};