import Router from "./Router";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
};

export default App;
