import { NavLink } from "react-router-dom";

import theme from "../styles/theme";
import { AppBar, Toolbar, Link, Typography } from "@mui/material";

const NavBar = () => {
    const handleClick = (e) => {
        const links = e.currentTarget.children;
        const link = e.target;

        if (!link.classList.contains("active-anchor")) {
            Array.from(links).forEach((link) =>
                link.classList.remove("active-anchor")
            );
            link.classList.add("active-anchor");
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
                    justifyContent: "space-between",
                }}>
                <Link href="/" underline="none">
                    <Typography component="h1" variant="h1">
                        <Typography
                            component="span"
                            color="white"
                            textTransform="uppercase">
                            Portfolio
                        </Typography>
                        {/* <Typography component="span" color="white">
                            Thomas{" "}
                        </Typography>
                        <Typography
                            component="span"
                            color={theme.palette.secondary.main}>
                            Boussion
                        </Typography> */}
                    </Typography>
                </Link>
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
                    <Link component={NavLink} to="/#about" underline="none">
                        À propos
                    </Link>
                    <Link component={NavLink} to="/#projects" underline="none">
                        Projets
                    </Link>
                    <Link component={NavLink} to="/#contact" underline="none">
                        Contact
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
