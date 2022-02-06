import { connect } from 'react-redux';
import Component from './view';
import * as characterActions from '../../../redux/character/actions';

const mapStateToProps = state => {
  console.log({ state });
  return {
    episodes: state.episodeCharacter.episodes,
    item: state.character.item,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEpisodes: () => dispatch(characterActions.getEpisodes()),
    setItem: item => {
      const itemAction = characterActions.setItem(item);
      dispatch(itemAction);
    },
  };
};

const connectedContainer = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = connectedContainer(Component);

export default connectedComponent;
