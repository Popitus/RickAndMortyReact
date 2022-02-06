import * as types from './types';
import * as api from '../../components/api';

export const setLoading = (loading = false) => {
  const action = {
    type: types.ITEM_UPDATE_LOADING,
    payload: loading,
  };
  return action;
};

export const setEpisodes = (episodes = []) => {
  const action = {
    type: types.ITEM_UPDATE_EPISODES,
    payload: episodes,
  };
  return action;
};

export const setItem = item => {
  const action = {
    type: types.ITEM_UPDATE_ITEM,
    payload: item,
  };
  return action;
};

export const getEpisodes = () => {
  const asyncFunctAction = async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const { item } = getState().character;
      const episodesIds = item.episode
        .map(episode =>
          episode.replace('https://rickandmortyapi.com/api/episode/', ''),
        )
        .join();
      const getEpisodesRes = await api.getEpisodes(episodesIds);
      if (getEpisodesRes.length != undefined) {
        const episodeList = getEpisodesRes;
        console.log({ EpisodeList_Array: episodeList });
        dispatch(setEpisodes(episodeList));
      } else {
        const episodeList = [getEpisodesRes];
        console.log({ EpisodeList_sinArray: episodeList });
        dispatch(setEpisodes(episodeList));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return asyncFunctAction;
};
