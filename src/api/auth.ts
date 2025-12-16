import { api } from './axios';

export async function loginUser(username: string, password: string): Promise<any> {
    try {
      return await api.post("/login", { username, password });
    } catch (e) {
      return {
        status: 401,
        data: null,
        error: "Unauthenticated"
      };
    }
  }

  export async function verifyUser(): Promise<any> {
    try {
      return await api.get("/profile");
    } catch (e) {
      return {
        status: 401,
        data: null,
      };
    }
  }