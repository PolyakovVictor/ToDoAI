import axios from 'axios'


export const AuthService: AuthService = {

    async register(userData: userRegisterData) {
        await axios.post(import.meta.env.VITE_API_URL + 'users/register/', userData)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error when sending a request:', error);
            });
    },

    async login(userData: userLoginData) {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + 'users/api/token/', userData);
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            return response;
        } catch (error) {
            console.error('Error when sending a request:', error);
            throw error;
        }
    },

    async refreshToken() {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + 'users/api/token/refresh/', {
                    'refresh': localStorage.getItem('refreshToken'),
            });
            localStorage.setItem("accessToken", response.data.access);
        } catch (error) {
            console.error('Error when sending a request:', error);
            throw error;
        }
    },
}