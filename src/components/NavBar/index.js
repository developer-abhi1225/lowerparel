import React from 'react';
import { Layout, Menu } from 'antd';
import './navbar.css';
import logo from '../../logo.png';
import MainApp from '../MainApp/MainApp';
import find from 'lodash/find';

const {Header, Content } = Layout;
const keyMap = {"1":"/home", "2":"/tasks", "3":"/user"}

function NavBar(props) {
    const handleMenuChange = e => {
        props.history.push(keyMap[e.key])
    }

    const selectedKey = [];
    find(keyMap, (value, key ) => {
        if(value === props.history.location.pathname){
            selectedKey.push(key)
        }
    } )
    return (
        <Layout>
            <Header>
                <div className="logo" onClick> <img src={logo}></img></div>
                <Menu mode="horizontal" defaultSelectedKeys={selectedKey} onClick={handleMenuChange}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Tasks</Menu.Item>
                    <Menu.Item key="3">User</Menu.Item>
                </Menu>
            </Header>
            <Content>
                <MainApp history={props.history} />
            </Content>
        </Layout>
    )
}

export default NavBar
