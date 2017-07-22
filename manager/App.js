import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import config from './config';
import LoginForm from './src/containers/LoginForm';
import { Header } from './src/components/common';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    let { container } = styles;
    return (
      <Provider store={store}>
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
