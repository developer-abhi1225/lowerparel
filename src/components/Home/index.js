import React , {useEffect, useState} from 'react'
import {Row, Select, Card} from 'antd';

const data = {
    "1":"This is content of dropdown 1",
    "2":"This is content of dropdown 2",
    "3":"This is content of dropdown 3",
}

function Home() {

    const [selectedOption , setSelectedOption] = useState("1");

    return (
        <Card style={{padding:"10px"}} bordered={false}>
            <Row>
                <Select defaultValue={selectedOption} onSelect={value => setSelectedOption(value)}>
                    <Select.Option key={1} value={"1"}> Dropdown 1 </Select.Option>
                    <Select.Option key={2} value={"2"}> Dropdown 2 </Select.Option>
                    <Select.Option key={3} value={"3"}> Dropdown 3 </Select.Option>
                </Select>
            </Row>
            <Row style={{marginTop:"50px"}}>
                {data[selectedOption]}
            </Row>
        </Card>
    )
}

export default Home
