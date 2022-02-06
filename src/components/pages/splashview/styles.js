import { StyleSheet } from 'react-native';

// Declaración de estilos personalizados

const styleSplashScreen = StyleSheet.create({
  BG: {
    // Fondo
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  principalView: {
    // View Principal
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // Logo
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    // Texto
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styleSplashScreen;
