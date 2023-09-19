import theme from "../styles/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

import PropTypes from "prop-types";

const ProjectsListTitle = ({ label }) => {
    ProjectsListTitle.propTypes = {
        label: PropTypes.string.isRequired,
    };

    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box
            data-testid="title-container"
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
            }}>
            {isLargeScreen && (
                <Box
                    data-testid="title-line"
                    sx={{
                        height: "1px",
                        flexGrow: "1",
                        bgcolor: theme.palette.secondary.main,
                    }}
                />
            )}
            <Typography
                component={isLargeScreen ? "h2" : "h3"}
                variant="h3"
                textTransform="uppercase"
                align="center"
                color={theme.palette.text.title}
                fontSize="1.5rem"
                data-testid="title">
                {label.charAt(0).toUpperCase() + label.slice(1)}
            </Typography>
            {isLargeScreen && (
                <Box
                    data-testid="title-line"
                    sx={{
                        height: "1px",
                        flexGrow: "1",
                        bgcolor: theme.palette.secondary.main,
                    }}
                />
            )}
        </Box>
    );
};

export default ProjectsListTitle;
