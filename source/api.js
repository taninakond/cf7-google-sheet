import axios from 'axios';

const nonce = window.bdpcgs.nonce || '';
const apiUrl = window.bdpcgs.rest_url || '/wp-json/bdpcgs/v1';
const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': nonce,
    },
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - please log in again.');
        } else {
            console.error('An error occurred:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;

export const getSettings = async () => {
    try {
        const response = await api.get('/settings');
        return response.data;
    } catch (error) {
        console.error('Error fetching settings:', error);
        throw error;
    }
}

export const updateSettings = async (settings) => {
    try {
        const response = await api.post('/settings', settings);
        return response.data;
    } catch (error) {
        console.error('Error updating settings:', error);
        throw error;
    }
}
