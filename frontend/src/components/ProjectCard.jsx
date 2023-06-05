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
                display: "grid",
                // display: "flex",
                // flexDirection: "column",
                transition: `transform ease ${transitionDuration}ms`,
                transform: `translateX(${translateValue}%)`,
            }}>
            <CardHeader title={project.title} subheader={project.description} />
            <CardMedia
                component="img"
                image={project.imgUrl}
                alt={project.title}
                sx={{ maxHeight: "500px" }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    gap: { xs: "3rem", md: "5rem" },
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    alignItems: {
                        xs: "center",
                        md: "initial",
                    },
                }}>
                <Typography>{project.features}</Typography>
                <Box
                    sx={{
                        maxWidth: "500px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "4rem",
                    }}>
                    {["back", "front", "global"].map((type) => {
                        const typeFilteredTechs = projectTechs.filter(
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
                                    <Typography
                                        component="h4"
                                        variant="h4"
                                        mb="1rem"
                                        textTransform="uppercase">
                                        {type}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: ".7rem",
                                        }}>
                                        {typeFilteredTechs.map(
                                            (tech, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: ".5rem",
                                                        "& svg": {
                                                            maxWidth:
                                                                theme.maxWidth
                                                                    .techIcon,
                                                            maxHeight:
                                                                theme.maxWidth
                                                                    .techIcon,
                                                        },
                                                    }}>
                                                    {tech.imgElement}
                                                    <Typography component="span">
                                                        {tech.label}
                                                    </Typography>
                                                </Box>
                                            )
                                        )}
                                    </Box>
                                </Box>
                            )
                        );
                    })}
                </Box>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: "center",
                    gap: "2rem",
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
