import axios from 'axios';

const instance = axios.create({
    baseURL: 'baseURL'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;