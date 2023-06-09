import { useState, useEffect, useContext } from "react";
import PositionContext from "../contexts/PositionContext";

// import SectionHeading from "../components/SectionHeading";

import ContactForm from "../components/ContactForm";
import TitleLine from "../components/TitleLine";

import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

import theme from "../styles/theme";

const Contact = () => {
    const sectionPosition = useContext(PositionContext);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const [tabIndex, setTabIndex] = useState(-1);

    useEffect(() => {
        setTabIndex(sectionPosition === 2 ? 0 : -1);
    }, [sectionPosition]);

    const socialIconStyle = {
        color: theme.palette.text.title,
    };

    return (
        <Box
            component="section"
            id="contact"
            display="flex"
            justifyContent="center"
            gap="8rem">
            {/* <SectionHeading slug="contact" /> */}
            <Box
                sx={{
                    maxWidth: "500px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5rem",
                }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <IconButton
                        tabIndex={tabIndex}
                        sx={socialIconStyle}
                        href="https://www.linkedin.com/in/thomas-boussion-b273a6150/"
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
                <Box
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
                        <TitleLine />
                        <Typography
                            color={theme.palette.text.title}
                            fontWeight="700">
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
            </Box>
            <ContactForm tabIndex={isLargeScreen ? tabIndex : 0} />
        </Box>
    );
};

export default Contact;
