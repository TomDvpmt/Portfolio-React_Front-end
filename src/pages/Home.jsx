import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        location.hash && navigate(location.hash);
    }, [location.hash, navigate]);

    return (
        <>
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
