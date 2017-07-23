// Karan Singh
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EmployeeCreate extends Component {
  render() {
    let { container } = styles;
    return (
      <View style={ container }>
        <Text>EmployeeCreate</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50'
  },
});

export default EmployeeCreate ;
