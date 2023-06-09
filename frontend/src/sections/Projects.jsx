// import SectionHeading from "../components/SectionHeading";
import ProjectsModals from "../components/ProjectsModals";
// import Carousel from "../components/Carousel";

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
                Cliquez sur un projet pour afficher plus d'informations.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ProjectsModals />
                {/* <Carousel /> */}
            </Box>
        </Box>
    );
};

export default Projects;
