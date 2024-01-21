import { AppstoreOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import Dashboard from '../pages/dashboard';
import CreateAdmin from '../pages/adminPages/CreateAdmin';
import CreateTeacher from '../pages/adminPages/CreateTeacher';
import CreateStudent from '../pages/adminPages/CreateStudent';
import { TUserRoutePath } from '../types';


export const adminPaths: TUserRoutePath[] = [
  {
    path: '/',
    title: 'Dashboard',
    icon: AppstoreOutlined,
    element: <Dashboard />
  },
  {
    title: 'User Management',
    icon: UsergroupAddOutlined,
    child: [
      {
        path: '/create-admin',
        title: 'Create Admin',
        element: <CreateAdmin />
      },
      {
        path: '/create-teacher',
        title: 'Create Teacher',
        element: <CreateTeacher />
      },
      {
        path: '/create-student',
        title: 'Create Student',
        element: <CreateStudent />
      },
    ]
  }
];