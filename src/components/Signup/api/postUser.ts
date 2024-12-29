/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from '@/constants';
import axios from 'axios';

export const postUser = async (data: any) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  const resp = response.data;
  console.log(resp);
};