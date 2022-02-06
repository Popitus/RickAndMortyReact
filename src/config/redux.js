import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReduce from '../redux/home/reducer';
import characterReduce from '../redux/character/reducer';

const reducer = combineReducers({
  character: homeReduce,
  episodeCharacter: characterReduce,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
