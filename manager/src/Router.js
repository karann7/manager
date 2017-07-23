import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './containers/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='login' component={LoginForm} title='Please Login'/>
    </Router>
  );
};

export default RouterComponent;