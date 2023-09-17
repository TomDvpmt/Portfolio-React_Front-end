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
        tertiary: {
            // React
            main: "#61dafb",
        },
        success: {
            // main: "#007022", // green
            main: "#61dafb", // React
        },
        warning: {
            // orange-red
            main: "#EB3E23",
        },
        background: {
            // dark blue
            default: "#0D2134",
            grey: "#d9d9d9",
            darkGrey: "#757575",
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
        },
        h2: {
            color: theme.palette.text.title,
        },
        h3: {
            color: theme.palette.text.title,
            fontSize: "1.5rem",
        },
        h4: {
            fontSize: "1rem",
            fontWeight: "700",
            textTransform: "uppercase",
        },
        body1: {
            fontSize: ".8rem",
            [theme.breakpoints.up("sm")]: {
                fontSize: ".9rem",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "1rem",
            },
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily:
                    "'Raleway', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "#f5f5f5",
                },
            },
        },
    },
    maxWidth: {
        nav: "1200px",
        section: "800px",
        aboutSection: "1350px",
        aboutSpeech: "800px",
        aboutImg: "150px",
        toolsFeaturesTechsList: "650px",
        techIcon: "24px",
        carousel: "1200px",
        form: "700px",
    },
});

export default theme;
