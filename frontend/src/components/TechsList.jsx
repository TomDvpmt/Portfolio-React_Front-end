import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const TechsList = ({ techsArray, location }) => {
    TechsList.propTypes = {
        techsArray: PropTypes.array.isRequired,
        location: PropTypes.string.isRequired,
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".7rem",
            }}>
            {techsArray.map((tech, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".8rem",
                        "& svg": {
                            maxWidth: theme.maxWidth.techIcon,
                            maxHeight: theme.maxWidth.techIcon,
                        },
                    }}>
                    {tech.imgElement}
                    <Typography
                        component="span"
                        color={
                            location === "home" && theme.palette.text.content
                        }>
                        {tech.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default TechsList;
