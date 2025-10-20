import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'/about',
                Component: About
            }
        ]
    }
]);