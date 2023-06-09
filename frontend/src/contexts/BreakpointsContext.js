import { createContext } from "react";

import theme from "../styles/theme";
import { useMediaQuery } from "@mui/material";

const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

const BreakpointsContext = createContext({
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
});

export default BreakpointsContext;
