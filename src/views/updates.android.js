import {
    Text,
    View,
    Alert,
    TouchableNativeFeedback
} from 'react-native'
import React, {
    Component
} from 'react'
import * as Updates from 'expo-updates';
import * as Application from 'expo-application';

export class UpdatesView extends Component {
    async checkForUpdates() {
        try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                Alert.alert('Update Available', `Version ${update.manifest.version} is available to download. Download it to expierience`, [{
                        text: 'Download',
                        onPress: async () => {
                            let updates = await Updates.fetchUpdateAsync();
                            if (updates.isNew) {
                                Alert.alert("Update Downloaded", "Relaunch App", [{
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
                    {
                        text: 'Cancel',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                    },
                ]);
            } else {

            }
        } catch (e) {
            Alert.alert(e.message)
        }
    }
    render() {
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableNativeFeedback title="Go to Details" onPress={this.checkForUpdates}>
                    <Text> Updates </Text>
                </TouchableNativeFeedback>
                <Text>Current Version: {Application.nativeApplicationVersion}</Text>
            </View>
        )
    }
}

export default UpdatesView