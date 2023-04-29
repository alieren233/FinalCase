import axios from 'axios';

const instance = axios.create({baseURL: 'https://swapi.dev/api/'});
instance.defaults.baseURL = 'https://swapi.dev/api/';

export const services = {
    getStarships: () => instance.get(`starships/`),
    getStarshipById: (id) => instance.get(`starships/${id}/`),
    searchStarships: (searchKey) => instance.get(`starships/?search=${searchKey}`)
};

export default services;