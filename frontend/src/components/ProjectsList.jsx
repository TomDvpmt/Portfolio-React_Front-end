import { useState, useEffect, useContext } from "react";
import PositionContext from "../contexts/PositionContext";

import TechsList from "./TechsList";
import ProjectsListTitle from "./ProjectsListTitle";

import ALL_TECHS from "../assets/data/techs";

import theme from "../styles/theme";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Box,
    Typography,
    useMediaQuery,
} from "@mui/material";

import PropTypes from "prop-types";

const ProjectsList = ({
    projectType,
    projectsArray,
    setProjectToShow,
    setShowDialog,
}) => {
    ProjectsList.propTypes = {
        projectType: PropTypes.string.isRequired,
        projectsArray: PropTypes.array.isRequired,
        setProjectToShow: PropTypes.func.isRequired,
        setShowDialog: PropTypes.func.isRequired,
    };

    const sectionPosition = useContext(PositionContext);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const [tabIndex, setTabIndex] = useState(-1);

    useEffect(() => {
        setTabIndex(sectionPosition === 1 ? 0 : -1);
    }, [sectionPosition]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3rem",
            }}>
            <ProjectsListTitle label={projectType} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {projectsArray?.map((project, index) => {
                    const techsArray = ALL_TECHS.filter((tech) =>
                        project.mainTechs.includes(tech.label)
                    );

                    return (
                        <Card
                            key={index}
                            elevation={0}
                            tabIndex={isLargeScreen ? tabIndex : 0}
                            sx={{
                                maxWidth: "500px",
                                flexGrow: "1",
                                bgcolor: theme.palette.primary.main,
                                borderRadius: "0",
                                "&:hover": {
                                    cursor: "pointer",
                                    boxShadow: `0 0 5px 4px ${theme.palette.secondary.main}`,
                                },
                            }}
                            onClick={() => {
                                setProjectToShow(project);
                                setShowDialog(true);
                            }}>
                            <CardActionArea tabIndex={-1}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        minHeight: "150px",
                                    }}>
                                    <CardMedia
                                        component="img"
                                        image={project.imgUrl}
                                        alt={project.title}
                                        sx={{
                                            minHeight: "100%",
                                            maxWidth: "38%",
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            p: ".3rem",
                                            "&:last-child": {
                                                pb: ".3rem",
                                            },
                                            flexGrow: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: ".5rem",
                                        }}>
                                        <Typography
                                            component="h4"
                                            align="center"
                                            textTransform="uppercase"
                                            fontSize={{
                                                xs: ".9rem",
                                                md: "1.2rem",
                                            }}
                                            fontWeight="700"
                                            color={theme.palette.text.title}>
                                            {project.shortTitle}
                                        </Typography>
                                        <TechsList
                                            techsArray={techsArray}
                                            location="homeCard"
                                        />
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </Box>
        </Box>
    );
};

export default ProjectsList;
