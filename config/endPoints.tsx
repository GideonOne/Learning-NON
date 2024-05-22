const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const endpoints = {
    login: (email: string, password: string) => `${API_BASE_URL}/users/${email}&${password}`,
    updateUser: (email: string, password: string) => `${API_BASE_URL}/users/${email}&${password}`,
    stock: (page: number, limit: number) => `${API_BASE_URL}/stock?page=${page}&limit=${limit}`
};
