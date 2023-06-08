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
                    maxHeight: {
                        lg: "100vh",
                    },
                    width: "100%",

                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "center",
                    // flexWrap: "nowrap",
                    // gap: "4rem",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        lg: "100% 100% 100%",
                    },
                    alignItems: {
                        lg: "center",
                    },
                    overflow: "hidden",
                    "& section": {
                        minWidth: "100%",
                        p: {
                            xs: "0 .3rem",
                            md: "0 .7rem",
                            lg: "0 1.3rem",
                        },
                    },
                }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default PageWrapper;
