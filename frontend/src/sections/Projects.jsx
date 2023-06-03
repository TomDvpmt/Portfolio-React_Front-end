import { useState, useEffect } from "react";
import { useContext } from "react";
import ProjectsContext from "../contexts/ProjectsContext";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

import theme from "../styles/theme";
import { Box, ButtonGroup, Button } from "@mui/material";

const Projects = () => {
    const projectsData = useContext(ProjectsContext);

    const [carouselPosition, setCarouselPosition] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const handleSwipeLeft = () => {
        if (carouselPosition === 0) {
            setCarouselPosition(projectsData.length - 1);
            return;
        }
        setCarouselPosition((position) => position - 1);
    };
    const handleSwipeRight = () => {
        if (carouselPosition === projectsData.length - 1) {
            setCarouselPosition(0);
            return;
        }
        setCarouselPosition((position) => position + 1);
    };

    useEffect(() => {
        setTranslateValue(-100 * carouselPosition);
    }, [carouselPosition]);

    return (
        <Box component="section">
            <SectionHeading slug="projects" />
            <Box
                sx={{
                    maxWidth: theme.maxWidth.carousel,
                    minHeight: "500px",
                    m: "0 auto",
                    display: "flex",
                    overflow: "hidden",
                }}>
                {projectsData?.map((project, index) => (
                    <ProjectCard
                        key={`a${index}`}
                        project={project}
                        translateValue={translateValue}
                    />
                ))}
            </Box>
            <ButtonGroup variant="outlined" sx={{ m: "0 auto" }}>
                <Button onClick={handleSwipeLeft}>left</Button>
                <Button onClick={handleSwipeRight}>right</Button>
            </ButtonGroup>
        </Box>
    );
};

export default Projects;
