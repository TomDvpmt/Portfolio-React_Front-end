import AllTechs from "../components/AllTechs";

import ALL_TECHS from "../assets/data/techs";
import profilePicture from "../assets/img/profile-picture_square.jpg";

import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

const About = () => {
    const typesArray = ["languages", "back", "front", "autres"];

    return (
        <>
            <Box
                id="about"
                component="section"
                sx={{
                    m: "0 auto",
                    pt: {
                        xs: "4rem !important",
                        lg: "0",
                    },
                    maxWidth: theme.maxWidth.about,
                }}>
                <Box
                    sx={{
                        mb: "8rem",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "row",
                        },
                        alignItems: "center",
                        justifyContent: "center",
                        gap: {
                            xs: "2rem",
                            lg: "3rem",
                        },
                    }}>
                    <Box
                        sx={{
                            "& img": {
                                maxWidth: "150px",
                                borderRadius: "50%",
                            },
                        }}>
                        <img src={profilePicture} alt="Thomas Boussion" />
                    </Box>
                    <Box>
                        <Typography
                            component="h2"
                            color={theme.palette.text.title}
                            sx={{
                                mb: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: {
                                    xs: "center",
                                    sm: "start",
                                },
                                "& span": {
                                    fontSize: {
                                        xs: "1.5rem",
                                        lg: "2rem",
                                    },
                                    "&.job span": {
                                        fontSize: {
                                            xs: "2rem",
                                            lg: "3rem",
                                        },
                                    },
                                },
                            }}>
                            <Typography component="span">
                                Thomas Boussion
                            </Typography>
                            <Typography
                                className="job"
                                component="span"
                                textTransform="uppercase"
                                sx={{
                                    mt: {
                                        xs: "1rem",
                                        sm: "0",
                                    },
                                    textAlign: {
                                        xs: "center",
                                        sm: "left",
                                    },
                                }}>
                                <Typography component="span" color="secondary">
                                    Développeur{" "}
                                </Typography>
                                <Typography
                                    component="span"
                                    color={theme.palette.tertiary.main}>
                                    React
                                </Typography>
                            </Typography>
                        </Typography>
                        <Box
                            sx={{
                                maxWidth: theme.maxWidth.aboutSpeech,
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}>
                            <Typography
                                textAlign={{ xs: "left", lg: "justify" }}
                                color={theme.palette.text.content}>
                                Après l'apprentissage du développement web en
                                autodidacte, ma formation chez OpenClassrooms
                                m'a permis de consolider les acquis et de me
                                spécialiser sur la stack{" "}
                                <Typography
                                    component="span"
                                    fontWeight="700"
                                    color="secondary">
                                    MERN
                                </Typography>
                                .
                            </Typography>
                            <Typography
                                textAlign="justify"
                                color={theme.palette.text.content}>
                                Je cherche un poste de développeur front-end
                                mais souhaite également, à terme, développer mes
                                compétences en back-end.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <AllTechs
                    typesArray={typesArray}
                    techsArray={ALL_TECHS}
                    hasTitle={true}
                />
            </Box>
        </>
    );
};

export default About;
