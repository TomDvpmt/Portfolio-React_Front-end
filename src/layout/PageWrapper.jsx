import { Outlet } from "react-router-dom";

import bgImg from "../assets/img/techs/logo-react.svg";

import { Box } from "@mui/material";

const PageWrapper = () => {
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
                <Outlet />
            </Box>
        </Box>
    );
};

export default PageWrapper;
