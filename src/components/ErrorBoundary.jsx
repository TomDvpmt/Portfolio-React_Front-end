import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import theme from "../styles/theme";
import { Box, Typography, Button } from "@mui/material";

import PropTypes from "prop-types";

const ErrorBoundary = ({ page }) => {
    ErrorBoundary.propTypes = {
        page: PropTypes.string.isRequired,
    };

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        let message = "";
        switch (page) {
            case "project":
                message =
                    "Aïe ! Impossible de récupérer les données du projet.";
                break;
            case "error404":
                message = "Page introuvable.";
                break;
            default:
                message = "Quelque chose s'est mal passé.";
        }
        setErrorMessage(message);
    }, [page]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                alignItems: "center",
            }}>
            <Typography
                component="h1"
                variant="h1"
                className="error-message"
                color={theme.palette.text.title}
                fontSize="5rem">
                {errorMessage}
            </Typography>
            <Button
                color="secondary"
                variant="outlined"
                onClick={() => navigate("/")}>
                Revenir à l'accueil
            </Button>
        </Box>
    );
};

export default ErrorBoundary;
