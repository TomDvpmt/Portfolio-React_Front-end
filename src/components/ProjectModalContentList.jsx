import ProjectModalContentHeading from "./ProjectModalContentHeading";

import { Box } from "@mui/material";

import theme from "../styles/theme";

import PropTypes from "prop-types";

const ProjectModalContentList = ({ label, children }) => {
    ProjectModalContentList.propTypes = {
        label: PropTypes.string.isRequired,
    };
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: theme.maxWidth.toolsFeaturesTechsList,
                m: "0 auto",
            }}>
            <ProjectModalContentHeading label={label} linePosition="left" />
            {children}
        </Box>
    );
};

export default ProjectModalContentList;
