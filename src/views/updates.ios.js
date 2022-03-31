import { Text, View } from 'react-native'
import React, { Component } from 'react'
import * as Application from 'expo-application';

export class Updates extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Updates</Text>
        <Text>Current Version: {Application.nativeApplicationVersion}</Text>
      </View>
    )
  }
}

export default Updates