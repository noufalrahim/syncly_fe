import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getUser = async (username: string | undefined) => {
  console.log(username);
  try {
    const response = await axios.get(`${BASE_URL}/users?username=${username}`);
    console.log(response);
    const resp = response.data;
    const user = resp[0];
    return user;
  } catch (error) {
    console.error(error);
    return [];
  }
};
