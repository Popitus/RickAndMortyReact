import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class DetailCard extends Component {
  render() {
    const { detail } = this.props;
    return (
      <View
        style={{
          height: 90,
          backgroundColor: 'red',
          marginVertical: 15,
          marginHorizontal: 0,
        }}>
        <Text style={{ color: 'white' }}>{detail.item?.name || ':('} </Text>
        <Text style={{ color: 'white' }}>{detail.item?.episode || ':('} </Text>
        <Text style={{ color: 'white' }}>{detail.item?.created || ':('} </Text>
        <Text style={{ color: 'white' }}>{detail.item?.air_date || ':('} </Text>
      </View>
    );
  }
}

DetailCard.defaultProps = {
  detail: null,
};

DetailCard.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default DetailCard;
