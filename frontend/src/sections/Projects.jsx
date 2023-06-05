import { useState, useEffect } from "react";
import { useContext } from "react";
import ProjectsContext from "../contexts/ProjectsContext";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import CarouselNavigation from "../components/CarouselNavigation";

import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

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

        const thumbs = Array.from(document.querySelectorAll(".thumbnail"));
        const element = thumbs.find(
            (thumb) => parseInt(thumb.id) === carouselPosition
        );

        console.log(element);

        thumbs.forEach((thumb) => {
            if (thumb === element) {
                !element.classList.contains("active-thumbnail") &&
                    element.classList.add("active-thumbnail");
            } else {
                thumb.classList.remove("active-thumbnail");
            }
        });
    }, [carouselPosition]);

    const showTextStyle = {
        "& img": {
            opacity: "0.3",
        },
        "& .over-text": {
            opacity: "1",
            textAlign: "center",
        },
    };

    return (
        <Box component="section">
            <SectionHeading slug="projects" />
            <Box
                sx={{
                    mb: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: ".5rem",
                }}>
                {projectsData?.map((project, index) => (
                    <Box
                        key={index}
                        id={index}
                        className="thumbnail"
                        width={`${100 / projectsData.length - 2}%`}
                        onClick={handleMosaicClick}
                        sx={{
                            bgcolor: "black",
                            position: "relative",
                            "&.active-thumbnail": {
                                boxShadow: `inset 0 0 2px 4px red`,
                                ...showTextStyle,
                            },
                            "& img": {
                                minHeight: "100%",
                                objectFit: "cover",
                                transition: "opacity ease 200ms",
                            },
                            "&:hover": {
                                cursor: "pointer",
                                ...showTextStyle,
                            },
                        }}>
                        <img
                            src={project.imgUrl}
                            alt={project.title}
                            width="100%"
                        />
                        <Box
                            className="over-text"
                            sx={{
                                opacity: "0",
                                position: "absolute",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                                zIndex: "2",
                                p: ".5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Typography color="white">
                                {project.shortTitle}
                            </Typography>
                        </Box>
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
