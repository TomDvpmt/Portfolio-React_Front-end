import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

import { Box, TextField, Button, Typography } from "@mui/material";

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

    return (
        <Box component="section">
            <SectionHeading slug="contact" />
            <Box
                component="form"
                sx={{
                    width: "100%",
                    maxWidth: theme.maxWidth.form,
                    m: "0 auto 4rem",
                    p: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
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
                <TextField
                    fullWidth
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    type="text"
                    label="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="dense"
                    id="company"
                    name="company"
                    type="text"
                    label="Entreprise"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    type="email"
                    label="Adresse e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="dense"
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Numéro de téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    multiline
                    minRows={8}
                    margin="dense"
                    id="content"
                    name="content"
                    type="text"
                    label="Votre message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
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
