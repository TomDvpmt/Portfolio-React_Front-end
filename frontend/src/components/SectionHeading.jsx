import { useState, useEffect } from "react";

import { Typography } from "@mui/material";

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
        <Typography variant="h2" component="h2" id={slug} pt="4rem" pb="2rem">
            {title}
        </Typography>
    );
};

export default SectionHeading;
