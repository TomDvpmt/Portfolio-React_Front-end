import ProjectCardContentHeading from "./ProjectCardContentHeading";

import { Box } from "@mui/material";

import theme from "../styles/theme";

import PropTypes from "prop-types";

const ProjectCardContentList = ({ label, children }) => {
    ProjectCardContentList.propTypes = {
        label: PropTypes.string.isRequired,
    };
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: theme.maxWidth.toolsFeaturesTechsList,
                m: "0 auto",
            }}>
            <ProjectCardContentHeading label={label} linePosition="left" />
            {children}
        </Box>
    );
};

export default ProjectCardContentList;
