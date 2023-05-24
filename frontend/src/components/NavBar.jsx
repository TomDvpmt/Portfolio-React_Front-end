import { NavLink } from "react-router-dom";

import theme from "../styles/theme";
import { AppBar, Toolbar, Box, Button, Link, Typography } from "@mui/material";

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
        <AppBar position="sticky" sx={{ alignItems: "center" }}>
            <Toolbar
                sx={{
                    width: "100%",
                    maxWidth: theme.maxWidth.nav,
                    justifyContent: "space-between",
                }}>
                <Typography component="h1">
                    <Link href="/" underline="none" sx={{ color: "inherit" }}>
                        Thomas Boussion
                    </Link>
                </Typography>
                <Box
                    sx={{
                        "& .active-anchor": {
                            textDecoration: "underline",
                        },
                    }}
                    onClick={handleClick}>
                    <Button component={NavLink} to="/#about" color="inherit">
                        À propos
                    </Button>
                    <Button component={NavLink} to="/#projects" color="inherit">
                        Projets
                    </Button>
                    <Button component={NavLink} to="/#contact" color="inherit">
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
