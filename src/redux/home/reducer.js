import * as types from './types';

const initialState = {
  loading: false,
  characters: [],
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.CHARACTER_UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.CHARACTER_UPDATE_LIST:
      return {
        ...state,
        characters: action.payload,
      };
    case types.CHARACTER_UPDATE_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
