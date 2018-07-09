import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://adiletsblog.firebaseio.com/',
});

export default instance;
