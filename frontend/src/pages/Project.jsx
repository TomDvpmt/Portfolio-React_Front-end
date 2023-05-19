import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import ProjectsContext from "../contexts/ProjectsContext";

import ErrorBoundary from "../components/ErrorBoundary";

const Project = () => {
    const { projectId } = useParams();
    const projectsData = useContext(ProjectsContext);

    const [project, setProject] = useState(null);

    useEffect(() => {
        const currentProject = projectsData.find(
            (project) => project.id == projectId
        );
        if (!currentProject) {
            setProject(<ErrorBoundary page="project" />);
            return;
        }
        setProject(<div>{currentProject.title}</div>);
    }, [projectsData, projectId]);

    return <div>{project}</div>;
};

export default Project;
