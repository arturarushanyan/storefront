import axios from 'axios';
import { Product } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL environment variable is not defined');
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};
