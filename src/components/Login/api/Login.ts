import { BASE_URL } from '@/constants';
import axios from 'axios';

export const postLogin = async (data: any) => {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response;
};
