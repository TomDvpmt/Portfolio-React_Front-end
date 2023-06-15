import { useState, useEffect, useContext } from "react";

import ProjectsContext from "../contexts/ProjectsContext";

import CarouselMosaic from "./CarouselMosaic";
import CarouselNavigation from "./CarouselNavigation";
import ProjectCard from "./ProjectCard";

import theme from "../styles/theme";
import { Box } from "@mui/material";

const ProjectsCarousel = () => {
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

        const thumbs = Array.from(document.querySelectorAll(".thumbnail"));
        const element = thumbs.find(
            (thumb) => parseInt(thumb.id) === carouselPosition
        );

        thumbs.forEach((thumb) => {
            if (thumb === element) {
                !element.classList.contains("active-thumbnail") &&
                    element.classList.add("active-thumbnail");
            } else {
                thumb.classList.remove("active-thumbnail");
            }
        });
    }, [carouselPosition]);

    return (
        <Box sx={{ display: "flex" }}>
            <CarouselMosaic
                projectsData={projectsData}
                setCarouselPosition={setCarouselPosition}
            />
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
            {/* <CarouselNavigation
                handleSwipeLeft={handleSwipeLeft}
                handleSwipeRight={handleSwipeRight}
            /> */}
        </Box>
    );
};

export default ProjectsCarousel;
