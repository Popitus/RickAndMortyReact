import axios from 'axios';
import { API_URL } from '../../config/api';

const aInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const getCharacters = async () => {
  const url = '/api/character';
  const { data: resData } = await aInstance.get(url); //-> filtramos el data de la llamada que recogemos.
  return resData;
};

export const getEpisodes = async episodeIds => {
  const url = `api/episode/${episodeIds}`;
  const { data: resData } = await aInstance.get(url);
  return resData;
};
