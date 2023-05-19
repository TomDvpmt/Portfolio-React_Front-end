import { useState, useEffect } from "react";
import { useContext } from "react";
import ProjectsContext from "../contexts/ProjectsContext";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

import { Box, ButtonGroup, Button } from "@mui/material";

const Projects = () => {
    const projectsData = useContext(ProjectsContext);
    const transitionDuration = 1000;

    const [projects, setProjects] = useState([]);
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
        <>
            <SectionHeading slug="projects" />
            <Box
                sx={{
                    maxWidth: "640px",
                    minHeight: "360px",
                    display: "flex",
                    overflow: "hidden",
                    transition: `transform ease ${transitionDuration}ms`,
                }}>
                {projectsData?.map((project, index) => (
                    <ProjectCard
                        key={`a${index}`}
                        project={project}
                        translateValue={translateValue}
                    />
                ))}
            </Box>
            <ButtonGroup variant="outlined">
                <Button onClick={handleSwipeLeft}>left</Button>
                <Button onClick={handleSwipeRight}>right</Button>
            </ButtonGroup>
        </>
    );
};

export default Projects;
