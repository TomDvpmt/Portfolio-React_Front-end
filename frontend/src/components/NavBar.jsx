import { useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        const aboutLink = document.getElementById("about-link");
        aboutLink.classList.add("active-anchor");
    }, []);

    const handleClick = (e) => {
        const links = e.currentTarget.children;
        const link = e.target;

        if (!link.classList.contains("active-anchor")) {
            Array.from(links).forEach((link) =>
                link.classList.remove("active-anchor")
            );
            link.classList.add("active-anchor");
        }

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
        }
    };
    return (
        <AppBar
            position="sticky"
            sx={{ bgcolor: theme.palette.primary.main, alignItems: "center" }}>
            <Toolbar
                sx={{
                    width: "100%",
                    maxWidth: theme.maxWidth.nav,
                    justifyContent: isSmallScreen ? "space-between" : "center",
                }}>
                {isSmallScreen && (
                    <Link href="/" underline="none">
                        <Typography component="h1" variant="h1">
                            <Typography
                                component="span"
                                textTransform="uppercase">
                                Portfolio
                            </Typography>
                            <Typography component="span">{" | "}</Typography>
                            <Typography component="span">
                                Thomas Boussion
                            </Typography>
                        </Typography>
                    </Link>
                )}
                <Typography
                    sx={{
                        color: theme.palette.text.title,
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        "& a": {
                            color: theme.palette.text.title,
                            transition: "border-bottom-width ease 300ms",
                            "&:hover": {
                                borderBottom: `1px solid ${theme.palette.secondary.main}`,
                            },
                        },
                        "& .active-anchor": {
                            borderBottom: `1px solid ${theme.palette.secondary.main}`,
                        },
                    }}
                    onClick={handleClick}>
                    <Link
                        component={NavLink}
                        id="about-link"
                        to={!isLargeScreen && "/#about"}
                        underline="none">
                        À propos
                    </Link>
                    <Link
                        component={NavLink}
                        id="projects-link"
                        to={!isLargeScreen && "/#projects"}
                        underline="none">
                        Projets
                    </Link>
                    <Link
                        component={NavLink}
                        id="contact-link"
                        to={!isLargeScreen && "/#contact"}
                        underline="none">
                        Contact
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
