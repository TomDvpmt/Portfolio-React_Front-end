import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <PageWrapper />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "*",
                    element: <Error404 />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router}>Router</RouterProvider>;
};

export default Router;
