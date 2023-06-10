import { useState, useEffect, useContext } from "react";
import PositionContext from "../contexts/PositionContext";

import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import LocationSpeech from "../components/LocationSpeech";

import ContactForm from "../components/ContactForm";
import TitleLine from "../components/TitleLine";

import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
// import { LinkedIn, GitHub } from "@mui/icons-material";

import theme from "../styles/theme";

const Contact = () => {
    const sectionPosition = useContext(PositionContext);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const [tabIndex, setTabIndex] = useState(-1);

    useEffect(() => {
        setTabIndex(sectionPosition === 2 ? 0 : -1);
    }, [sectionPosition]);

    // const socialIconStyle = {
    //     color: theme.palette.text.title,
    // };

    return (
        <>
            <Box component="section" mb={{ xs: "4rem", lg: "0" }}>
                {!isLargeScreen && <SectionHeading slug="contact" />}
                <Box
                    mt={{ xs: "4rem", lg: "0" }}
                    display="flex"
                    flexDirection={{ xs: "column", lg: "row" }}
                    alignItems={{ xs: "center", lg: "flex-start" }}
                    justifyContent="center"
                    gap={{ xs: "4rem", lg: "8rem" }}>
                    <Box
                        sx={{
                            maxWidth: "500px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5rem",
                        }}>
                        <SocialLinks tabIndex={tabIndex} />
                        <LocationSpeech />
                    </Box>
                    <ContactForm tabIndex={isLargeScreen ? tabIndex : 0} />
                </Box>
            </Box>
        </>
    );
};

export default Contact;
