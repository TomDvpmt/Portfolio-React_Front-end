import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const Techs = ({ typesArray, techsArray, hasTitle }) => {
    Techs.propTypes = {
        typesArray: PropTypes.array.isRequired,
        techsArray: PropTypes.array.isRequired,
        hasTitle: PropTypes.bool.isRequired,
    };
    return (
        <>
            {typesArray.map((type) => (
                <Box
                    key={type}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2rem",
                    }}>
                    {hasTitle && (
                        <Typography
                            component="h3"
                            fontWeight="700"
                            textTransform="uppercase"
                            color={theme.palette.text.title}>
                            {type}
                        </Typography>
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}>
                        {techsArray
                            .filter((tech) => tech.type === type)
                            .map((tech, index) => (
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
                                        color={theme.palette.text.content}>
                                        {tech.label}
                                    </Typography>
                                </Box>
                            ))}
                    </Box>
                </Box>
            ))}
        </>
    );
};

export default Techs;
