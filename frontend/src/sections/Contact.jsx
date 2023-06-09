import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

import theme from "../styles/theme";

const Contact = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setValidationMessage("");
        setErrorMessage("");

        const mailData = {
            name,
            company,
            email,
            phone,
            content,
        };

        fetch("/API/mail/send", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(mailData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Impossible d'envoyer le message. Veuillez réessayer ultérieurement ou me contacter à l'adresse suivante : thomasboussion@hotmail.com`
                    );
                }
                setName("");
                setCompany("");
                setEmail("");
                setPhone("");
                setContent("");
                setValidationMessage("Message envoyé.");
            })
            .catch((error) => {
                setErrorMessage(error.message);
                console.log(error);
            });
    };

    const inputLabelStyle = {
        color: theme.palette.text.title,
        fontSize: ".9rem",
    };

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
                        flexDirection: "column",
                        gap: ".5rem",
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}>
                        <Box
                            sx={{
                                height: "1px",
                                width: "30px",
                                bgcolor: theme.palette.secondary.main,
                            }}
                        />
                        <Typography
                            color={theme.palette.text.title}
                            fontWeight="700">
                            Situation géographique
                        </Typography>
                    </Box>
                    <Typography color={theme.palette.text.content}>
                        J'habite en France, en région{" "}
                        <Typography component="span" color="secondary">
                            Rhône-Alpes
                        </Typography>
                        , mais suis mobile et peux travailler à distance.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <IconButton sx={socialIconStyle}>
                        <LinkedIn fontSize="large" />
                    </IconButton>
                    <IconButton sx={socialIconStyle}>
                        <GitHub fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
            <Box
                component="form"
                sx={{
                    width: "100%",
                    maxWidth: theme.maxWidth.form,
                    // m: "0 auto 4rem",
                    // p: "0 1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.1rem",
                    "& .MuiFormControl-root": {
                        mt: "0",
                    },
                }}
                onSubmit={handleSubmit}>
                {validationMessage && (
                    <Typography color={theme.palette.success.main}>
                        {validationMessage}
                    </Typography>
                )}
                {errorMessage && (
                    <Typography color={theme.palette.warning.main}>
                        {errorMessage}
                    </Typography>
                )}
                <Box>
                    <Typography sx={inputLabelStyle}>Nom *</Typography>
                    <TextField
                        required
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        color="secondary"
                        id="name"
                        name="name"
                        type="text"
                        // placeholder="Votre nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>
                <Box>
                    <Typography sx={inputLabelStyle}>Entreprise</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        color="secondary"
                        id="company"
                        name="company"
                        type="text"
                        // placeholder="Nom de votre entreprise"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </Box>
                <Box>
                    <Typography sx={inputLabelStyle}>
                        Adresse e-mail *
                    </Typography>
                    <TextField
                        required
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        color="secondary"
                        id="email"
                        name="email"
                        type="email"
                        // placeholder="Votre adresse e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box>
                    <Typography sx={inputLabelStyle}>
                        Numéro de téléphone
                    </Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        color="secondary"
                        id="phone"
                        name="phone"
                        type="tel"
                        // placeholder="Votre numéro de téléphone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Box>
                <Box>
                    <Typography sx={inputLabelStyle}>Votre message</Typography>
                    <TextField
                        required
                        multiline
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        color="secondary"
                        minRows={6}
                        id="content"
                        name="content"
                        type="text"
                        // placeholder="Votre message"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ width: "max-content", alignSelf: "end" }}>
                    Envoyer
                </Button>
            </Box>
        </Box>
    );
};

export default Contact;
