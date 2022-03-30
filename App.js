import { Text, View, Alert, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import * as Updates from 'expo-updates';

export class App extends Component {
  
  async checkForUpdates() {
        try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert('Update Available', `Version ${update.manifest.version} is available to download. Download it to expierience`, [
          {
            text: 'Download',
            onPress: async () => {
              let updates = await Updates.fetchUpdateAsync();
              if(updates.isNew) {
                Alert.alert("Update Downloaded","Relaunch App",[
                  {
                    text: 'Relaunch',
                    onPress: () => Updates.reloadAsync(),
                  },
                  {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                  },
                ])
              }
            },
          },
          { text: 'Cancel', onPress: () => console.log('OK Pressed'),style: 'cancel', },
        ]);
      }
      else{
        
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
        <Text>Update Checker</Text>
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