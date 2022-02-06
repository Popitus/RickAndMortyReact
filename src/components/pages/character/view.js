import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailCard from '../../molecules/detail-card';
import containerScreen from './styles';
import styles from './styles';

class Character extends Component {
  componentDidMount() {
    this.props.getEpisodes();
  }

  renderItem = item => {
    return <DetailCard detail={item} />;
  };

  render() {
    const { episodes, item } = this.props;

    return (
      <SafeAreaView style={containerScreen.container}>
        <Image
          style={{
            width: '100%',
            height: 250,
          }}
          source={{ uri: `${item.image}` }}
        />
        <Text style={{ color: 'white', marginTop: 20 }}>Episodios:</Text>
        <FlatList data={episodes} renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}

export default Character;
