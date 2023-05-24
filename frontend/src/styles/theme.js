import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        h1: {
            fontSize: "3rem",
            textAlign: "center",
        },
    },
    palette: {
        success: {
            // green
            main: "#007022",
        },
        warning: {
            // orange-red
            main: "#EB3E23",
        },
    },
    maxWidth: {
        nav: "1200px",
        main: "1200px",
        section: "800px",
        carousel: "800px",
        form: "700px",
    },
});

export default theme;
