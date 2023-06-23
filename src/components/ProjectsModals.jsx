import { useState, useContext } from "react";

import ProjectsContext from "../contexts/ProjectsContext";

import ProjectsList from "./ProjectsList";
import ProjectCard from "./ProjectCard";

import theme from "../styles/theme";
import { Box, Dialog, useMediaQuery } from "@mui/material";

const ProjectsModals = () => {
    const projectsData = useContext(ProjectsContext);

    const [showDialog, setShowDialog] = useState(false);
    const [projectToShow, setProjectToShow] = useState({});

    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

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
                fullScreen={isMediumScreen ? false : true}
                fullWidth={isMediumScreen ? true : false}
                maxWidth="xl"
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: theme.palette.primary.main,
                        boxShadow: `0 0 10px 1px ${theme.palette.secondary.main}`,
                    },
                    "& .MuiDialog-paperFullWidth": {
                        width: "100%",
                        m: { xs: "1rem", lg: "2rem" },
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
