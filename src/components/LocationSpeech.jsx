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
                J'habite en{" "}
                <Typography component="span" color="secondary">
                    France
                </Typography>
                , avec une mobilité principale sur la région Rhône-Alpes, mais
                aussi, ponctuellement, sur tout le territoire français.
            </Typography>
            <Typography color={theme.palette.text.content}>
                Je privilégie le travail en équipe et{" "}
                <Typography component="span" color="secondary">
                    sur site
                </Typography>
                , mais je reste ouvert au{" "}
                <Typography component="span" color="secondary">
                    télétravail
                </Typography>
                .
            </Typography>
        </Box>
    );
});

export default LocationSpeech;
