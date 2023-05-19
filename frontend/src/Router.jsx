import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Error404 from "./pages/Error404";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/projects/:projectId",
            element: <Project />,
        },
        {
            path: "*",
            element: <Error404 />,
        },
    ]);

    return <RouterProvider router={router}>Router</RouterProvider>;
};

export default Router;
