import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getTasks = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/projects/${id}`);
    return response
};
