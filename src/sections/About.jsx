import { useState, useEffect, useContext, forwardRef } from "react";
import PositionContext from "../contexts/PositionContext";

import AllTechs from "../components/AllTechs";
import SocialLinks from "../components/SocialLinks";

import ALL_TECHS from "../assets/data/techs";
import profilePicture from "../assets/img/profile/profile-picture_square.jpg";
import CV from "../assets/files/2023_CV_Thomas_Boussion.pdf";

import theme from "../styles/theme";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { PictureAsPdf } from "@mui/icons-material";

const About = forwardRef((props, ref) => {
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const { sectionPosition, setSectionPosition } = useContext(PositionContext);

    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        isLargeScreen && setTabIndex(sectionPosition === 0 ? 0 : -1);
    }, [isLargeScreen, sectionPosition]);

    const typesArray = ["langages", "back-end", "front-end", "autres"];

    const handleContactMe = () => {
        if (isLargeScreen) {
            setSectionPosition(2);
        } else {
            const destination = document.getElementById("contact");
            destination.scrollIntoView({
                behavior: "smooth",
                inline: "nearest",
            });
        }
    };

    return (
        <>
            <Box
                id="about"
                ref={ref}
                component="section"
                sx={{
                    m: "0 auto",
                    pt: {
                        xs: "5rem !important",
                        lg: "0 !important",
                    },
                }}>
                <Box
                    sx={{
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
                                maxWidth: theme.maxWidth.aboutImg,
                                borderRadius: "50%",
                            },
                        }}>
                        <img src={profilePicture} alt="Thomas Boussion" />
                    </Box>
                    <Box>
                        <Typography
                            component="h1"
                            variant="h1"
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
                                Thomas Boussion{" "}
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
                                Après de multiples expériences professionnelles
                                (édition, restauration, entrepreneuriat dans la
                                menuiserie), je me suis{" "}
                                <strong>reconverti</strong> dans le
                                développement web.
                            </Typography>
                            <Typography
                                textAlign={{ xs: "left", lg: "justify" }}
                                color={theme.palette.text.content}>
                                {" "}
                                J'ai complété mon apprentissage en autodidacte
                                par une <strong>formation</strong> chez
                                OpenClassrooms en 2023, qui m'a permis de me
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
                                textAlign={{ xs: "left", lg: "justify" }}
                                color={theme.palette.text.content}>
                                <strong>Ce qui me motive :</strong> construire
                                en équipe des applications robustes et efficaces
                                !
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    mt="2rem"
                    mb={{
                        xs: "4rem",
                        // md: "6rem",
                        // xl: "8rem",
                    }}
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    justifyContent="center"
                    gap={{
                        xs: "2rem",
                        lg: "3rem",
                    }}>
                    <Box
                        flexGrow="1"
                        maxWidth="600px"
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        justifyContent={{
                            xs: "center",
                            sm: "center",
                            md: "space-evenly",
                        }}
                        gap={{ xs: "1.5rem", sm: "3rem" }}>
                        <SocialLinks tabIndex={tabIndex} />
                        <Box
                            maxWidth={theme.maxWidth.aboutSpeech}
                            display="flex"
                            flexDirection="column"
                            justifyContent={{ xs: "center", sm: "flex-end" }}
                            gap=".5rem">
                            <Button
                                tabIndex={tabIndex}
                                startIcon={<PictureAsPdf />}
                                sx={{ color: theme.palette.text.title }}
                                href={CV}
                                target="_blank">
                                Voir mon CV
                            </Button>
                            <Button
                                tabIndex={tabIndex}
                                color="secondary"
                                variant="contained"
                                onClick={handleContactMe}
                                sx={{ maxWidth: "max-content" }}>
                                Me contacter
                            </Button>
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
});

export default About;
