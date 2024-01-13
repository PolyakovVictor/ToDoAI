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
        await axios.post(import.meta.env.VITE_API_URL + 'users/api/token/', userData)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error when sending a request:', error);
            });
    }
}