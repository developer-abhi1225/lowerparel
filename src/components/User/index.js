import React, {useState} from 'react'
import {Card, Row, Button, Col, Form, Input} from  'antd';
import './user.css';



function Users(props) {

    const {username, password} = JSON.parse(localStorage.getItem('user'));
    const [changePassword , setChangePassword] = useState(false);
    return (
        <Card bordered={false} className={'user'}>
            <Row>
                <p><span className={'user__label'}>UserName : </span> <span className={'user__value'}>{username}</span></p>
            </Row>
            <Row>
                {
                    changePassword ? (
                    <p>
                        <span className={'user__label'}> {"New Password :"}</span>
                        <span className={'user__value'}>
                            <Form onFinish={values => {savePass(values, setChangePassword)}}>
                                <Form.Item>
                                    <Input name={'password'} />   
                                </Form.Item>
                            </Form>
                        </span>
                    </p>
                    ) : (
                    <p>
                        <span className={'user__label'}>{"Password :"}</span> 
                        <span className={'user__value'}>{`**********`}</span>
                    </p>   
                    )
                }
            </Row>
            <div className={"user__footer"}>
                <Row type={'flex'} align={"space-between"}>
                    <Col lg={4} md={4}>
                        { changePassword ? (
                            <Button htmlType='submit' >Save Password</Button>
                        ) :(
                        <Button onClick={e => changePass(setChangePassword)} >Change Password</Button>
                        )}
                    </Col>
                    <Col lg={4} md={4}>
                        <Button onClick={e => logout(props)}>Logout</Button>
                    </Col>
                </Row>
            </div>
        </Card>
    )
}

export default Users

const logout = ({history}) => {
    localStorage.clear();
    history.push('/login');
}

const changePass = (setChangePassword) => {
    setChangePassword(true);
}

const savePass = (values, setChangePassword) => {
    const userDetails = {...JSON.Parse(localStorage.getItem('user')), ...values}
    localStorage.setItem('user', JSON.stringify(userDetails))
    setChangePassword(false);

}