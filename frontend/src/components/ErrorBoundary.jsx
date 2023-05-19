import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { Box, Typography, ButtonGroup, Button, Link } from "@mui/material";

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
            <Typography component="h1" variant="h1">
                {errorMessage}
            </Typography>
            <ButtonGroup variant="text" size="small">
                <Button onClick={() => navigate(-1)}>Revenir en arrière</Button>
                <Button>
                    <Link component={RouterLink} to="/" underline="none">
                        Revenir à l'accueil
                    </Link>
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default ErrorBoundary;
