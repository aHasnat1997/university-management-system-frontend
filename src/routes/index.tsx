import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/auth/LogIn";
import routeGenerator from "../utils/routeGenerator";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: routeGenerator()
    },
    {
        path: '/log-in',
        element: <LogIn />
    }
]);

export default router;