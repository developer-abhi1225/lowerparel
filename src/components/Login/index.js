import React from 'react';
import {Card, Input, Form, Button} from "antd";
import './style.css';

function Login(props) {
    
    const onFinish = values => {
        localStorage.setItem('user',JSON.stringify({...values}));
        localStorage.setItem('token',true);
        window.location = "/home"
    }
    return (
        <div className={'loginwrapper'}>
            <Card title={"Login"} className={"login"}>
                <Form
                    layout={'horizontal'}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            { required: true, message: 'Please input your username!' },
                            {min:4, message:"Minimum 4 characters required."},
                            {max:10, message:"Maximum 10 characters required."}
                    ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            {min:4, message:"Minimum 4 characters required."},
                            {max:10, message:"Maximum 10 characters required."},
                        
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{float:"right", width:"100%"}}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login
