import axios from 'axios';
import { endpoints } from '../config/endPoints';

interface LoginResponse {
  createdAt: string;
  name: string;
  lastName: string;
  emailPassword: string;
  image: string;
}

const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.get<LoginResponse>(endpoints.login(email, password));
  return response.data;
};

export {loginUser}