import Cookie from 'universal-cookie';
const cookie = new Cookie();

const sessionManager = {
    save: (token, username) => {
        cookie.set('x-auth-token', token);
        cookie.set('username', username);
        // sessionStorage.setItem('x-auth-token', token);
        // sessionStorage.setItem('username', username);


    },
    clear: () => {
        cookie.remove('x-auth-token')
        cookie.remove('username',)

    },
    isLogged: () => {
        return sessionStorage.getItem('x-auth-token' !== null)
    },
    getUsername: () => {
        return sessionStorage.getItem('username');
    }
}

export default sessionManager;