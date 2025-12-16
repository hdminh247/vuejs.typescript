import { defineStore } from 'pinia';
import { setAuthHeader, clearAuthHeader } from '../api/axios';
import { verifyUser, loginUser } from '../api/auth';

export const useAuthStore = defineStore('auth', {
    state: (): Record<string, any> => ({
        status: 0,
        user: null
    }),
    actions: {
        async login(username: string, password: string) {
            const response = await loginUser(username, password)
            if(response.status === 200){
                this.status = 2;
                this.user = response.data.user;
                localStorage.setItem("token", response.data.token)
                setAuthHeader(response.data.token);
                return;
            }

            return response.error
        },

        async getUserProfile() {
            const response = await verifyUser();
            if(response.status === 200){
                this.user = response.data
                this.status = 2;
                return;
            }

            localStorage.removeItem('token');
            clearAuthHeader();
            this.status = 0;

            return;
        },

        async checkAuth(){
            const token = localStorage.getItem('token');
            if(token){
                setAuthHeader(token);
                return this.getUserProfile()
            }

            return null;
        }
    }
});