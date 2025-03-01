import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Page404 from "../pages/shared/Page404";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
        // element: <ProtectedRoute><Home /></ProtectedRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
