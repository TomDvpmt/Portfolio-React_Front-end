import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            // dark blue
            main: "#0D2134",
        },
        secondary: {
            // yellow
            main: "#FEAB2D",
        },
        success: {
            // green
            main: "#007022",
        },
        warning: {
            // orange-red
            main: "#EB3E23",
        },
        background: {
            // dark blue
            default: "#0D2134",
        },
        text: {
            title: "#ffffff",
            content: "#d9d9d9",
        },
    },
});

theme = createTheme(theme, {
    typography: {
        h1: {
            color: theme.palette.text.title,
            fontSize: "1rem",
            textAlign: "center",
        },
        h2: {
            color: theme.palette.text.title,
        },
        h3: {
            color: theme.palette.text.title,
        },
        h4: {
            fontSize: "1rem",
            fontWeight: "700",
            textTransform: "uppercase",
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
        about: "800px",
        carousel: "1200px",
        form: "700px",
        techIcon: "24px",
    },
});

export default theme;
