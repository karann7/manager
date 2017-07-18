import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';

const Header = ({ children })=> {
    const { viewStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
      </View>
    );
}
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginBottom: 10
  },
  textStyle: {
    fontSize: 20
  }
};


export { Header };

// props.children are destructured this allows stuff in between tags to be used

