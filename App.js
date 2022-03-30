import { Text, View, Alert, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import * as Updates from 'expo-updates';

export class App extends Component {
  async checkForUpdates() {
      Alert.alert("Checking for updates")
        try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert("New Update Available")
        // await Updates.fetchUpdateAsync();
        // // ... notify user of update ...
        // Updates.reloadAsync();
      }
      else{
        Alert.alert("Update Not Available")
      }
    } catch (e) {
        Alert.alert(e.message)
      }    
  }
  componentDidMount() {
    this.checkForUpdates();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    )
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

export default App