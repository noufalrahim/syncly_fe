import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getProjects = async (id: string) => {
  console.log("id", id);
  const response = await axios.get(`${BASE_URL}/users/${id}`);
  const projectsArray = [];
  if(response.status === 200) {
    console.log("response.data.data.projects", response.data.data.projects);
    for (const pr in response.data.data.projects) {
      const projectResp = await axios.get(`${BASE_URL}/projects/676a83c53dd9cbdf9963934a`);
      if(projectResp.status === 200) {
        projectsArray.push(projectResp.data.data);
      }
    }
  }

  console.log("projectsArray", projectsArray);
  return projectsArray;
};
