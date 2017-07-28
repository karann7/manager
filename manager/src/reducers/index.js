import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeForm from './EmployeeForm';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeForm
});