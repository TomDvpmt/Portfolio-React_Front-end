import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

import ScrollToHashElement from "./ScrollToHashElement";

import theme from "../styles/theme";
import { Box } from "@mui/material";

const PageWrapper = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <ScrollToHashElement />
            <NavBar />
            <Box
                component="main"
                sx={{
                    flexGrow: "1",
                    maxWidth: theme.maxWidth.main,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default PageWrapper;
