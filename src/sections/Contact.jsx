import { useState, useEffect, useContext, forwardRef } from "react";
import PositionContext from "../contexts/PositionContext";

import { API_BASE_URI } from "../config/API";

import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import LocationSpeech from "../components/LocationSpeech";

import ContactForm from "../components/ContactForm";

import { Box, useMediaQuery } from "@mui/material";

import theme from "../styles/theme";

const Contact = forwardRef((props, ref) => {
    const { sectionPosition } = useContext(PositionContext);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        fetch(`${API_BASE_URI}/API/config/initialize`)
            .then((response) => response.json())
            .then((data) => console.log(data.message))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        isLargeScreen && setTabIndex(sectionPosition === 2 ? 0 : -1);
    }, [isLargeScreen, sectionPosition]);

    return (
        <>
            <Box
                ref={ref}
                id="contact"
                component="section"
                mb={{ xs: "4rem", lg: "0" }}>
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
});

export default Contact;
