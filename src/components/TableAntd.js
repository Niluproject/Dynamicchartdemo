import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import './Table.css';
import * as XLSX from 'xlsx';
function TableAntd() {

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
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.name.startsWith(value),
            width: '30%',
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

    const data = [
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
    ];

    const [searchText, setSearchText] = useState('');

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

    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'table_data.xlsx');
    };

    return (
        <div>
            <Input.Search
                placeholder="Search"
                allowClear
                onChange={(e) => onSearch(e.target.value)}
                style={{ width: '30%', marginBottom: '16px' }}
            />
            <Button type="primary" onClick={downloadExcel} style={{ marginBottom: '16px' }}>
                Download Excel
            </Button>
            <Table columns={columns} dataSource={filteredData} onChange={onChange} />
        </div>
    )
}

export default TableAntd;
