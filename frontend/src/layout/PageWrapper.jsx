import { Outlet } from "react-router-dom";

import NavBar from "../NavBar";

const PageWrapper = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default PageWrapper;
