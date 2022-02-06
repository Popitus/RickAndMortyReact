import React, { Component } from 'react';
import { TouchableOpacity, Image, Touchable } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class CharacterCard extends Component {
  render() {
    const { character, onCharacterPress } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          onCharacterPress(character);
        }}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{ uri: `${character?.image}` }}
        />
      </TouchableOpacity>
    );
  }
}

CharacterCard.defaultProps = {
  character: null,
  onCharacterPress: () => {},
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  onCharacterPress: PropTypes.func,
};

export default CharacterCard;
