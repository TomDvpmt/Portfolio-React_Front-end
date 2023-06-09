import TechsList from "./TechsList";

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
                    <TechsList
                        techsArray={techsArray.filter(
                            (tech) => tech.type === type
                        )}
                        location="about"
                    />
                </Box>
            ))}
        </>
    );
};

export default Techs;
