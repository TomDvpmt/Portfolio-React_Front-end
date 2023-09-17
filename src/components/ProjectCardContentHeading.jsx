import TitleLine from "./TitleLine";

import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const ProjectCardContentHeading = ({ label, linePosition }) => {
    ProjectCardContentHeading.propTypes = {
        label: PropTypes.string.isRequired,
        linePosition: PropTypes.string.isRequired,
    };

    return (
        <Box
            width="100%"
            mb="1.5rem"
            display="flex"
            alignItems="center"
            gap="1rem"
            data-testid="content-heading">
            {(linePosition === "left" || linePosition === "both") && (
                <TitleLine />
            )}
            <Typography
                component="h4"
                variant="h4"
                color={theme.palette.text.title}>
                {label}
            </Typography>
            {(linePosition === "right" || linePosition === "both") && (
                <TitleLine />
            )}
        </Box>
    );
};

export default ProjectCardContentHeading;
