import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getProjects = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/users?id=${id}`);
  console.log("REsssp: ", response);
  if (response.status === 200) {
    const resp = response.data.data;
    const projectsData = [];
    const projects = resp[0].projects;
    console.log("PRorrrje :", projects);
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const response = await axios.get(`${BASE_URL}/projects?id=${project}`);
      if (response.status === 200) {
        console.log("REsp: ", response);
        const resp = response.data.data;
        projectsData.push(resp[0]);
      }
    }
    return projectsData;
  }
  return [];
};
