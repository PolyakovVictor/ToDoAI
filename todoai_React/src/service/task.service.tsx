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
                return error.response
            }
            console.error('Error when sending a request:', error.response.status);
            throw error;
        }
    },

    async createNewTask(accessToken, task: Task) {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + 'goals/items/', task, {
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

    async addCompleteTask(accessToken, id: number) {
        try {
            const response = await axios.put(
            import.meta.env.VITE_API_URL + 'goals/items/' + id + '/',
            {},
            {
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
            }
            );
        
            return response;

        } catch (error) {
            if (error.response && error.response.status === 401) {
                AuthService.refreshToken();
            }
            console.error('Error when sending a request:', error.response ? error.response.status : error.message);
            throw error;
        }
    },

    async deleteTask(accessToken, id: number) {
        try {
            const response = await axios.delete(
            import.meta.env.VITE_API_URL + 'goals/items/' + id + '/',
            {
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
            }
            );
        
            return response;

        } catch (error) {
            if (error.response && error.response.status === 401) {
                AuthService.refreshToken();
            }
            console.error('Error when sending a request:', error.response ? error.response.status : error.message);
            throw error;
        }
    },
}