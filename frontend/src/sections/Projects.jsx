import SectionHeading from "../components/SectionHeading";
import Modals from "../components/Modals";
import Carousel from "../components/Carousel";

import { Box } from "@mui/material";

const Projects = () => {
    return (
        <Box component="section" id="projects">
            {/* <SectionHeading slug="projects" /> */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Modals />
                {/* <Carousel /> */}
            </Box>
        </Box>
    );
};

export default Projects;
