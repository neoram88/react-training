import React, { Component } from 'react';
import { AppRegistry, Image, View, StyleSheet } from 'react-native';
import HelloMsg from './components/HelloMsg';
import Blink from './components/Blink';
import Login from './pages/Login';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        {/* <Image source={pic} style={{width: 193, height: 110}}/>
        <HelloMsg name="Venkat"></HelloMsg>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' /> */}
        <AppHeader text="Math App"/>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
