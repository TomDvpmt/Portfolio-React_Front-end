import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PositionContext from "../contexts/PositionContext";

import NavBar from "../layout/NavBar";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

import { Box } from "@mui/material";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const aboutSection = useRef();
    const projectsSection = useRef();
    const contactSection = useRef();

    const [sectionPosition, setSectionPosition] = useState(0);

    useEffect(() => {
        location.hash && navigate(location.hash);
    }, [location.hash, navigate]);

    useEffect(() => {
        console.log(sectionPosition);
    }, [sectionPosition]);

    return (
        <PositionContext.Provider
            value={{ sectionPosition, setSectionPosition }}>
            <NavBar ref={{ aboutSection, projectsSection, contactSection }} />
            <Box
                sx={{
                    flexGrow: "1",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        lg: "100% 100% 100%",
                    },
                    alignItems: "center",

                    "& section": {
                        minWidth: "100%",
                        p: {
                            xs: "0 .5rem",
                            md: "0 .7rem",
                            lg: "0 1.3rem",
                        },
                    },
                    transform: `translateX(${-100 * sectionPosition}%)`,
                    transition: "transform ease 600ms",
                }}>
                <About ref={aboutSection} />
                <Projects ref={projectsSection} />
                <Contact ref={contactSection} />
            </Box>
        </PositionContext.Provider>
    );
};

export default Home;
