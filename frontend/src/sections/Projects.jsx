import { useState, useEffect } from "react";
import { useContext } from "react";
import ProjectsContext from "../contexts/ProjectsContext";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import CarouselNavigation from "../components/CarouselNavigation";

import theme from "../styles/theme";
import { Box, Link } from "@mui/material";

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

    const handleMosaicClick = (e) => {
        setCarouselPosition(parseInt(e.currentTarget.id));
    };

    useEffect(() => {
        setTranslateValue(-100 * carouselPosition);
    }, [carouselPosition]);

    return (
        <Box component="section">
            <SectionHeading slug="projects" />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: ".5rem",
                }}>
                {projectsData?.map((project, index) => (
                    <Box
                        key={index}
                        width={`${100 / projectsData.length - 2}%`}>
                        <Link id={index} onClick={handleMosaicClick}>
                            <img
                                src={project.imgUrl}
                                alt={project.title}
                                width="100%"
                            />
                        </Link>
                    </Box>
                ))}
            </Box>
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
            <CarouselNavigation
                handleSwipeLeft={handleSwipeLeft}
                handleSwipeRight={handleSwipeRight}
            />
        </Box>
    );
};

export default Projects;
