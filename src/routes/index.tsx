import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/auth";
import Dashboard from "../pages/dashboard";
import CreateAdmin from "../pages/adminPages/CreateAdmin";
import CreateTeacher from "../pages/adminPages/CreateTeacher";
import CreateStudent from "../pages/adminPages/CreateStudent";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/create-admin',
                element: <CreateAdmin />
            },
            {
                path: '/create-teacher',
                element: <CreateTeacher />
            },
            {
                path: '/create-student',
                element: <CreateStudent />
            }
        ]
    },
    {
        path: '/log-in',
        element: <LogIn />
    }
]);

export default router;