import { useState, useContext } from "react";

import ProjectsContext from "../contexts/ProjectsContext";

import ProjectsListTitle from "./ProjectsListTitle";
import ProjectsList from "./ProjectsList";
import ProjectCard from "./ProjectCard";

import { Box, Dialog } from "@mui/material";

const ProjectsModals = () => {
    const projectsData = useContext(ProjectsContext);

    const [showDialog, setShowDialog] = useState(false);
    const [projectToShow, setProjectToShow] = useState(false);

    const handleClose = () => {
        setShowDialog(false);
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    p: ".5rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10rem",
                }}>
                <ProjectsList
                    projectsStackType="fullstack"
                    projectsArray={projectsData.filter(
                        (project) => project.stackType === "fullstack"
                    )}
                    setProjectToShow={setProjectToShow}
                    setShowDialog={setShowDialog}
                />
                <ProjectsList
                    projectsStackType="front-end"
                    projectsArray={projectsData.filter(
                        (project) => project.stackType === "fullstack"
                    )}
                    setProjectToShow={setProjectToShow}
                    setShowDialog={setShowDialog}
                />
            </Box>
            <Dialog
                open={showDialog}
                onClose={handleClose}
                fullWidth
                maxWidth="xl">
                <ProjectCard
                    project={projectToShow}
                    translateValue={0}
                    handleClose={handleClose}
                />
            </Dialog>
        </>
    );
};

export default ProjectsModals;
