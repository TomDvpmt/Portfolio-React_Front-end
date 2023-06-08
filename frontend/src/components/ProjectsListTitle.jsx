import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const ProjectsListTitle = ({ label }) => {
    ProjectsListTitle.propTypes = {
        label: PropTypes.string.isRequired,
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Box
                sx={{
                    height: "1px",
                    width: "4rem",
                    bgcolor: theme.palette.secondary.main,
                }}
            />
            <Typography
                textTransform="uppercase"
                color={theme.palette.text.title}
                fontSize="1.5rem">
                {label}
            </Typography>
            <Box
                sx={{
                    height: "1px",
                    width: "4rem",
                    bgcolor: theme.palette.secondary.main,
                }}
            />
        </Box>
    );
};

export default ProjectsListTitle;
