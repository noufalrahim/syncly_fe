/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { AppBar } from '../AppBar';
import { ProjectsCard } from './components/ProjectsCard';
import { getProjects } from './api/getProjects';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getProjects();
        if (resp.data) {
          console.log('Projects data', resp);
          setProjectsData(resp.data);
        }
      } catch (error) {
        console.log('Error fetching projects', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5">
      <AppBar title="Projects" description="View all projects here" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
