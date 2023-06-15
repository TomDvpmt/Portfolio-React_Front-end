import TechsList from "./TechsList";

import ALL_TECHS from "../assets/data/techs";

import theme from "../styles/theme";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    useMediaQuery,
    Button,
} from "@mui/material";

import PropTypes from "prop-types";

const ProjectsListCard = ({
    project,
    tabIndex,
    setProjectToShow,
    setShowDialog,
}) => {
    ProjectsListCard.propTypes = {
        project: PropTypes.object.isRequired,
        tabIndex: PropTypes.number.isRequired,
        setProjectToShow: PropTypes.func.isRequired,
        setShowDialog: PropTypes.func.isRequired,
    };

    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const techsArray = ALL_TECHS.filter((tech) =>
        project.mainTechs.includes(tech.label)
    );

    return (
        <Card
            elevation={0}
            tabIndex={-1}
            sx={{
                maxWidth: "500px",
                flexGrow: "1",
                bgcolor: theme.palette.primary.main,
                "&:hover": {
                    cursor: "pointer",
                    boxShadow: `0 0 5px 4px ${theme.palette.secondary.main}`,
                },
            }}>
            <Button
                tabIndex={isLargeScreen ? tabIndex : 0}
                onClick={() => {
                    setProjectToShow(project);
                    setShowDialog(true);
                }}
                sx={{ p: "0" }}>
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
                            bgcolor: theme.palette.primary.light,
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
            </Button>
        </Card>
    );
};

export default ProjectsListCard;
