import Techs from "../components/Techs";

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
                    pt: "7rem",
                    maxWidth: theme.maxWidth.about,
                }}>
                <Box
                    sx={{
                        mb: "8rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "3rem",
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
                            // id="about"
                            color={theme.palette.text.title}
                            sx={{
                                mb: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                "& span": {
                                    fontSize: "2rem",
                                    "&.job span": {
                                        fontSize: "3rem",
                                    },
                                },
                            }}>
                            <Typography component="span">
                                Thomas Boussion
                            </Typography>
                            <Box
                                className="job"
                                component="span"
                                textTransform="uppercase">
                                <Typography component="span" color="secondary">
                                    Développeur{" "}
                                </Typography>
                                <Typography
                                    component="span"
                                    color={theme.palette.tertiary.main}>
                                    React
                                </Typography>
                            </Box>
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}>
                            <Typography
                                textAlign="justify"
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
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "8rem",
                    }}>
                    <Techs
                        typesArray={typesArray}
                        techsArray={ALL_TECHS}
                        hasTitle={true}
                    />
                </Box>
            </Box>
        </>
    );
};

export default About;
