import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import logo from '../assets/favicon.png';
import { Outlet } from 'react-router-dom';
import sidebarItemsGenerator from '../utils/sidebarItemsGenerator';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { logOut } from '../redux/features/auth/authSlice';

const { Content, Sider, Header } = Layout;

// const items = [
//     {
//         title: 'Dashboard',
//         icon: AppstoreOutlined
//     },
//     {
//         title: 'User Management',
//         icon: UsergroupAddOutlined,
//         child: [
//             {
//                 title: 'Create Admin'
//             },
//             {
//                 title: 'Create Teacher'
//             },
//             {
//                 title: 'Create Student'
//             },
//         ]
//     }
// ].map(
// (item) => ({
//     key: item.title,
//     icon: React.createElement(item.icon),
//     label: item.title,
//     children: item.child?.map((child) => ({
//         key: child.title,
//         label: child.title,
//     }))
//     }),
// );

const MainLayout: React.FC = () => {
    const userData = useAppSelector((state) => state.userInfo);
    const dispatch = useAppDispatch();
    console.log(userData);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div
                    // className='text-white'
                    style={{
                        margin: '2rem .5rem',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <img src={logo} alt="logo" style={{ width: '3rem', height: '3rem' }} />
                    <h1>University <br /> Management</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['Dashboard']} items={sidebarItemsGenerator()} />
            </Sider>
            <Layout style={{ maxHeight: '100vh', }}>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '0 5rem',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <h2>{userData.email}</h2>
                            <Button onClick={() => dispatch(logOut())}>Log Out</Button>
                        </div>
                    </div>
                </Header>
                <div style={{ overflow: 'auto', height: '100vh' }}>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            className='no-scrollbar'
                            style={{
                                padding: 24,
                                minHeight: '100vh',
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                </div>
            </Layout>
        </Layout>
    );
};

export default MainLayout;