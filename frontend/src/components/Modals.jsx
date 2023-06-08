import { useState, useContext } from "react";

import ALL_TECHS from "../assets/data/techs";
import ProjectsContext from "../contexts/ProjectsContext";

import ProjectsListTitle from "./ProjectsListTitle";
import ProjectsList from "./ProjectsList";
import ProjectCard from "./ProjectCard";
import TechsList from "./TechsList";

import theme from "../styles/theme";
import {
    Box,
    Typography,
    Dialog,
    Card,
    CardActionArea,
    CardHeader,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";

const Modals = () => {
    const projectsData = useContext(ProjectsContext);

    const [showDialog, setShowDialog] = useState(false);
    const [projectToShow, setProjectToShow] = useState(false);

    const handleClose = () => {
        setShowDialog(false);
    };

    // const showTextStyle = {
    //     "& img": {
    //         opacity: "0.3",
    //     },
    //     "& .over-text": {
    //         opacity: "1",
    //         textAlign: "center",
    //     },
    // };
    return (
        <>
            <Box
                // maxWidth={theme.maxWidth.homeProjectCard}
                sx={{
                    width: "100%",
                    p: ".5rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "8rem",
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "3rem",
                    }}>
                    <ProjectsListTitle label="Fullstack" />
                    <ProjectsList
                        projectsArray={projectsData.filter(
                            (project) => project.stackType === "fullstack"
                        )}
                        setProjectToShow={setProjectToShow}
                        setShowDialog={setShowDialog}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "3rem",
                    }}>
                    <ProjectsListTitle label="Front-end" />
                    <ProjectsList
                        projectsArray={projectsData.filter(
                            (project) => project.stackType === "front-end"
                        )}
                        setProjectToShow={setProjectToShow}
                        setShowDialog={setShowDialog}
                    />
                </Box>
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

export default Modals;
