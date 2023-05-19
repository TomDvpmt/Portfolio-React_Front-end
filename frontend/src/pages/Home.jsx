import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

import { Typography } from "@mui/material";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        location.hash && navigate(location.hash);
    }, []);

    return (
        <>
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
