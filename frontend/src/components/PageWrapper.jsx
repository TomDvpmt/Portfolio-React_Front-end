import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

import ScrollToHashElement from "./ScrollToHashElement";

import { Box } from "@mui/material";

const PageWrapper = () => {
    return (
        <>
            <NavBar />
            <ScrollToHashElement />
            <Box component="main">
                <Outlet />
            </Box>
        </>
    );
};

export default PageWrapper;
