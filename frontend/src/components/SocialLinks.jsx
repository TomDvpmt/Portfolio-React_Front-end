import theme from "../styles/theme";
import { Box, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

import PropTypes from "prop-types";

const SocialLinks = ({ tabIndex }) => {
    SocialLinks.propTypes = {
        tabIndex: PropTypes.number.isRequired,
    };

    const socialIconStyle = {
        color: theme.palette.text.title,
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <IconButton
                tabIndex={tabIndex}
                sx={socialIconStyle}
                href="https://fr.linkedin.com/in/thomas-boussion-b273a6150"
                target="_blank">
                <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
                tabIndex={tabIndex}
                sx={socialIconStyle}
                href="https://github.com/TomDvpmt"
                target="_blank">
                <GitHub fontSize="large" />
            </IconButton>
        </Box>
    );
};

export default SocialLinks;
