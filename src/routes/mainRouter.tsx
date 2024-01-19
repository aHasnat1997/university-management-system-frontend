import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/auth/LogIn";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/log-in',
        element: <LogIn />
    }
]);

export default router;