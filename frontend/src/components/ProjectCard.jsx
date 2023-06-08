import { useState, useEffect } from "react";

import DropDownHeading from "./DropDownHeading";
import TechsList from "./TechsList";

import ALL_TECHS from "../assets/data/techs";

import {
    Box,
    Typography,
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

import theme from "../styles/theme";

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
                minWidth: "100%",
                display: "grid",
                // gridTemplateRows: {
                //     xs: "200px 400px 1fr 60px",
                //     md: "150px 400px 1fr 60px",
                // },
                gridTemplateRows: {
                    xs: "200px 1fr 60px",
                    md: "150px 1fr 60px",
                },
                transition: `transform ease ${transitionDuration}ms`,
                transform: `translateX(${translateValue}%)`,
            }}>
            <CardHeader
                title={project.title}
                // subheader={project.description}
                action={
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                }
            />
            <Box sx={{ display: "flex", p: "0 1rem" }}>
                <CardMedia
                    component="video"
                    // image={project.imgUrl}
                    src={project.videoUrl}
                    autoPlay
                    loop
                    controls
                    alt={project.title}
                    sx={{
                        maxWidth: "50%",
                    }}
                />
                {/* <CardMedia
                    component="img"
                    image={project.imgUrl}
                    alt={project.title}
                    sx={{ maxWidth: "50%" }}
                /> */}
                <CardContent
                    sx={{
                        flexGrow: "1",
                        display: "flex",
                        gap: "3rem",
                        flexDirection: "column",
                        alignItems: "center",
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
                                            sx={{ minWidth: "max-content" }}>
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
                    <Box>
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
                                    justifyContent: "center",
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
                                                        alignItems: "center",
                                                    }}>
                                                    <TechsList
                                                        techsArray={
                                                            typeFilteredTechs
                                                        }
                                                        location="modal"
                                                    />
                                                    {/* <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            gap: ".7rem",
                                                        }}>
                                                        {typeFilteredTechs.map(
                                                            (tech, index) => (
                                                                <Box
                                                                    key={index}
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                        gap: ".5rem",
                                                                        "& svg":
                                                                            {
                                                                                maxWidth:
                                                                                    theme
                                                                                        .maxWidth
                                                                                        .techIcon,
                                                                                maxHeight:
                                                                                    theme
                                                                                        .maxWidth
                                                                                        .techIcon,
                                                                            },
                                                                    }}>
                                                                    {
                                                                        tech.imgElement
                                                                    }
                                                                    <Typography component="span">
                                                                        {
                                                                            tech.label
                                                                        }
                                                                    </Typography>
                                                                </Box>
                                                            )
                                                        )}
                                                    </Box> */}
                                                </Box>
                                            )
                                        );
                                    }
                                )}
                            </Box>
                        </Collapse>
                    </Box>
                </CardContent>
            </Box>
            <CardActions
                sx={{
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
                    target="_blank">
                    Voir sur GitHub
                </Button>
                <Button startIcon={<ExitToApp />} href="">
                    Tester l'application
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
