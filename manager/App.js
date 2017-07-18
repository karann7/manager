import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import config from './config';
import LoginForm from './src/containers/LoginForm';

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp(config);
  }
  render() {
    let { container } = styles;
    return (
      <Provider store={createStore(reducers)}>
        <View style={container}>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
