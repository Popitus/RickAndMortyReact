// SplashScreen Inicial
import React, { Component } from 'react';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from '../../../config/redux';
import SplashView from '../../pages/splashview';
import Home from '../../pages/home';
import Character from '../../pages/character';
import CharacterAdd from '../../pages/character-add';

// Clase SplashView
class App extends Component {
  // Seteamos el timeout para que navegue a la siguiente pantalla -> Home
  componentDidMount() {
    setTimeout(() => {
      Actions.push('Home');
    }, 3000);
  }
  // Render de la class
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack
            key="root"
            tintColor={'black'}
            navigationBarStyle={{ backgroundColor: 'red' }}>
            <Scene key="SplashView" component={SplashView} hideNavBar="true" />
            <Scene
              key="Home"
              component={Home}
              title={'Rick & Morty'}
              rightTitle="Add"
              onRight={() => Actions.push('CharacterAdd')}
            />
            <Scene
              key="Character"
              component={Character}
              name={'Detalle'}
              back
            />
            <Scene key="CharacterAdd" component={CharacterAdd} back />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
