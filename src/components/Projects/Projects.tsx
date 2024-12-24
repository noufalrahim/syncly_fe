import React, { useState } from "react";
import { AppBar } from "../AppBar";
import { ProjectsCard } from "./components/ProjectsCard";
import { getProjects } from "./api/getProjects";

const ProjectsData = [
    {
        title: "Project 1",
        description: "Project 1 description",
    },
    {
        title: "Project 2",
        description: "Project 2 description",
    },
    {
        title: "Project 3",
        description: "Project 3 description",
    },
    {
        title: "Project 4",
        description: "Project 4 description",
    },
    {
        title: "Project 5",
        description: "Project 5 description",
    },
    {
        title: "Project 6",
        description: "Project 6 description",
    },
    {
        title: "Project 7",
        description: "Project 7 description",
    }
];

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getProjects();
                if(resp.data){
                    console.log("Projects data", resp);
                    setProjectsData(resp.data);
                }
            }
            catch (error) {
                console.log("Error fetching projects", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="mx-5">
            <AppBar
                title="Projects"
                description="View all projects here"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    projectsData.map((project, index) => (
                        <ProjectsCard key={index} project={project} />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
