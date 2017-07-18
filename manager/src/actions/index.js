import { EMAIL_CHANGED } from './types';
const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};


export { emailChanged };