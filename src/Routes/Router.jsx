import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NewsByCategory from "../Layouts/News/NewsByCategory";

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
                path: '/about',
                Component: About
            },
            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                Component: NewsByCategory
            },
        ]

    },
    {
        path: '/*',
        element: <h1>Error 404</h1>
    }
]);