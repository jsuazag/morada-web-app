const TOKEN = 'token_morada';

export const setToken = (value) => {
    localStorage.setItem(TOKEN, value);
}

export const getToken = () => {
    localStorage.getItem(TOKEN);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}