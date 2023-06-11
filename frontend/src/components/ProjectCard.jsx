import { useState, useEffect } from "react";

import ProjectCardContentHeading from "./ProjectCardContentHeading";
import TechsList from "./TechsList";

import ALL_TECHS from "../assets/data/techs";

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

    const [projectTechs, setProjectTechs] = useState([]);
    const [numberOfTechColumns, setNumberOfTechColumns] = useState(0);

    const TECH_TYPES = ["back-end", "front-end", "autres"];

    useEffect(() => {
        setProjectTechs(
            ALL_TECHS?.filter((tech) => project.techs.includes(tech.label))
        );
    }, [project.techs]);

    useEffect(() => {
        setNumberOfTechColumns(
            TECH_TYPES.map((type) =>
                projectTechs.filter((tech) => tech.type === type)
            ).filter((column) => column.length > 0).length
        );
    }, [projectTechs]);

    return (
        <Card
            component="article"
            sx={{
                pb: "3rem",
                minWidth: "100%",
                transition: `transform ease ${transitionDuration}ms`,
                transform: `translateX(${translateValue}%)`,
                overflow: "visible",
            }}>
            <CardHeader
                title={project.title}
                titleTypographyProps={{
                    p: { xs: "2rem .5rem", lg: "3rem" },
                    fontSize: { xs: "1.5rem", lg: "2.5rem" },
                }}
                action={
                    <IconButton
                        onClick={handleClose}
                        sx={{ color: theme.palette.text.title }}>
                        <Close />
                    </IconButton>
                }
                sx={{
                    color: theme.palette.text.title,
                }}
            />
            <Box
                sx={{
                    p: { xs: "0 .3rem", lg: "0 1rem" },
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-evenly",
                }}>
                <CardMedia
                    component="video"
                    src={project.videoUrl}
                    autoPlay
                    loop
                    controls
                    alt={project.title}
                    sx={{
                        maxWidth: { lg: "50%" },
                        mb: { xs: "2rem", lg: "0" },
                    }}
                />
                <CardContent
                    sx={{
                        display: "flex",
                        gap: "3rem",
                        flexDirection: "column",
                        color: theme.palette.text.content,
                    }}>
                    <Box>
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
                                            color: theme.palette.text.content,
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
                    <Box sx={{ flexGrow: "1" }}>
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
                                flexWrap: {
                                    xs: "wrap",
                                    lg: "nowrap",
                                },
                            }}>
                            {TECH_TYPES.map((type) => {
                                const typeFilteredTechs = projectTechs.filter(
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
                                                techsArray={typeFilteredTechs}
                                                location="modal"
                                            />
                                        </Box>
                                    )
                                );
                            })}
                        </Box>
                    </Box>
                    <CardActions
                        disableSpacing
                        sx={{
                            p: "0",
                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                            justifyContent: {
                                sm: "center",
                                lg: "flex-start",
                            },
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
                        <Button
                            color="secondary"
                            variant="contained"
                            startIcon={<ExitToApp />}
                            href="">
                            Tester l'application
                        </Button>
                    </CardActions>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProjectCard;
