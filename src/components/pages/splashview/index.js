// SplashScreen Inicial
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Logo from '../../../assets/logo.png';
import styleSplashScreen from './styles';

// Clase SplashView
class SplashView extends Component {
  render() {
    return (
      <View style={styleSplashScreen.BG}>
        <View style={styleSplashScreen.principalView}>
          <Image source={Logo} style={styleSplashScreen.logo} />
          <Text style={styleSplashScreen.text}>Rick & Morty Characters</Text>
        </View>
      </View>
    );
  }
}

export default SplashView;
