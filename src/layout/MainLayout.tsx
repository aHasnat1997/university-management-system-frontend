import React from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import logo from '../assets/favicon.png';
import { Outlet } from 'react-router-dom';

const { Content, Sider } = Layout;

const items = [
    {
        title: 'Dashboard',
        icon: AppstoreOutlined
    },
    {
        title: 'Dashboard',
        icon: AppstoreOutlined,
        child: [
            {
                title: 'Dashboard'
            },
            {
                title: 'Dashboard'
            },
        ]
    },
    {
        title: 'Dashboard',
        icon: AppstoreOutlined
    },
    {
        title: 'Dashboard',
        icon: AppstoreOutlined,
        child: [
            {
                title: 'Dashboard'
            }
        ]
    },
].map(
    (item, i) => ({
        key: i,
        icon: React.createElement(item.icon),
        label: item.title,
        children: item.child?.map((child, i) => ({
            key: i,
            label: child.title,
        }))
    }),
);

const MainLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            // onBreakpoint={(broken) => {
            //     console.log(broken);
            // }}
            // onCollapse={(collapsed, type) => {
            //     console.log(collapsed, type);
            // }}
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} items={items} />
            </Sider>
            <Layout>
                {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
                <div style={{ overflow: 'auto', height: '100vh' }}>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
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