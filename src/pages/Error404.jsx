import Branding from "../components/Branding";
import ErrorBoundary from "../components/ErrorBoundary";

import theme from "../styles/theme";
import { AppBar, Toolbar, Box } from "@mui/material";

const Error404 = () => {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    minWidth: "100dvw",
                    bgcolor: theme.palette.primary.main,
                    alignItems: "center",
                }}>
                <Toolbar
                    component="nav"
                    sx={{
                        width: "100%",
                        maxWidth: theme.maxWidth.nav,
                        justifyContent: { xs: "center", sm: "flex-start" },
                    }}>
                    <Branding />
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                flexGrow="1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    "& .error-message": {
                        fontSize: { xs: "3rem", md: "5rem" },
                        textAlign: "center",
                    },
                }}>
                <ErrorBoundary page="error404" />
            </Box>
        </>
    );
};

export default Error404;
