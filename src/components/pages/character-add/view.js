import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  Alert,
  Image,
} from 'react-native';
import styles from './styles';

class CharacterAdd extends Component {
  constructor() {
    super();
    this.state = {
      NumberHolder: 1,
    };
  }
  GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log({ NumeroAleatorio: RandomNumber });
    this.setState({
      NumberHolder: RandomNumber,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={styles.imagenFondo}
            source={{
              uri: `https://rickandmortyapi.com/api/character/avatar/19.jpeg`,
            }}
          />
          <Text style={styles.title}>Añadir Personaje Rick & Morty</Text>
          <TextInput
            style={styles.input}
            placeholder="Añadir nombre de personaje"
            placeholderTextColor={'grey'}
          />
          <TextInput
            style={styles.input}
            placeholder="Añadir lugar de procedencia"
            placeholderTextColor={'grey'}
          />
          <TextInput
            style={styles.input}
            placeholder="Añadir episodio!"
            placeholderTextColor={'grey'}
          />
          <Button
            style={styles.input}
            title="Añadir Personaje"
            onPress={() => Alert.alert('Personaje Añadido!')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default CharacterAdd;
