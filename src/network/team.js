import axios from 'axios';

const baseUrl = 'http://localhost:3333/teams';

export const list = async () => {
  return axios.get(baseUrl);
};

export const create = async (team) => {
  return axios.post(baseUrl, team);
}