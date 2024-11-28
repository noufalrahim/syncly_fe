import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getColumnHeaders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/kanbanHeaders`);
    const resp = response.data;
    const columnData = resp.map((column: any) => {
      return {
        id: column.id.toString(),
        title: column.title,
        key: column.key,
      };
    });
    return columnData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
