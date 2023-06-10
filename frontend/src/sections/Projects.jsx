import ProjectsContext from "../contexts/ProjectsContext";
import projects from "../assets/data/projects";

// import SectionHeading from "../components/SectionHeading";
import ProjectsModals from "../components/ProjectsModals";

import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box component="section" id="projects">
            {/* <SectionHeading slug="projects" /> */}
            <Typography
                pb="3rem"
                align="center"
                color={theme.palette.text.content}>
                <Typography component="span" color="secondary">
                    Cliquez
                </Typography>{" "}
                sur un projet pour afficher ses informations.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ProjectsContext.Provider value={projects}>
                    <ProjectsModals />
                </ProjectsContext.Provider>
            </Box>
        </Box>
    );
};

export default Projects;
