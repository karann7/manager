import React, { Component } from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Login" />
      <Scene key="employeeList" component={EmployeeList} title="Employees" type={ActionConst.REPLACE} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;