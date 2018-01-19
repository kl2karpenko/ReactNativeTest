import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class LoginForm extends Component {
  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
        />
      </View>
    );
  }
}