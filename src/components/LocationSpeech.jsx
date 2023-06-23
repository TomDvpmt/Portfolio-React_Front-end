import TitleLine from "./TitleLine";

import theme from "../styles/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { forwardRef } from "react";

const LocationSpeech = forwardRef((props, ref) => {
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <Box
            ref={ref}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
            }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                }}>
                {isLargeScreen && <TitleLine />}
                <Typography color={theme.palette.text.title} fontWeight="700">
                    Situation géographique
                </Typography>
            </Box>
            <Typography color={theme.palette.text.content}>
                J'habite en France, avec une mobilité sur la région{" "}
                <Typography component="span" color="secondary">
                    Rhône-Alpes
                </Typography>
                , mais peux aussi travailler à distance.
            </Typography>
        </Box>
    );
});

export default LocationSpeech;
