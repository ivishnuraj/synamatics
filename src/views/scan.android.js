import React, { useState, useEffect } from 'react';
import { Alert, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`,"",[
      {
          text: 'Okay',
          onPress: () => setScanned(false),
      },
      {
          text: 'Close',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
      },
    ]);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner BarCodeSize={styles.reader} style={styles.reader} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
const styles = StyleSheet.create({
  reader:{
    width:Dimensions.get("screen").width,
    height:Dimensions.get("screen").height,
  },
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
}); 
