import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

import ScrollToHashElement from "./ScrollToHashElement";

import { Box } from "@mui/material";

const PageWrapper = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}>
            <ScrollToHashElement />
            <NavBar />
            <Box
                component="main"
                sx={{
                    flexGrow: "1",
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
