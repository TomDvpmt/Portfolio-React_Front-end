import { useState, useContext } from "react";

import ProjectsContext from "../contexts/ProjectsContext";

import ProjectsList from "./ProjectsList";
import ProjectModal from "./ProjectModal";

import theme from "../styles/theme";
import { Box, Dialog } from "@mui/material";

const ProjectsModals = () => {
    const projectsData = useContext(ProjectsContext);

    const [showDialog, setShowDialog] = useState(false);
    const [projectToShow, setProjectToShow] = useState({});

    const handleClose = () => {
        setShowDialog(false);
    };

    return (
        <>
            <Box
                sx={{
                    width: "100%",

                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    justifyContent: "center",
                    gap: { xs: "4rem", md: "2rem", lg: "10rem" },
                }}>
                <ProjectsList
                    projectType="fullstack"
                    projectsArray={projectsData.filter(
                        (project) => project.projectType === "fullstack"
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
                fullScreen
                maxWidth="xl"
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: theme.palette.primary.main,
                    },
                    "& .MuiDialog-paperFullWidth": {
                        width: "100%",
                        m: { xs: "1rem", lg: "2rem" },
                    },
                }}>
                <ProjectModal
                    project={projectToShow}
                    translateValue={0}
                    handleClose={handleClose}
                />
            </Dialog>
        </>
    );
};

export default ProjectsModals;
