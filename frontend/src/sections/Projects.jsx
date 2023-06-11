import ProjectsContext from "../contexts/ProjectsContext";
import projects from "../assets/data/projects";

import SectionHeading from "../components/SectionHeading";
import ProjectsModals from "../components/ProjectsModals";

import theme from "../styles/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Projects = () => {
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box id="projects" component="section">
            {!isLargeScreen && <SectionHeading slug="projects" />}
            <Typography
                m={{ xs: "4rem 0", lg: "0 0 4rem" }}
                align="center"
                color={theme.palette.text.content}>
                <Typography component="span" color="secondary">
                    Cliquez
                </Typography>{" "}
                sur un projet pour afficher ses informations.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <ProjectsContext.Provider value={projects}>
                    <ProjectsModals />
                </ProjectsContext.Provider>
            </Box>
        </Box>
    );
};

export default Projects;
