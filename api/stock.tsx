import axios from 'axios';
import { endpoints } from '../config/endPoints';

interface StockResponse {
  createdAt: Date;
  name: string;
  image: string;
  amount: number;
  price: number;
  id: string;
}

export const getStocks = async () : Promise<StockResponse[]> => {
  const response = await axios.get<StockResponse[]>(endpoints.stock);
  return response.data;
};

