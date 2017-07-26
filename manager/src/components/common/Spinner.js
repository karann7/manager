// Karan Singh
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

function Spinner({ size }) {
  let { container } = styles;
  return (
    <View style={container}>
      <ActivityIndicator color={'lightseagreen'} size={ size || 'large' } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export { Spinner } ;
