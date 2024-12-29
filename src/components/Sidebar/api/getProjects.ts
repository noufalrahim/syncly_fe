import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getProjects = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/users?id=${id}`);
  if (response.status === 200) {
    const resp = response.data.data;
    console.log("Response ",resp);
    const projectsData = [];
    const projects = resp[0].projects;
    console.log(projects);
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const response = await axios.get(`${BASE_URL}/projects?id=${project}`);
      console.log("REEES",response);
      if (response.status === 200) {
        const resp = response.data.data;
        console.log("Resp ",response.data);
        projectsData.push(resp[0]);
      }
    }
    console.log(projectsData);
    return projectsData;
  }
  return [];
};
