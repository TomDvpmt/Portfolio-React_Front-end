import Router from "./Router";
import NavBar from "./layout/NavBar";

import ProjectsContext from "./contexts/ProjectsContext";
import projects from "./assets/projects";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ProjectsContext.Provider value={projects}>
                <CssBaseline />
                <NavBar />
                <Router />
            </ProjectsContext.Provider>
        </ThemeProvider>
    );
};

export default App;
