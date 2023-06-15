import { useState, useEffect } from "react";

import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const SectionHeading = ({ slug }) => {
    SectionHeading.propTypes = {
        slug: PropTypes.string.isRequired,
    };

    const [title, setTitle] = useState("");

    useEffect(() => {
        switch (slug) {
            case "about":
                setTitle("À propos");
                break;
            case "skills":
                setTitle("Compétences");
                break;
            case "projects":
                setTitle("Projets");
                break;
            case "contact":
                setTitle("Contact");
                break;
            default:
                setTitle("");
        }
    }, [slug]);
    return (
        <Box
            mt="4rem"
            pt={{ xs: "2rem", lg: "0" }}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
            }}>
            <Box
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    height: "1px",
                    flexGrow: "1",
                }}
            />

            <Typography variant="h2" component="h2">
                {title}
            </Typography>

            <Box
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    height: "1px",
                    flexGrow: { xs: "1", sm: "6" },
                }}
            />
        </Box>
    );
};

export default SectionHeading;
