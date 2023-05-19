import Router from "./Router";

import ProjectsContext from "./contexts/ProjectsContext";
import projects from "./assets/data/projects";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ProjectsContext.Provider value={projects}>
                <CssBaseline />
                <Router />
            </ProjectsContext.Provider>
        </ThemeProvider>
    );
};

export default App;
