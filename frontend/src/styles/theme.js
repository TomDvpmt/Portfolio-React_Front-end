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
            // react
            main: "#61dafb",
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
            grey: "#d9d9d9",
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
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "#f5f5f5",
                    // "&:hover": {
                    //     backgroundColor: "#f5f5f5",
                    // },
                },
                input: {
                    backgroundColor: "#f5f5f5",
                },
            },
        },
    },
    maxWidth: {
        nav: "1200px",
        main: "1200px",
        section: "800px",
        aboutSpeech: "800px",
        // homeProjectCard: "800px",
        techIcon: "24px",
        carousel: "1200px",
        form: "700px",
    },
});

export default theme;
