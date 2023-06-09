import { useState } from "react";

import ContactFormRequiredLabel from "./ContactFormRequiredLabel";

import theme from "../styles/theme";
import { Box, Typography, TextField, Button } from "@mui/material";

import PropTypes from "prop-types";

const ContactForm = ({ tabIndex }) => {
    ContactForm.propTypes = {
        tabIndex: PropTypes.number.isRequired,
    };

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
    return (
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
                <Typography sx={inputLabelStyle}>
                    <ContactFormRequiredLabel label="Nom" />
                    {/* <Typography component="span" color="secondary">
                        *{" "}
                    </Typography>
                    Nom */}
                </Typography>
                <TextField
                    tabIndex={-1}
                    inputProps={{ tabIndex: tabIndex }}
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
                    tabIndex={-1}
                    inputProps={{ tabIndex: tabIndex }}
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
                    <ContactFormRequiredLabel label="Adresse e-mail" />
                    {/* <Typography component="span" color="secondary">
                        *{" "}
                    </Typography>
                    Adresse e-mail */}
                </Typography>
                <TextField
                    tabIndex={-1}
                    inputProps={{ tabIndex: tabIndex }}
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
                    tabIndex={-1}
                    inputProps={{ tabIndex: tabIndex }}
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
                    tabIndex={-1}
                    inputProps={{ tabIndex: tabIndex }}
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
                tabIndex={tabIndex}
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ width: "max-content", alignSelf: "end" }}>
                Envoyer
            </Button>
        </Box>
    );
};

export default ContactForm;
