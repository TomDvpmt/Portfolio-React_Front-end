import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { addActiveClass, createObserver } from "../utils/navLinks";

import theme from "../styles/theme";
import {
    AppBar,
    Toolbar,
    Link,
    Typography,
    useMediaQuery,
} from "@mui/material";

import PropTypes from "prop-types";

const NavBar = ({ setSectionPosition }) => {
    NavBar.propTypes = {
        setSectionPosition: PropTypes.func.isRequired,
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    useEffect(() => {
        const aboutSection = document.getElementById("about");
        const aboutLink = document.getElementById("about-link");
        createObserver(aboutSection, aboutLink);

        const projectsSection = document.getElementById("projects");
        const projectsLink = document.getElementById("projects-link");
        createObserver(projectsSection, projectsLink);

        const contactSection = document.getElementById("contact");
        const contactLink = document.getElementById("contact-link");
        createObserver(contactSection, contactLink);
    }, []);

    const handleClick = (e) => {
        const links = e.currentTarget.children;
        const link = e.target;

        addActiveClass(link, links);

        if (isLargeScreen) {
            switch (e.target.id) {
                case "about-link":
                    setSectionPosition(0);
                    break;
                case "projects-link":
                    setSectionPosition(1);
                    break;
                case "contact-link":
                    setSectionPosition(2);
                    break;
                default:
                    setSectionPosition(0);
            }
        } else {
            const sectionId = link.id.split("-")[0];
            const destination = document.getElementById(sectionId);
            destination.scrollIntoView({
                behavior: "smooth",
                inline: "nearest",
            });
        }
    };
    return (
        <AppBar
            position="sticky"
            sx={{ bgcolor: theme.palette.primary.main, alignItems: "center" }}>
            <Toolbar
                component="nav"
                sx={{
                    width: "100%",
                    maxWidth: theme.maxWidth.nav,
                    justifyContent: isSmallScreen ? "space-between" : "center",
                }}>
                {isSmallScreen && (
                    <Link href="/" underline="none">
                        <Typography
                            sx={{
                                color: theme.palette.text.title,
                                fontSize: "1rem",
                                textAlign: "center",
                            }}>
                            <Typography
                                component="span"
                                textTransform="uppercase">
                                Portfolio
                            </Typography>
                            <Typography component="span" color="secondary">
                                {" | "}
                            </Typography>
                            <Typography component="span">
                                Thomas Boussion
                            </Typography>
                        </Typography>
                    </Link>
                )}
                <Typography
                    id="nav-links"
                    sx={{
                        color: theme.palette.text.title,
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        "& a": {
                            color: theme.palette.text.title,
                            transition: "border-bottom-width ease 300ms",
                            "&:hover": {
                                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                            },
                            textTransform: "uppercase",
                        },
                        "& .active-anchor": {
                            borderBottom: `1px solid ${theme.palette.secondary.main}`,
                        },
                    }}
                    onClick={handleClick}>
                    <Link component={NavLink} id="about-link" underline="none">
                        À propos
                    </Link>
                    <Link
                        component={NavLink}
                        id="projects-link"
                        underline="none">
                        Projets
                    </Link>
                    <Link
                        component={NavLink}
                        id="contact-link"
                        underline="none">
                        Contact
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
