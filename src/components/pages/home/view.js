// Listado de personajes de Rick & Morty

import React, { Component } from 'react';
import { FlatList, SafeAreaView, RefreshControl } from 'react-native';
import containerScreen from './styles';
import { getCharacters } from '../../api';
import CharacterCard from '../../molecules/characters-card';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  // Actualización
  componentDidMount() {
    this.props.getCharacters();
  }

  onCharacterPress = character => {
    this.props.setItem(character);
    console.log({ selectItemCharacter: character });
    Actions.push('Character', { title: character?.name || ':(' });
  };

  renderItem = item => {
    return (
      <CharacterCard
        character={item}
        onCharacterPress={this.onCharacterPress}
      />
    );
  };

  render() {
    const { characters, loading } = this.props;
    console.log({ HomeView: this.props });
    return (
      <SafeAreaView style={containerScreen.container}>
        <FlatList
          data={characters}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => `character-${item?.id}`} // Cada celda tenga su propia key
          numColumns={2}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={this.getCharacters}
              colors={'white'}
              tintColor={'white'}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Home;
