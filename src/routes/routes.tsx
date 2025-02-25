import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Home from "../pages/home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ],
    },
    {
        path: '/login',
        element: <Login />,
    }
])


export default routes;