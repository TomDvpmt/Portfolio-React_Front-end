import { forwardRef } from "react";
import ProjectsContext from "../contexts/ProjectsContext";
import projects from "../assets/data/projects";

import SectionHeading from "../components/SectionHeading";
import ProjectModals from "../components/ProjectModals";

import theme from "../styles/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Projects = forwardRef((props, ref) => {
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box ref={ref} id="projects" component="section">
            {!isLargeScreen && <SectionHeading slug="projects" />}
            {!isLargeScreen && (
                <Typography
                    m={{ xs: "4rem 0", lg: "0 0 4rem" }}
                    align="center"
                    color={theme.palette.text.content}>
                    <Typography component="span" color="secondary">
                        Cliquez
                    </Typography>{" "}
                    sur un projet pour afficher ses informations.
                </Typography>
            )}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <ProjectsContext.Provider value={projects}>
                    <ProjectModals />
                </ProjectsContext.Provider>
            </Box>
        </Box>
    );
});

export default Projects;
