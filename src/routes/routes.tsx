import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Home from "../pages/home/Home";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <><Home /></>,
                // element: <ProtectedRoute><Home /></ProtectedRoute>,
            }
        ],
    },
    {
        path: '/login',
        element: <Login />,
    }
])


export default routes;