import { useState } from 'react';
import { Button, Form, Input, Modal, Table } from 'antd';
import * as XLSX from 'xlsx';

function TableAntd() {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([
        {
            key: '1',
            name: 'Nilesh',
            age: 32,
            address: 'New York No. 1 Lake Parkk',
        },
        {
            key: '2',
            name: 'Nill',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Chetan Sir',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Khyati',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ]);

    const [searchText, setSearchText] = useState('');
    const onFinish = (values) => {
        const newData = [...data];
        newData.push({
            key: newData.length + 1,
            ...values,
        });
        setData(newData);
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const handleAddEntry = () => {
        setIsModalVisible(true);
    };

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'table-data.xlsx');
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Nilesh',
                    value: 'Nilesh',
                },
                {
                    text: 'Nill',
                    value: 'Nill',
                },
                {
                    text: 'Chetan Sir',
                    value: 'Chetan Sir',
                },
                {
                    text: 'Khyati',
                    value: 'Khyati',
                },
            ],
            //Select All button add for this 4 line add
            // filterMode: 'tree',
            // filterSearch: true,
            // onFilter: (value, record) => record.name.startsWith(value),
            // width: '30%',

            //For this Filter work on input search
            onFilter: (value, record) => record.name.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
    ];

    const onSearch = (value) => {
        setSearchText(value);
    };

    const filteredData = data.filter((record) =>
        Object.values(record).some((value) =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
    );

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div>
            <Button type="primary" onClick={handleAddEntry} style={{ marginBottom: '16px' }}>
                Add Entry
            </Button>
            <Input.Search
                placeholder="Search"
                allowClear
                onChange={(e) => onSearch(e.target.value)}
                style={{ width: '30%', marginBottom: '16px' }}
            />
            <Button onClick={handleDownload} style={{ marginBottom: '16px', marginLeft: '16px' }}>
                Download
            </Button>
            <Table columns={columns} dataSource={filteredData} onChange={onChange} />
            <Modal title="Add Entry" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter a name',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="Age"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter an age',
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter an address',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default TableAntd;