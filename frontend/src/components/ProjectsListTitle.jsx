import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const ProjectsListTitle = ({ label }) => {
    ProjectsListTitle.propTypes = {
        label: PropTypes.string.isRequired,
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
            }}>
            <Box
                sx={{
                    height: "1px",
                    flexGrow: "1",
                    bgcolor: theme.palette.secondary.main,
                }}
            />
            <Typography
                component="h3"
                textTransform="uppercase"
                color={theme.palette.text.title}
                fontSize="1.5rem">
                {label.charAt(0).toUpperCase() + label.slice(1)}
            </Typography>
            <Box
                sx={{
                    height: "1px",
                    flexGrow: "1",
                    bgcolor: theme.palette.secondary.main,
                }}
            />
        </Box>
    );
};

export default ProjectsListTitle;
