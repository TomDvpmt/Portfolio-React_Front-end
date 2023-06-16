import { useState } from "react";
import { Outlet } from "react-router-dom";

import bgImg from "../assets/img/techs/logo-react.svg";

import PositionContext from "../contexts/PositionContext";

import NavBar from "./NavBar";

import { Box } from "@mui/material";

const PageWrapper = () => {
    const [sectionPosition, setSectionPosition] = useState(0);

    return (
        <Box
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center">
            <Box
                sx={{
                    opacity: "0.03",
                    position: "fixed",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "& img": {
                        maxHeight: "100%",
                        maxWidth: "100%",
                    },
                }}>
                <img src={bgImg} alt="Code background" />
            </Box>
            <NavBar setSectionPosition={setSectionPosition} />

            <Box
                component="main"
                sx={{
                    flexGrow: "1",
                    maxHeight: {
                        lg: "100vh",
                    },
                    overflow: { lg: "hidden" },
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
                                xs: "0 .5rem",
                                md: "0 .7rem",
                                lg: "0 1.3rem",
                            },
                        },
                        transform: `translateX(${-100 * sectionPosition}%)`,
                        transition: "transform ease 600ms",
                    }}>
                    <PositionContext.Provider
                        value={{ sectionPosition, setSectionPosition }}>
                        <Outlet />
                    </PositionContext.Provider>
                </Box>
            </Box>
        </Box>
    );
};

export default PageWrapper;
