import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Lottie from 'lottie-react';
import lottieLogin from '../../assets/login.json';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { useAppDispatch } from '../../redux/hook';
import { setUser } from '../../redux/features/auth/authSlice';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LogIn: React.FC = () => {
    const [loginUser, data] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
        // {
        //     "id": "A-0001",
        //     "password": "#Password123"
        // }
        const userData = {
            id: values.username,
            password: values.password
        }
        loginUser(userData);
        if (data.data) {
            dispatch(setUser({
                id: data.data.doc.id,
                email: data.data.doc.email,
                role: data.data.doc.role
            }))
        }
        if (data.isSuccess) {
            navigate('/');
        }
        // console.log(data.data);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (<div style={{ width: '50%', height: '100vh', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '50rem' }}>
                <Lottie animationData={lottieLogin} loop={true} />
            </div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: '100%' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>)
};

export default LogIn;