import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import config from './config';
import LoginForm from './src/containers/LoginForm';
import { Header } from './src/components/common';

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp(config);
  }
  render() {
    let { container } = styles;
    return (
      <Provider store={createStore(reducers)}>
        <View style={container}>
          <Header>
            Manager
          </Header>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
