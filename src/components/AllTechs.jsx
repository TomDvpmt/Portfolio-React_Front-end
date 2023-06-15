import TechsList from "./TechsList";

import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const AllTechs = ({ typesArray, techsArray, hasTitle }) => {
    AllTechs.propTypes = {
        typesArray: PropTypes.array.isRequired,
        techsArray: PropTypes.array.isRequired,
        hasTitle: PropTypes.bool.isRequired,
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: {
                    // xs: "space-evenly",
                    md: "center",
                },
                flexWrap: "wrap",
                gap: {
                    xs: "1rem",
                    sm: "2rem",
                    md: "4rem",
                    lg: "6rem",
                    xl: "8rem",
                },
            }}>
            {typesArray.map((type) => (
                <Box
                    key={type}
                    sx={{
                        flexGrow: {
                            xs: "1",
                            md: "0",
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: {
                            xs: "1rem",
                            sm: "1.5rem",
                            md: "2rem",
                        },
                    }}>
                    {hasTitle && (
                        <Typography
                            mt={{ xs: "1rem", sm: "0" }}
                            fontWeight="700"
                            textTransform="uppercase"
                            color={theme.palette.text.title}>
                            {type}
                        </Typography>
                    )}
                    <TechsList
                        techsArray={techsArray.filter(
                            (tech) => tech.type === type
                        )}
                        location="about"
                    />
                </Box>
            ))}
        </Box>
    );
};

export default AllTechs;
