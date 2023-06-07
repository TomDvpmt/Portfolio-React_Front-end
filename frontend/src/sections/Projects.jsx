import SectionHeading from "../components/SectionHeading";
import Modals from "../components/Modals";

import { Box } from "@mui/material";

const Projects = () => {
    return (
        <Box component="section">
            <SectionHeading slug="projects" />
            <Modals />
        </Box>
    );
};

export default Projects;
