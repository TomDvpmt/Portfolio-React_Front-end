import { useState, useEffect } from "react";

import ProjectCardContentHeading from "./ProjectCardContentHeading";
import TechsList from "./TechsList";

import { ALL_TECHS, TYPES_ARRAY } from "../assets/data/techs";

import theme from "../styles/theme";
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import { GitHub, ExitToApp, ChevronRight, Close } from "@mui/icons-material";

import PropTypes from "prop-types";

const ProjectCard = ({ project, translateValue, handleClose }) => {
    ProjectCard.propTypes = {
        project: PropTypes.object.isRequired,
        translateValue: PropTypes.number.isRequired,
        handleClose: PropTypes.func.isRequired,
    };

    const transitionDuration = 1000;
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

    const [projectTechs, setProjectTechs] = useState([]);
    const [numberOfTechColumns, setNumberOfTechColumns] = useState(0);

    useEffect(() => {
        setProjectTechs(
            ALL_TECHS?.filter((tech) => project.techs.includes(tech.label))
        );
    }, [project.techs]);

    useEffect(() => {
        setNumberOfTechColumns(
            TYPES_ARRAY.map((type) =>
                projectTechs.filter((tech) => tech.type === type)
            ).filter((column) => column.length > 0).length
        );
    }, [projectTechs]);

    const cardActions = (
        <CardActions
            disableSpacing
            sx={{
                gridColumn: "1",
                mt: isLargeScreen && !isExtraLargeScreen ? "6rem" : "3rem",
                p: "0",
                flexDirection: {
                    xs: "column",
                    sm: "row",
                },
                justifyContent: "center",
                gap: {
                    xs: ".5rem",
                    sm: "2rem",
                },
            }}>
            <Button
                startIcon={<GitHub />}
                href={project.gitHubLink}
                target="_blank"
                sx={{ color: theme.palette.text.content }}>
                Voir sur GitHub
            </Button>
            {project.url !== "" && (
                <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<ExitToApp />}
                    href={project.url}
                    target="_blank">
                    Tester l'application
                </Button>
            )}
        </CardActions>
    );

    return (
        <Card
            component="article"
            sx={{
                pb: "1.5rem",
                minWidth: "100%",
                transition: `transform ease ${transitionDuration}ms`,
                transform: `translateX(${translateValue}%)`,
                overflow: "visible",
            }}>
            <CardHeader
                title={project.title}
                titleTypographyProps={{
                    p: { xs: "1.5rem .5rem", lg: "1.5rem" },
                    fontSize: { xs: "1.5rem", lg: "2.5rem" },
                }}
                action={
                    <IconButton
                        onClick={handleClose}
                        sx={{ color: theme.palette.text.title }}>
                        <Close fontSize={isLargeScreen ? "large" : "initial"} />
                    </IconButton>
                }
                sx={{
                    color: theme.palette.text.title,
                }}
            />
            <Box
                sx={{
                    p: { xs: "0 .3rem", lg: "0 1rem" },
                }}>
                <CardContent
                    sx={{
                        color: theme.palette.text.content,
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            lg: "1fr 1fr",
                            xl: project.done ? "1fr 40%" : "1fr 1fr",
                        },
                        gridAutoFlow: "dense",
                        gap: "3rem",
                    }}>
                    <Box
                        sx={{
                            gridColumn: "1",
                            alignSelf: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}>
                        {project.done ? (
                            <CardMedia
                                component="video"
                                src={project.videoUrl}
                                autoPlay
                                loop
                                controls
                                alt={project.title}
                                sx={{
                                    gridRow: {
                                        xs: "1",
                                        lg:
                                            project.tools.length > 0
                                                ? "1 / 3"
                                                : "1",
                                    },
                                    mb: { xs: "2rem", lg: "0" },
                                }}
                            />
                        ) : (
                            <CardMedia
                                component="img"
                                image={project.imgUrl}
                                alt={project.title}
                            />
                        )}
                        {isLargeScreen && !isExtraLargeScreen && cardActions}
                    </Box>
                    <Box
                        sx={{
                            gridColumn: { xs: "1", lg: "2" },
                            display: "flex",
                            flexDirection: "column",
                            gap: "3rem",
                        }}>
                        {project.tools.length > 0 && (
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth:
                                        theme.maxWidth.toolsFeaturesTechsList,
                                    m: "0 auto",
                                }}>
                                <ProjectCardContentHeading
                                    label="Outils de développement"
                                    linePosition="left"
                                />
                                <List
                                    dense
                                    disablePadding
                                    sx={{ maxWidth: "500px", m: "0 auto" }}>
                                    {project.tools.map((feature, index) => (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                            sx={{
                                                mb: ".5rem",
                                                alignItems: "start",
                                                gap: ".5rem",
                                            }}>
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: "max-content",
                                                    color: theme.palette.text
                                                        .content,
                                                }}>
                                                <ChevronRight fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText
                                                sx={{
                                                    m: "0",
                                                    "& span": {
                                                        fontSize: {
                                                            md: "1rem",
                                                        },
                                                    },
                                                }}>
                                                {feature}
                                            </ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        )}
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: theme.maxWidth.toolsFeaturesTechsList,
                                m: "0 auto",
                            }}>
                            <ProjectCardContentHeading
                                label="Fonctionnalités"
                                linePosition="left"
                            />
                            <List
                                dense
                                disablePadding
                                sx={{ maxWidth: "500px", m: "0 auto" }}>
                                {project.features.map((feature, index) => (
                                    <ListItem
                                        key={index}
                                        disablePadding
                                        sx={{
                                            mb: ".5rem",
                                            alignItems: "start",
                                            gap: ".5rem",
                                        }}>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: "max-content",
                                                color: theme.palette.text
                                                    .content,
                                            }}>
                                            <ChevronRight fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                m: "0",
                                                "& span": {
                                                    fontSize: { md: "1rem" },
                                                },
                                            }}>
                                            {feature}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: theme.maxWidth.toolsFeaturesTechsList,
                                m: "0 auto",
                            }}>
                            <ProjectCardContentHeading
                                label="Techs"
                                linePosition="left"
                            />
                            <Box
                                sx={{
                                    maxWidth: "500px",
                                    m: "0 auto",
                                    display: "flex",
                                    justifyContent: {
                                        xs:
                                            numberOfTechColumns > 1
                                                ? "space-evenly"
                                                : "flex-start",
                                        sm:
                                            numberOfTechColumns > 2
                                                ? "space-between"
                                                : numberOfTechColumns > 1
                                                ? "space-evenly"
                                                : "flex-start",
                                    },
                                    gap: { xs: "1rem", lg: "4rem" },
                                    // flexWrap: {
                                    //     xs: "wrap",
                                    //     lg: "nowrap",
                                    // },
                                    flexWrap: "wrap",
                                }}>
                                {TYPES_ARRAY.map((type) => {
                                    const typeFilteredTechs =
                                        projectTechs.filter(
                                            (tech) => tech.type === type
                                        );

                                    return (
                                        typeFilteredTechs.length > 0 && (
                                            <Box
                                                key={type}
                                                sx={{
                                                    width: "max-content",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                }}>
                                                <TechsList
                                                    techsArray={
                                                        typeFilteredTechs
                                                    }
                                                    location="modal"
                                                />
                                            </Box>
                                        )
                                    );
                                })}
                            </Box>
                        </Box>
                        {(!isLargeScreen || isExtraLargeScreen) && cardActions}
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProjectCard;
