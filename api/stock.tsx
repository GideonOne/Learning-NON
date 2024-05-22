// stock.tsx
import axios from 'axios';
import { endpoints } from '../config/endPoints';
import { useQuery } from '@tanstack/react-query';

interface StockResponse {
  createdAt: Date;
  name: string;
  image: string;
  amount: number;
  price: number;
  id: string;
  cartAmount: number;
}

const getStocks = async (page: number, limit:number): Promise<StockResponse[]> => {
  const response = await axios.get<StockResponse[]>(endpoints.stock(page, limit));
  return response.data.map(stock => ({
    ...stock,
    cartAmount: 0
  }));;
};

const useStocks = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['stock', page, limit],
    queryFn: () => getStocks(page, limit),
  })
}

export { getStocks, useStocks};