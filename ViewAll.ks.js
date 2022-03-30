import { Button, View, Alert, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import * as Updates from 'expo-updates';
import LottieView from 'lottie-react-native';

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
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };
  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
          }}
          source={require('./assets/lf20_gehghjgo.json')}
        />
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