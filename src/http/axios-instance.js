import axios from 'axios';

    axios.$http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
    });

export default axios;