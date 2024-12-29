/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { AppBar } from '../AppBar';
import { ProjectsCard } from './components/ProjectsCard';
import { getProjects } from './api/getProjects';
import { LoadingSpinner } from '../LoadingSpinner';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await getProjects();
        if (resp.data) {
          setProjectsData(resp.data);
        }
      } catch (error) {
        console.log('Error fetching projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5">
      <AppBar title="Projects" description="View all projects here" />
      {loading ? (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <ProjectsCard key={index} project={project} />
            ))}

          </div>
          <div>
            {
              projectsData.length === 0 && (
                <div className="flex min-h-screen items-center justify-center">
                  <p>No projects available</p>
                </div>
              )
            }
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
