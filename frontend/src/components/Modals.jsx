import { useState, useContext } from "react";

import ALL_TECHS from "../assets/data/techs";
import ProjectsContext from "../contexts/ProjectsContext";

import ProjectsList from "./ProjectsList";
import ProjectCard from "./ProjectCard";
import TechsList from "./TechsList";

import theme from "../styles/theme";
import {
    Box,
    Typography,
    Dialog,
    Card,
    CardActionArea,
    CardHeader,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";

const Modals = () => {
    const projectsData = useContext(ProjectsContext);

    const [showDialog, setShowDialog] = useState(false);
    const [projectToShow, setProjectToShow] = useState(false);

    const handleClose = () => {
        setShowDialog(false);
    };

    // const showTextStyle = {
    //     "& img": {
    //         opacity: "0.3",
    //     },
    //     "& .over-text": {
    //         opacity: "1",
    //         textAlign: "center",
    //     },
    // };
    return (
        <>
            <Box
                maxWidth={theme.maxWidth.homeProjectCard}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5rem",
                }}>
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                    <Typography
                        textTransform="uppercase"
                        color="secondary"
                        fontSize="1.5rem">
                        Fullstack
                    </Typography>
                    <ProjectsList
                        projectsArray={projectsData.filter(
                            (project) => project.stackType === "fullstack"
                        )}
                        setProjectToShow={setProjectToShow}
                        setShowDialog={setShowDialog}
                    />
                </Box>
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "3rem" }}>
                    <Typography
                        textTransform="uppercase"
                        color="secondary"
                        fontSize="1.5rem">
                        Front-end
                    </Typography>
                    <ProjectsList
                        projectsArray={projectsData.filter(
                            (project) => project.stackType === "front-end"
                        )}
                        setProjectToShow={setProjectToShow}
                        setShowDialog={setShowDialog}
                    />
                </Box>
                {/* {projectsData?.map((project, index) => {
                    const techsArray = ALL_TECHS.filter((tech) =>
                        project.mainTechs.includes(tech.label)
                    );

                    return (
                        <Card
                            key={index}
                            item
                            elevation={0}
                            sx={{
                                flexGrow: "1",
                                bgcolor: theme.palette.primary.main,
                                "&:hover": {
                                    cursor: "pointer",
                                    boxShadow: `0 0 5px 4px ${theme.palette.secondary.main}`,
                                },
                            }}
                            onClick={() => {
                                setProjectToShow(project);
                                setShowDialog(true);
                            }}>
                            <CardActionArea>
                                <Box sx={{ display: "flex" }}>
                                    <CardMedia
                                        component="img"
                                        image={project.imgUrl}
                                        alt={project.title}
                                        sx={{
                                            height: "200px",
                                            maxWidth: "38%",
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}>
                                        <Typography
                                            component="h3"
                                            textTransform="uppercase"
                                            fontSize="1.2rem"
                                            fontWeight="700"
                                            color={theme.palette.text.title}>
                                            {project.shortTitle}
                                        </Typography>
                                        <TechsList
                                            techsArray={techsArray}
                                            location="home"
                                        />
                                    </CardContent>
                                </Box>
                            </CardActionArea>
                        </Card>
                    );
                })} */}
            </Box>
            {/* <Box
                sx={{
                    mb: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2rem",
                }}>
                {projectsData?.map((project, index) => (
                    

                    <Box
                        key={index}
                        id={index}
                        className="thumbnail"
                        width={`${100 / projectsData.length - 2}%`}
                        onClick={() => {
                            setProjectToShow(project);
                            setShowDialog(true);
                        }}
                        sx={{
                            bgcolor: "black",
                            position: "relative",
                            "&.active-thumbnail": {
                                boxShadow: `inset 0 0 2px 3px ${theme.palette.secondary.main}`,
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
            </Box> */}
            <Dialog
                open={showDialog}
                onClose={handleClose}
                fullWidth
                maxWidth="xl">
                <ProjectCard
                    project={projectToShow}
                    translateValue={0}
                    handleClose={handleClose}
                />
            </Dialog>
        </>
    );
};

export default Modals;
