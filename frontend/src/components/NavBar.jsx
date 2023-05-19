import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, Link } from "@mui/material";

const NavBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link href="/" underline="none" sx={{ color: "inherit" }}>
                    Thomas Boussion
                </Link>
                <Box
                    sx={{
                        "& .active": {
                            textDecoration: "underline",
                        },
                    }}>
                    <Button component={RouterLink} to="/#about" color="inherit">
                        À propos
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/#projects"
                        color="inherit">
                        Projets
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/#contact"
                        color="inherit">
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
