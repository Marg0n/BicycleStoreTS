import { App } from "antd";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
    }
])


export default routes;