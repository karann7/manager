import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ onPress, children })=> {
  let { textStyle, touchArea } = styles;
  
  return (
    <TouchableOpacity onPress={onPress} style={touchArea}>
    <Text style={textStyle}>
      {children}
    </Text>
    </TouchableOpacity>
  );
};
// Prop types are a great way to verify what gets passed down the props
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}
const styles = {
  touchArea: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5

  },
  textStyle: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };