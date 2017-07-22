// Karan Singh
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function FormInput(props) {

  const { 
    autoCorrect,
    autoFocus,
    keyboardType,
    returnKeyLabel,
    returnKeyType,
    placeholder,
    onChangeText,
    label,
    secureTextEntry
  } = props;
  let { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={ containerStyle }>
      <Text style={ labelStyle }>{ label || 'label' }</Text>
      <TextInput
        style={ inputStyle }
        placeholder={ placeholder || 'user@user.com'}
        onChangeText={ onChangeText }
        autoCorrect={ autoCorrect || false}
        autoFocus={ autoFocus || false}
        keyboardType={ keyboardType || 'default'}
        returnKeyLabel={ returnKeyLabel || 'next'}
        secureTextEntry={ secureTextEntry || false}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { FormInput } ;
