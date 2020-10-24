import React from 'react';
import {Card, Input, Form, Button} from "antd";

function Login(props) {
    
    const onFinish = values => {
        localStorage.setItem('user',JSON.stringify({...values}));
        localStorage.setItem('token',true);
        window.location = "/home"
    }
    return (
        <Card title={"Login"}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login
