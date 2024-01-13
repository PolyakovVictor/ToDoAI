import axios from 'axios'

export const RegisterService: RegisterService = {
    async register(userData: User) {
        await axios.post(import.meta.env.VITE_API_URL + 'users/register/', userData)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.error('Ошибка при отправке запроса:', error);
            });
    }
}