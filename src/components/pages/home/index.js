import { connect } from 'react-redux';
import Component from './view';
import * as homeActions from '../../../redux/home/actions';

const mapStateToProps = globalState => {
  return {
    loading: globalState.character.loading,
    characters: globalState.character.characters,
    item: globalState.character.item,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: () => dispatch(homeActions.getCharacters()),
    setItem: item => {
      const itemAction = homeActions.setItem(item);
      dispatch(itemAction);
    },
  };
};

const connectedContainer = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = connectedContainer(Component);

export default connectedComponent;
