import axios from 'axios';
import sessionManager from '../utils/session-manager';

const host = 'http://localhost:9999/api';

const userService = {
    register: (username, password) => {
        axios.post(`${host}/user/register`, {
            username,
            password
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            });
    },

    login: (username, password) => {
        return axios.post(`${host}/user/login`,{
            username,
            password
        })
    },
    logout: () => {
        return axios.post(`${host}/user/logout`)
            .then((res) => {
                sessionManager.clear();
                console.log('user logged out')
            })
    }
}

export default userService;