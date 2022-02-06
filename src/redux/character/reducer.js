import * as types from './types';

const initialState = {
  loading: false,
  episodes: [],
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ITEM_UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.ITEM_UPDATE_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    case types.ITEM_UPDATE_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
