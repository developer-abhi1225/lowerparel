import React, {useState, useEffect}  from 'react';
import {Card, Row, Col, Button, Form, Input} from 'antd';
import './style.css';
import axios from 'axios';
import cloneDeep from 'lodash/cloneDeep';
import filter from 'lodash/filter';

const Tasks = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // WILL CALL AN ACTION IN CASE OF REDUX
        axios.get('http://jsonplaceholder.typicode.com/todos').then(response => {
            setData(response.data);
        }).catch(err => {
            console.log("err",err);
        });
    }, []);
    
    return (
        <div className="tasklistwrapper">
            <Card bordered={false}>
                <div className={"tasklist"}>
                    {data.map(item => (
                    <Row gutter={30} type={"flex"} align={"space-between"} className={"tasklist__task"}>
                        <Col lg={4} md={4} sm={4}>
                            <span>
                                {item.id}
                            </span>
                        </Col>
                        <Col lg={10} md={10} sm={14} className={'tasklist__task__title'}>
                            <span>
                                {item.title}
                            </span>
                        </Col>
                        <Col lg={6} md={6} sm={4}>
                            <span>
                                {`${item.completed}`}
                            </span>
                        </Col>
                        <Col lg={4} md={4} sm={2}>
                            <Button type="danger" onClick={e => withDeleteTask(data, setData, item.id) }> Delete</Button>
                        </Col>
                    </Row>))}
                </div>
                <Row>
                    <Col lg={24} md={24} className={"addtask"}>
                        <Form layout={"inline"} onFinish={values => withAddtask(data, setData, values)}>
                            <Row gutter={30}>
                                <Col lg={10}>
                                    <Form.Item name="title">
                                        <Input placeholder={"Title"} />
                                    </Form.Item>
                                </Col>
                                <Col lg={10}>
                                    <Form.Item name="completed">
                                        <Input placeholder={"status"} />
                                    </Form.Item>
                                </Col>
                                <Col lg={4}>
                                    <Form.Item>
                                        <Button type={"primary"} htmlType="submit">Add</Button>
                                    </Form.Item> 
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Tasks

const withAddtask = (data, setData, values) => {
    const newData = cloneDeep(data);
    const newId = parseInt(newData[newData.length - 1].id) + 1;
    newData.push({...values, id:newId})
    setData(newData);
}

const withDeleteTask = (data, setData, values) => {
    const newData = filter(data, item => item.id !== values)
    setData(newData);
}