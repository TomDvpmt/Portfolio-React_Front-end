import { useState, useEffect, useContext } from "react";
import PositionContext from "../contexts/PositionContext";

import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import LocationSpeech from "../components/LocationSpeech";

import ContactForm from "../components/ContactForm";

import { Box, useMediaQuery } from "@mui/material";

import theme from "../styles/theme";

const Contact = () => {
    const { sectionPosition } = useContext(PositionContext);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const [tabIndex, setTabIndex] = useState(-1);

    useEffect(() => {
        setTabIndex(sectionPosition === 2 ? 0 : -1);
    }, [sectionPosition]);

    return (
        <>
            <Box id="contact" component="section" mb={{ xs: "4rem", lg: "0" }}>
                {!isLargeScreen && <SectionHeading slug="contact" />}
                <Box
                    mt={{ xs: "4rem", lg: "0" }}
                    p={{ xs: "0", lg: "0 2rem" }}
                    display="flex"
                    flexDirection={{ xs: "column", lg: "row" }}
                    alignItems={{ xs: "center", lg: "flex-start" }}
                    justifyContent={{ xs: "center", lg: "space-evenly" }}
                    gap={{ xs: "4rem", lg: "2rem" }}>
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
