import axios from 'axios'
import { AuthService } from './auth.service';

export const TaskService: TaskService = {

    async getAllTasks(accessToken) {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + 'goals/items/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }})
            return response
        } catch (error) {
            if (error.response.status == 401) {
                AuthService.refreshToken()
            }
            console.error('Error when sending a request:', error.response.status);
            throw error;
        }
    },
}