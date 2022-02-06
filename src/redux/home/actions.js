import * as types from './types';
import * as api from '../../components/api';

export const setLoading = (loading = false) => {
  const action = {
    type: types.CHARACTER_UPDATE_LOADING,
    payload: loading,
  };
  return action;
};

export const setCharacter = (characters = []) => {
  const action = {
    type: types.CHARACTER_UPDATE_LIST,
    payload: characters,
  };
  return action;
};

export const setItem = item => {
  const action = {
    type: types.CHARACTER_UPDATE_ITEM,
    payload: item,
  };
  return action;
};

export const getCharacters = () => {
  const asyncFunctAction = async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const getCharactersRes = await api.getCharacters();
      const characterList = getCharactersRes?.results || [];
      dispatch(setCharacter(characterList));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return asyncFunctAction;
};
