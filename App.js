import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';
import Ziggeo from 'ReactNativeSDK';

export default class App extends React.Component {
    async record() {
        //TODO token
        var appToken = "60c0d757c31f5002f75f5e2b7fe96e83";
        Ziggeo.setAppToken(appToken);
        Ziggeo.setCameraSwitchEnabled(true);
        Ziggeo.setCoverSelectorEnabled(true);
        Ziggeo.setCamera(Ziggeo.REAR_CAMERA);
        const recorderEmitter = new NativeEventEmitter(Ziggeo);
        const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log("uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
        try
        {
            //record and upload the video and return its token
            var token = await Ziggeo.record();
            console.log("Token:"+token);
            if (token !== 'null'){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
            //recorder error or recording was cancelled by user
            alert(e);
        }
    }
    
    
    render() {
        return (
          <View style={styles.container}>
            <Button
            onPress={this.record}
            title="Record"
            accessibilityLabel="Record"
            />
          </View>
    );
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