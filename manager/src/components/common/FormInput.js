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
    text,
    placeholder,
    onChangeText,
    label,
    secureTextEntry
  } = props;
  let { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={ containerStyle }>
      <Text style={ labelStyle }>{ label }</Text>
      <TextInput
        style={ inputStyle }
        value={ text }
        placeholder={ placeholder }
        onChangeText={ onChangeText }
        autoCorrect={ autoCorrect }
        autoFocus={ autoFocus }
        keyboardType={ keyboardType }
        returnKeyLabel={ returnKeyLabel }
        secureTextEntry={ secureTextEntry }
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
