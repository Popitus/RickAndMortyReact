import react from 'react';
import { StyleSheet } from 'react-native';

// Declaración de estilos personalizados
// Fondo

const styleSplashScreen = StyleSheet.create({
  BG: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  viewAnimated: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styleSplashScreen;
