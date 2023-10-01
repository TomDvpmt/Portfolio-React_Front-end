import { forwardRef, useContext, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { addActiveClass, createObserver } from "../utils/navLinks";

import PositionContext from "../contexts/PositionContext";

import Branding from "../components/Branding";

import theme from "../styles/theme";
import {
    AppBar,
    Toolbar,
    Link,
    Typography,
    useMediaQuery,
} from "@mui/material";

const NavBar = forwardRef((props, ref) => {
    const { setSectionPosition } = useContext(PositionContext);

    const location = useLocation();

    const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const aboutLink = useRef();
    const projectsLink = useRef();
    const contactLink = useRef();

    const { aboutSection, projectsSection, contactSection } = ref;

    useEffect(() => {
        if (location.pathname === "/") {
            createObserver(aboutSection.current, aboutLink.current);
            !isLargeScreen &&
                createObserver(projectsSection.current, projectsLink.current);
            createObserver(contactSection.current, contactLink.current);
        }
    }, [
        location.pathname,
        aboutSection,
        projectsSection,
        contactSection,
        isLargeScreen,
    ]);

    const handleClick = (e) => {
        const links = e.currentTarget.children;
        const link = e.target;

        addActiveClass(link, links);

        if (isLargeScreen) {
            switch (e.target) {
                case aboutLink.current:
                    setSectionPosition(0);
                    break;
                case projectsLink.current:
                    setSectionPosition(1);
                    break;
                case contactLink.current:
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
            sx={{
                bgcolor: theme.palette.primary.main,
                alignItems: "center",
            }}>
            <Toolbar
                component="nav"
                sx={{
                    width: "100%",
                    maxWidth: theme.maxWidth.nav,
                    justifyContent: isSmallScreen ? "space-between" : "center",
                }}>
                {isSmallScreen && <Branding />}
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
                    <Link
                        ref={aboutLink}
                        component={NavLink}
                        id="about-link"
                        data-testid="nav-link"
                        underline="none">
                        À propos
                    </Link>
                    <Link
                        ref={projectsLink}
                        component={NavLink}
                        id="projects-link"
                        data-testid="nav-link"
                        underline="none">
                        Projets
                    </Link>
                    <Link
                        ref={contactLink}
                        component={NavLink}
                        id="contact-link"
                        data-testid="nav-link"
                        underline="none">
                        Contact
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
});

export default NavBar;
