import React, { Component } from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
      <Scene initial key="login" component={LoginForm} title="Login" />
      <Scene
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
        key="employeeList"
        component={EmployeeList}
        title="Employees" 
        type={ActionConst.REPLACE}
      />
      <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;