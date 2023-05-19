import { Box, Typography } from "@mui/material";

const ProjectCard = ({ project, translateValue }) => {
    const transitionDuration = 1000;

    return (
        <Box
            component="article"
            sx={{
                minWidth: "100%",
                backgroundImage: `url(${project.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: `transform ease ${transitionDuration}ms`,
                transform: `translateX(${translateValue}%)`,
            }}>
            <Typography>{project.title}</Typography>
            <Typography>ID : {project.id}</Typography>
        </Box>
    );
};

export default ProjectCard;
