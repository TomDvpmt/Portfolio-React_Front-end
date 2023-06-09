import { useState, useEffect } from "react";

import DropDownHeading from "./DropDownHeading";
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
    Collapse,
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

    const [projectTechs, setProjectTechs] = useState([]);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showTechs, setShowTechs] = useState(false);

    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

    const handleFeaturesClick = () => {
        setShowFeatures((show) => !show);
    };
    const handleTechsClick = () => {
        setShowTechs((show) => !show);
    };

    useEffect(() => {
        setProjectTechs(
            ALL_TECHS?.filter((tech) => project.techs.includes(tech.label))
        );
    }, [project.techs]);

    return (
        <Card
            component="article"
            sx={{
                pb: "3rem",
                minWidth: "100%",
                transition: `transform ease ${transitionDuration}ms`,
                transform: `translateX(${translateValue}%)`,
            }}>
            <CardHeader
                title={project.title}
                titleTypographyProps={{
                    p: "3rem",
                    fontSize: "2.5rem",
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
                    p: "0 1rem",
                    display: "flex",
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
                        maxWidth: "50%",
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
                        <DropDownHeading
                            condition={showFeatures}
                            label="Fonctionnalités"
                            handleClick={handleFeaturesClick}
                        />
                        <Collapse in={isMediumScreen ? true : showFeatures}>
                            <List dense disablePadding>
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
                                                    fontSize: "1rem",
                                                },
                                            }}>
                                            {feature}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </Box>
                    <Box sx={{ flexGrow: "1" }}>
                        <DropDownHeading
                            condition={showTechs}
                            label="Techs"
                            handleClick={handleTechsClick}
                        />
                        <Collapse in={isMediumScreen ? true : showTechs}>
                            <Box
                                sx={{
                                    maxWidth: "500px",
                                    display: "flex",
                                    gap: "4rem",
                                    flexWrap: {
                                        xs: "wrap",
                                        md: "nowrap",
                                    },
                                }}>
                                {["languages", "back", "front", "autres"].map(
                                    (type) => {
                                        const typeFilteredTechs =
                                            projectTechs.filter(
                                                (tech) => tech.type === type
                                            );

                                        return (
                                            typeFilteredTechs.length > 0 && (
                                                <Box
                                                    key={type}
                                                    sx={{
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
                                    }
                                )}
                            </Box>
                        </Collapse>
                    </Box>
                    <CardActions
                        disableSpacing
                        sx={{
                            p: "0",
                            flexDirection: {
                                xs: "column",
                                sm: "row",
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
