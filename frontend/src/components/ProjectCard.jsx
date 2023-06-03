import { useState, useEffect } from "react";

import { allTechs } from "../assets/data/techs";

import {
    Box,
    Typography,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    Button,
} from "@mui/material";
import { GitHub, ExitToApp } from "@mui/icons-material";

import theme from "../styles/theme";

const ProjectCard = ({ project, translateValue }) => {
    const transitionDuration = 1000;

    const [projectTechs, setProjectTechs] = useState([]);

    useEffect(() => {
        setProjectTechs(
            allTechs?.filter((tech) => project.techs.includes(tech.label))
        );
    }, [project.techs]);

    return (
        <Card
            component="article"
            sx={{
                minWidth: "100%",
                display: "flex",
                flexDirection: "column",
                transition: `transform ease ${transitionDuration}ms`,
                transform: `translateX(${translateValue}%)`,
            }}>
            <CardHeader title={project.title} subheader={project.description} />
            <CardMedia
                component="img"
                image={project.imgUrl}
                alt={project.title}
                sx={{ flexGrow: "1" }}
            />
            <CardContent>
                <Box>{project.features}</Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                    {projectTechs.map((tech, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: ".3rem",
                                "& svg": {
                                    maxWidth: theme.maxWidth.techIcon,
                                    maxHeight: theme.maxWidth.techIcon,
                                },
                            }}>
                            {tech.imgElement}
                            <Typography component="span">
                                {tech.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
            <CardActions
                sx={{ flexDirection: "column", alignItems: "flex-end" }}>
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
