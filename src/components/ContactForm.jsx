import { useState } from "react";

import ContactFormRequiredLabel from "./ContactFormRequiredLabel";

import { API_BASE_URI } from "../config/API";

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

    const resetMessages = () => {
        setValidationMessage("");
        setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        resetMessages();

        const mailData = {
            name,
            company,
            email,
            phone,
            content,
        };

        fetch(`${API_BASE_URI}/API/mail/send`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(mailData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Impossible d'envoyer le message. Veuillez réessayer ultérieurement ou me contacter à l'adresse suivante : thomas.boussion.dev@gmail.com`
                    );
                }
                setName("");
                setCompany("");
                setEmail("");
                setPhone("");
                setContent("");
                setValidationMessage(
                    "Votre message a bien été envoyé. J'y répondrai dans les plus brefs délais !"
                );
            })
            .catch((error) => {
                setErrorMessage(error.message);
                console.log(error);
            });
    };

    const inputLabelStyle = {
        color: theme.palette.text.title,
    };
    return (
        <Box
            component="form"
            sx={{
                width: "100%",
                maxWidth: theme.maxWidth.form,
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => resetMessages()}
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
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    onFocus={() => resetMessages()}
                />
            </Box>
            <Box>
                <Typography sx={inputLabelStyle}>
                    <ContactFormRequiredLabel label="Adresse e-mail" />
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => resetMessages()}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => resetMessages()}
                />
            </Box>
            <Box>
                <Typography sx={inputLabelStyle}>
                    <ContactFormRequiredLabel label="Votre message" />
                </Typography>
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
                    onFocus={() => resetMessages()}
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
