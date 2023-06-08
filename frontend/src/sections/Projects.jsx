import SectionHeading from "../components/SectionHeading";
import Modals from "../components/Modals";

import { Box } from "@mui/material";

const Projects = () => {
    return (
        <Box component="section">
            <SectionHeading slug="projects" />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Modals />
            </Box>
        </Box>
    );
};

export default Projects;
