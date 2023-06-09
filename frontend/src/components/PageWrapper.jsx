import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

import ScrollToHashElement from "./ScrollToHashElement";

import { Box } from "@mui/material";

const PageWrapper = () => {
    const [sectionPosition, setSectionPosition] = useState(0);

    useEffect(() => {
        console.log(sectionPosition);
    }, [sectionPosition]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <ScrollToHashElement />
            <NavBar setSectionPosition={setSectionPosition} />
            <Box
                component="main"
                sx={{
                    flexGrow: "1",
                    maxHeight: {
                        lg: "100vh",
                    },
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}>
                <Box
                    sx={{
                        flexGrow: "1",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            lg: "100% 100% 100%",
                        },
                        alignItems: "center",

                        "& section": {
                            minWidth: "100%",
                            p: {
                                xs: "0 .3rem",
                                md: "0 .7rem",
                                lg: "0 1.3rem",
                            },
                        },
                        transform: `translateX(${-100 * sectionPosition}%)`,
                        transition: "transform ease 600ms",
                    }}>
                    <Outlet sectionPosition={sectionPosition} />
                </Box>
            </Box>
        </Box>
    );
};

export default PageWrapper;
