import React, { Component } from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
      <Scene key="login" component={LoginForm} title="Login" />
      <Scene
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
        key="employeeList"
        component={EmployeeList}
        title="Employees" 
        type={ActionConst.REPLACE}
      />
      <Scene initial key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;