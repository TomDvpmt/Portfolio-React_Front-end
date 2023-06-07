import { useState, useContext } from "react";

import ProjectsContext from "../contexts/ProjectsContext";

import ProjectCard from "./ProjectCard";

import theme from "../styles/theme";
import { Box, Typography, Dialog } from "@mui/material";

const Modals = () => {
    const projectsData = useContext(ProjectsContext);

    const [showDialog, setShowDialog] = useState(false);
    const [projectToShow, setProjectToShow] = useState(false);

    const handleClose = () => {
        setShowDialog(false);
    };

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
        <>
            <Box
                sx={{
                    mb: "3rem",
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
            </Box>
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
