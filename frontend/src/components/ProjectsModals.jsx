import { useState, useContext } from "react";

import ProjectsContext from "../contexts/ProjectsContext";

import ProjectsList from "./ProjectsList";
import ProjectCard from "./ProjectCard";

import theme from "../styles/theme";
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
                    projectType="applications complètes"
                    projectsArray={projectsData.filter(
                        (project) =>
                            project.projectType === "applications complètes"
                    )}
                    setProjectToShow={setProjectToShow}
                    setShowDialog={setShowDialog}
                />
                <ProjectsList
                    projectType="front-end"
                    projectsArray={projectsData.filter(
                        (project) => project.projectType === "front-end"
                    )}
                    setProjectToShow={setProjectToShow}
                    setShowDialog={setShowDialog}
                />
            </Box>
            <Dialog
                open={showDialog}
                onClose={handleClose}
                fullWidth
                maxWidth="xl"
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: theme.palette.primary.main,
                        boxShadow: `0 0 10px 1px ${theme.palette.secondary.main}`,
                    },
                }}>
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
