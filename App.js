/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native'
import Video from 'react-native-video';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      {console.log('test')}
      <Video source={require('./video/honda-video.mp4')}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}       
       fullscreen={true}
       repeat={true}
       resizeMode="stretch"
       fullscreenOrientation="landscape"                               // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={err => console.log(err)}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
       <Text>This is a test</Text>
       <Button title="do something" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex:1,
      height: 'auto'
  },
});
