import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        h1: {
            fontSize: "3rem",
            textAlign: "center",
        },
        h4: {
            fontSize: "1rem",
            fontWeight: "700",
            textTransform: "uppercase",
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
        background: {
            default: "#f5f5f5",
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                },
            },
        },
    },
    maxWidth: {
        nav: "1200px",
        main: "1200px",
        section: "800px",
        carousel: "1200px",
        form: "700px",
        techIcon: "24px",
    },
});

export default theme;
